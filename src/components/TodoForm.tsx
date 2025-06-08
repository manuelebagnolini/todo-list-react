import React from 'react';
import { Form, Input, Button, Select, DatePicker, message } from 'antd';
import { useTranslation } from 'react-i18next';

interface TodoFormProps {
  categories: string[];
  addTodo: (text: string, category: string, dueDate: Date | null) => void;
}

interface TodoFormValues {
  title: string;
  category: string;
  dueDate?: Date;
}

const TodoForm: React.FC<TodoFormProps> = ({ categories, addTodo }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const handleFinish = (values: TodoFormValues) => {
    addTodo(values.title, values.category, values.dueDate || null);
    form.resetFields();
  };

  const handleFinishFailed = () => {
    message.error(t('form_submission_failed'));
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
      layout="vertical">
      <Form.Item
        name={'title'}
        rules={[{ required: true, message: t('title_required') }]}>
          <Input placeholder={t('title')} />
      </Form.Item>
      <Form.Item
        name={'category'}
        rules={[{ required: true, message: t('category_required') }]}>
        <Select
          options={categories.map((cat) => ({ value: cat, label: cat }))}
          placeholder={t('category')}
        />
      </Form.Item>
      <Form.Item
        name={'dueDate'}>
        <DatePicker
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