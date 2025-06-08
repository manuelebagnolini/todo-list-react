import React from 'react';
import { List, Button, Tooltip } from 'antd';
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { Todo } from '../types';
import { useTranslation } from 'react-i18next';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  const { t } = useTranslation();
  
  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          key={todo.id}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#aaa' : 'inherit',
          }}
          actions={[
            <Tooltip title={todo.completed ? t('mark_as_incomplete') : t('mark_as_complete')}>
              <Button
                icon={todo.completed ? <CloseOutlined /> : <CheckOutlined />}
                onClick={() => toggleTodo(todo.id)}
              />
            </Tooltip>,
            <Tooltip title={t('delete')}>
              <Button
                icon={<DeleteOutlined />}
                onClick={() => deleteTodo(todo.id)}
                danger
              />
            </Tooltip>
          ]}
        >
          <List.Item.Meta
            title={todo.title}
            description={`${t('category')}: ${todo.category} | ${t('due_date')}: ${todo.dueDate ? todo.dueDate.toLocaleDateString() : t('not_set')}`}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;