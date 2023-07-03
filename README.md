# Vanilla JS Form App

This project is a demonstration of a plain JavaScript application using ES6 modules and Webpack as a module bundler. It consists of a form that takes user input and validates it.

## Features

- The form accepts the following fields:
  - First Name
  - Last Name
  - Email Address
  - Gender (options: Male, Female, Other)
  - Description (text area)
  - State (drop-down with US states)
- The form validates all the fields as required upon submission.
- The app is implemented using Vanilla JS without relying on any front-end libraries or frameworks such as jQuery, Angular, or React.
- The design is implemented using plain HTML/CSS without using any CSS frameworks like Bootstrap.

## Setup

To run this project locally, follow the steps below:

1. Clone the repository:
```bash
git clone https://github.com/username/repo.git
```

2. Navigate into the directory:

```bash
cd repo
```

3. Install the dependencies:
```bash 
npm install
```

## Usage

To run the project, use the following command:

```bash
npm start
```

## Testing
The project includes unit test using Jest.  To run them, use the following command:

```bash
npm run test
```

To run the end-to-end tests, use the following command:

```bash
npm run test:e2e
```

## TODO

- add e2e test cases using puppeteer
