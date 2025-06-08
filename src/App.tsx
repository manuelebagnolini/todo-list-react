import React, { useEffect, useState } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { Flex, FloatButton, Layout, Modal, Tabs, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Todo } from './types';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import uuid from 'react-uuid';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [todos, setTodos] = useState<Todo[]>([]);
  const categories = ['Work', 'Personal', 'Shopping', 'Other']; // TODO: Replace with dynamic categories if needed
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  const addTodo = (title: string, category: string, dueDate: Date | null) => {
    const newTodo: Todo = {
      id: uuid(),
      title,
      category: category,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed, completedAt: todo.completed ? undefined : new Date() } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todosByCategory = todos.reduce<Record<string, Todo[]>>((acc, todo) => {
    acc[todo.category] = acc[todo.category] || [];
    acc[todo.category].push(todo);
    return acc;
  }, {});

  return (
    <Layout>
      <Header>
        <Title level={3} style={{ margin: 0, color: '#fff', width: '100%', textAlign: 'center', wordBreak: 'break-word' }}>
          {t('app_title')}
        </Title>
      </Header>
      <Content>
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          destroyOnHidden={true}
          centered
          title={t('add_todo')}
        >
          <TodoForm
            categories={categories}
            addTodo={(title, category, dueDate) => {
              addTodo(title, category, dueDate);
              setIsModalOpen(false);
            }}
          />
        </Modal>
        <div className="scrollable-content">
          <Flex vertical gap={16} style={{ padding: '16px', maxWidth: 600, margin: '0 auto', width: '100%' }}>
            <Tabs
              defaultActiveKey="all"
              items={[
                {
                  key: 'all',
                  label: t('all'),
                  children: (
                    <TodoList
                      todos={todos}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo}
                    />
                  ),
                },
                {
                  key: 'byCategory',
                  label: t('byCategory'),
                  children: (
                    <>
                      {Object.entries(todosByCategory).map(([category, catTodos]) => (
                        <div key={category} style={{ marginBottom: 24 }}>
                          <h3>{category}</h3>
                          <TodoList
                            todos={catTodos}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                          />
                        </div>
                      ))}
                    </>
                  ),
                },
              ]}
            />
          </Flex>
        </div>
      </Content>
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        style={{ right: 24, bottom: 24 }}
        onClick={() => setIsModalOpen(true)}
        tooltip={t('add_todo')}
    />
    </Layout>
  );
};

export default App;