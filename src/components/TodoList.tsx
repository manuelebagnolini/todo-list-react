import React from 'react';
import { List, Button } from 'antd';
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos);
  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          key={todo.id}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}  
          actions={[
            <Button
              icon={todo.completed ? <CloseOutlined /> : <CheckOutlined />}
              onClick={() => toggleTodo(todo.id)}
            />,
            <Button
              icon={<DeleteOutlined />}
              onClick={() => deleteTodo(todo.id)}
              danger
            />
          ]}
        >
          <List.Item.Meta
            title={todo.title}
            description={`Category: ${todo.category} | Due: ${todo.dueDate ? todo.dueDate.toLocaleDateString() : 'N/A'}`}

          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;