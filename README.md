# Formulari app
The frontend for formulari

The formulari backend (REST API) can be found [here](https://github.com/jhoffmann99/formulari)

## Screenshots
### Home Page
![Alt text](./src/assets/app/formulari-home.png?raw=true "Home Page")

### Register Page
![Alt text](./src/assets/app/formulari-register.png?raw=true "Register Page")

### Login Page
![Alt text](./src/assets/app/formulari-login.png?raw=true "Login Page")

### Dashboard Page
![Alt text](./src/assets/app/formulari-dashboard.png?raw=true "Dashboard Page")

### Template List Page
![Alt text](./src/assets/app/formulari-templates.png?raw=true "Template List Page")

### Add Template Page
![Alt text](./src/assets/app/formulari-template-add.png?raw=true "Add Template Page")

### Add Check Page
![Alt text](./src/assets/app/formulari-check.png?raw=true "Add Check Page")

### Customer Check Reply Page
![Alt text](./src/assets/app/formulari-check-reply.png?raw=true "Check Reply Page")

### Check Submitted Page
![Alt text](./src/assets/app/formulari-check-submitted.png?raw=true "Check submitted Page")

### Outbox Page
![Alt text](./src/assets/app/formulari-outbox.png?raw=true "Ausgang Page")

### Archive Page
![Alt text](./src/assets/app/formulari-archiv.png?raw=true "Archiv Page")

### Paypal Integration
![Alt text](./src/assets/app/formulari-paypal.png?raw=true "Paypal Integration")

### Active Subscription Page
![Alt text](./src/assets/app/formulari-subscription-active.png?raw=true "Active Subscription Page")

## Features

- Navigation Component
- Footer Component
- Login Page
- Registration Page
- Forgot Password Page (Initiation)
- Reset Password Page
- Reset Password Success Page
- Home Page
- Not Found Page (404-Page)
- Responsive Design
- Component Routing
- Pricing Page
- Paypal Checkout
- Create Templates with diverse components (text field, number field, single/multiple choice, rating, date, time, datetime, etc.)
- Create Checks
- Email Notifications
- Handle Check Replies
- Check Overview Page (Inbox, Outbox, Archive)
- JWT Authorization/Authentication via HTTP Authorization Header

## Libs

- Bootstrap as css framework
- expressjs and some additional express middlewares (e.g. cors, compression) to serve the frontend app
- ngx-paypal to integrate the payment provider paypal
- jwt-decode to extract information from the jwt token

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
