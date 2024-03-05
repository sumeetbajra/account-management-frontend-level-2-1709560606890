# Personal Task Manager Frontend

Your challenge is to build a frontend application that allows users to manage their personal tasks. The app will include features to create, mark as completed, and filter tasks based on their completion status.

### Frontend requirements

The application's UI should allow users to input a task, submit it, view the list of tasks, mark tasks as completed, and filter tasks by their completion status.

#### Task Creation Form

```html
<form>
  <input data-test="task-input-title" placeholder="Enter task title..." />
  <button data-test="task-submit" type="submit">Add Task</button>
</form>
```

After submitting a task, the input field should be cleared.

#### Tasks List

Each task should be displayed in an individual container with the following structure:

```html
<div data-test="task" data-completed="${task-completed-status}">
  <p>${task-title}</p>
  <button data-test="task-complete">Mark as Completed</button>
</div>
```

- `${task-title}` - The title of the task.
- `${task-completed-status}` - A boolean indicating whether the task has been completed (`true` or `false`).

#### Task Filtering Options

Provide buttons or toggles to filter tasks:

```html
<button data-test="filter-completed">Completed Tasks</button>
<button data-test="filter-uncompleted">Uncompleted Tasks</button>
```

### Tech Stack

You are expected to use the following technologies:

- **HTML/CSS**: For structuring and styling your application.
- **ReactJS**: Utilize React functional components and hooks.
- **Redux**: For state management across the application.
- **Parcel**: As your application bundler.
- **TypeScript**: For type-checking and enhancing code quality.
- **Chakra UI**: To speed up the development of the UI.
- **Unit Testing**: Choose a module and write unit tests for it. You’re free to use testing libraries such as Jest or React Testing Library.

### Additional requirements

- Ensure that your application passes the provided E2E tests. These tests will simulate user actions based on the data-test attributes.
- Implement client-side validation for the task input to prevent empty tasks from being submitted.
- Handle errors gracefully, such as displaying a message when the task submission fails.
- Optimize the app's performance by avoiding unnecessary renders.
- Organize your codebase in a maintainable way, extracting reusable components and utilities where it makes sense.

## Getting Started

Here are the steps you should follow to set up your project:

1. Initialize a new React project using Create React App with TypeScript template or set up Parcel as your application bundler.
2. Set up Redux for state management. Create slices for tasks with actions for adding, completing, and filtering tasks.
3. Use Chakra UI to build your UI components, following the structures provided above.
4. Implement functionality to add, mark as completed, and filter tasks according to the completion status.
5. Write a unit test for one of your components or utilities using Jest or React Testing Library.
6. Ensure your application is free of errors and passes all the criteria mentioned in the frontend requirements.

Good luck with your coding challenge!