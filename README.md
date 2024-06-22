## Contain

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Authorization using OPAL](#authorization-using-opal)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Add new tasks with a title and description
- View a list of all tasks
- Search for tasks
- Delete tasks
- undo task
- edit task
- Authorization using OPAL


### Prerequisites

Ensure you have the following installed:

- Python 3.x
- pip 
- Docker
- docker-compose

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/AI-ApeX-DeV/ActionList-OPAL.git
    cd ToDoList
    ```

2. **Create and activate a virtual environment**:
    ```sh
    python -m venv venv
    venv\Scripts\activate  # On Windows
    ```

3. **Install the dependencies**:
    ```sh
    pip install -r requirements.txt
    ```

4. **Apply migrations**:
    ```sh
    python manage.py migrate
    ```

5. **Run the development server**:
    ```sh
    python manage.py runserver
    ```

6. **Open your browser and visit**:
    ```
    http://127.0.0.1:8000/
    ```

### Authorization using OPAL

This project uses OPAL (Open Policy Agent) for authorization to ensure that only authorized users can access certain tasks.

The `OPALAuthorizationMiddleware` class is defined to handle authorization using OPAL.

## Usage

- **Add a Task**: Click on the "Add Task" button on the home page, fill in the title and description, and submit.
- **View Tasks**: The tasks will be listed on the tasks page.
- **Delete a Task**: Click the "Delete" button next to the task you want to remove.

