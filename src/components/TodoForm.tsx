import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';

interface TodoFormProps {
  categories: string[];
  addTodo: (text: string, category: string, dueDate: Date | null) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ categories, addTodo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) return;
    console.log(`Adding todo: ${title} in category: ${category}`);
    addTodo(title, category, dueDate);
    setTitle('');
    setCategory('');
    setDueDate(null);
  };

  return (
    <Form onSubmitCapture={handleSubmit}>
      <Form.Item>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t('title')}
        />
      </Form.Item>
      <Form.Item>
        <Select
          onChange={(value) => setCategory(value)}
          options={categories.map((cat) => ({ value: cat, label: cat }))}
          placeholder={t('category')}
        />
      </Form.Item>
      <Form.Item>
        <DatePicker
          onChange={(date) => setDueDate(date ? date.toDate() : null)}
          placeholder={t('due_date')}
          style={{ width: '100%' }}
         />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t('add_todo')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;