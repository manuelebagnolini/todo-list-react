# Todo List React PWA

This is a **Todo List application** built with **React**, **TypeScript**, and **Vite**, designed as a **Progressive Web App (PWA)**.  
It allows you to manage tasks, categories, due dates, and sends local notifications for tasks that are about to expire or have expired.

---

## Main Features

- Manage tasks with title, category, due date, and completed status
- Local notifications for tasks that are due soon or have expired (via Service Worker)
- Data saved locally (localStorage)
- Responsive and modern UI with [Ant Design](https://ant.design/)
- Multilanguage support via [react-i18next](https://react.i18next.com/)
- Installable as a PWA on desktop and mobile

---

## Technologies Used

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [react-i18next](https://react.i18next.com/)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) (for Service Worker and installability)
- [Workbox](https://developer.chrome.com/docs/workbox/) (for caching and notifications)
- [uuid](https://www.npmjs.com/package/react-uuid) (for unique IDs)

---

## Requirements

- [Node.js](https://nodejs.org/) **v22** or higher
- [npm](https://www.npmjs.com/) **v10** or higher

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd todo-list-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Start in Development Mode

```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown by Vite).

---

## Build and Production Preview

```bash
npm run build
npm run preview
```
The preview will be available at [http://localhost:4173](http://localhost:4173).

---

## Notification Notes

- Notifications work only on **HTTPS** or **localhost**.
- On Chrome, notifications are not available in incognito mode.
- To receive notifications, allow permissions when prompted by the browser.
