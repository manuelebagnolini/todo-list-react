import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        "app_title": "TODO List",
        "add_todo": "Add TODO",
        "title": "Title",
        "title_required": "Title is required",
        "category": "Category",
        "category_required": "Category is required",
        "due_date": "Due Date",
        "not_set": "N/A",
        "byCategory": "By Category",
        "all": "All",
        "form_submission_failed": "Form submission failed",        
      }
    },
  }},
)