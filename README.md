# Expense Tracker

A web application for tracking expenses, allowing users to add, edit, and delete expenses based on category and date, as well as view a summary of their expenses.

## Installation

To install the dependencies

```bash
  npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/rohit-cmd-lang/expense-tracker
```

Go to the project directory

```bash
  cd expense-tracker
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Demo

This project is deployed on the link below:

https://expense-tracker-beige-alpha.vercel.app/

## Screenshots

![App Screenshot](https://github.com/rohit-cmd-lang/expense-tracker/blob/master/src/assets/Screenshot%202024-08-26%20225358.png)

## Features

- Wallet Balance can be increased.
- A user cannot spend more than the wallet balance. An alert is shown if a user tries to do so.
- An user add new expenses with details like title, amount, category, and date.
- User can edit their expenses after adding them
- A pie chart showing the percentage of their expenses on various things
- A bar chart showing the top expenses in the particular category
- A list of recent transactions.

## Appendix

A sample of expenses are added by default to show the charts and pagination working

## Tech Stack

**Client:** React, Redux, ReduxToolkit

**Alerts:** Notistack

**Charts:** Recharts

**Modal:** React-Modal

**Icons:** React-Icons

**Deployment:** Vercel
