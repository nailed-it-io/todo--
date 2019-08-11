# todo-*

Purpose of this repo is learning web development and better understanding of its basic principles while implementing simple application in different technologies. 

## Application

Application we are going to build is todo app similar to [this](http://todomvc.com/examples/vanillajs). 

### Description:

- todo item is created by entering text in input field and pressing `Enter` 
- all items are listed below the input field and they can be filtered (All, Active, Completed)
- item can be updated 
- item can be marked as completed via checkbox and it is strikethrough when completed
- item can be deleted by clicking cross icon

### Variants:

- Application that runs inside web browser. Todo list state should be saved on page reload. Tech stack: HTML/CSS, Javascript, jQuery, React

  1. `todo-js` - vanilla JavaScript
  2. `todo-jquery` - use jQuery to access DOM
  3. `todo-react` - use React

- Web MVC - Application that runs on web server. Pages with static content and data are rendered on server and served to web browser.

  - `todo-servlets` - Java servlets and binary serialization
  - `todo-jpa` - use JSP to isolate presentation logic 
  - `todo-spring-mvc` - Spring MVC with JSP or Thymeleaf

- Web REST - Architecture with two separated applications, client (in browser) and server (on web server), which exchange data in JSON format via REST API.

  - `todo-react-spring-mysql` - use React for client (reuse code from `todo-react`) and Spring Boot for server application. Persist data in MySQL database.

- Severless - Consists of web application, cloud functions and remote database. There is no specific backend application. If there is a need for business logic, cloud functions are used.

	- `todo-react-firebase` - use React (reuse code from `todo-react`) and Firebase platform - Firestore as NoSQL database and optionally Cloud Functions to execute some logic before saving or pulling data from the database.

## Workflow 

Create folder named as your GitHub account. You will work everything inside it. Each app variant should be placed into separate folder with corresponding name. Example:

```
|- MyGithubAccount
|-- todo-js
|-- todo-jquery
|-- ...
```

Create your develop branch named `MyGithubAccount-develop` and push it to this repository. Create new branch from that one, for every project and name it by your GitHub account and project name (`MyGithubAccount-todo-js`). After you finish the project, push the branch to this repository and create pull request from that branch to your develop branch.
