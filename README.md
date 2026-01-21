# Angular Task Manager 🚀

This repository documents my **Angular learning journey** through a hands-on **Task Manager project**. The goal of this project was to understand and apply core Angular concepts by building a small but complete frontend application with data persistence using **Local Storage**.

---

## 📌 What I Learned

While building this project, I explored and implemented the following Angular concepts:

### 🔹 Angular Fundamentals

- Creating and organizing **Components**
- Using **Services** for shared logic and data handling
- Understanding the Angular project structure

### 🔹 Data Binding

- **Interpolation** (`{{ }}`)
- **Property Binding** (`[property]`)
- **Event Binding** (`(event)`)
- **Two-Way Binding** using `ngModel` in forms

### 🔹 Component Communication

- `@Input()` for passing data from parent to child
- `@Output()` and `EventEmitter` for sending events from child to parent

### 🔹 Directives

- Structural Directives:
  - `*ngFor`
  - `*ngIf`

- New Angular Control Flow:
  - `@for(){}`
  - `@if(){}`

### 🔹 Browser Storage

- Using **Local Storage** to:
  - Store tasks when added or deleted
  - Persist data even after page refresh

---

## 🛠️ Project Overview

### Task Manager Application

This is a simple **Task Manager App** where:

- Users are pre-defined (dummy users)
- Tasks are pre-defined (dummy tasks)
- Tasks can be:
  - Added
  - Deleted

- All task changes are stored in **Local Storage**, so data remains even after refreshing the browser

The project focuses on frontend logic and Angular concepts rather than backend integration.

---

## 👥 Dummy Users

The application uses a fixed list of users stored in a `dummy-user.ts` file and also represented in JSON format.

```ts
export const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
  },
  {
    id: 'u2',
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  {
    id: 'u3',
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
];
```

---

## 📝 Dummy Tasks

The app also starts with a predefined list of tasks. These tasks are linked to users using `userId`.

```ts
const dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary: 'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];
```

---

## 💾 Local Storage Implementation

- When a task is **added or deleted**, the updated task list is saved in **Local Storage**
- On application load, tasks are:
  - First checked in Local Storage
  - If found, loaded from there
  - Otherwise, loaded from `dummyTasks`

This ensures:

> ✅ Task data persists even after refreshing the page

---

## 🖥️ Features

- View list of users
- Select a user to view assigned tasks
- Add new tasks for a user
- Delete existing tasks
- Persistent storage using browser Local Storage
- Component-based UI with clean separation of logic

---

## 🚀 How to Run the Project

### Prerequisites

- Node.js installed
- Angular CLI installed

### Steps

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd <project-folder>

# Install dependencies
npm install

# Run the development server
ng serve
```

Open your browser and visit:

```
http://localhost:4200
```

---

## 🎯 Learning Objective

This project was built purely for **learning purposes** to:

- Understand Angular component architecture
- Practice data binding and communication between components
- Learn how frontend state can be managed using browser storage
- Get comfortable with Angular’s new control flow syntax

---

## 📌 Future Improvements

- Add backend support using Spring Boot / Node.js
- Implement user authentication
- Add task status (Pending / Completed)
- Add filters and sorting
- Improve UI with Angular Material or Bootstrap

---

If you find this project helpful, feel free to ⭐ star the repository and share feedback!
