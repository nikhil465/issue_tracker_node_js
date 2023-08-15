# Issue Tracker App

The **Issue Tracker App** is a web-based application designed to help users manage projects and track issues related to those projects. It provides a user-friendly interface to create projects, add issues, and keep track of project details. The application is built using Node.js, Express.js, MongoDB, and EJS templating for the frontend.

## Features

- **Project Management:** Users can create new projects with a name, author, and optional description.

- **Issue Tracking:** Users can create issues within a project. Each issue has a title, description, labels, and an assigned author.

- **Labels:** Issues and projects can be categorized using labels.

- **Project Details:** Users can view the details of a project, including its issues and associated labels.

- **Deletion:** Projects and issues can be easily deleted.

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Issue-Tracker-App
   ```

2. Install the required dependencies:
   ```sh
   npm install
   ```

3. Set up MongoDB:
   - Make sure you have MongoDB installed and running.
   - Create a database named `issue_tracker_development` (or as configured in the environment).

4. Set up Environment Variables:
   - Create a `.env` file in the root directory based on `.env.example`.
   - Update the variables as needed, especially for production deployment.

5. Start the Server:
   ```sh
   npm start
   ```

6. Access the application in your web browser:
   ```
   http://localhost:8000/
   ```

## Usage

1. Home Page:
   - Access the home page to see a list of all projects.
   - Click on a project to view its details.

2. Create Project:
   - Click on "Create Project" to create a new project.
   - Provide a name, author, and optional description.

3. Project Details:
   - View a project's details, including issues and labels associated with it.
   - Click on an issue to view its details.

4. Create Issue:
   - Within a project's details page, click on "Create Issue" to add a new issue.
   - Provide a title, description, author, and labels for the issue.

5. Delete Project/Issue:
   - Within a project's or issue's details page, click on "Delete" to remove the project or issue.

## File Structure

- `index.js`: Main application entry point and server setup.
- `routes/index.js`, `routes/project.js`, `routes/issue.js`: Express route definitions.
- `models/project.js`, `models/issue.js`: Mongoose schemas and models for projects and issues.
- `controllers/home_controller.js`, `controllers/project_controller.js`, `controllers/issue_controller.js`: Controllers for handling different actions.
- `config/environment.js`: Environment configuration for development and production.
- `config/mongoose.js`: Database connection setup using Mongoose.
- `views/`: Contains EJS templates for rendering different views.
- `public/`: Static assets like CSS, images, and client-side JavaScript.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- Sass (Stylesheets)
- Morgan (Logging)

## Contribute

Contributions are welcome! If you find any issues or want to enhance the application, feel free to create pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

*Note: This readme provides an overview of the "Issue Tracker App" and its features. For detailed installation instructions and usage guidelines, please refer to the documentation provided in the repository.*
