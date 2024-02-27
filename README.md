# Wallet Project

This project is a simple wallet application that allows users to manage their funds by depositing, withdrawing, and transferring money to other accounts.

## Features

- **Deposit funds:** Users can deposit money into their wallet.
- **Withdraw funds:** Users can withdraw money from their wallet.
- **Transfer funds:** Users can transfer money from their wallet to another user's wallet.

## Technologies Used

- **Frontend:**
  - React.js
  - HTML/CSS
  - (Optional) Material-UI or Bootstrap for styling
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  
## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vipin-jangra/Wallet
    ```

2. **Install dependencies for both frontend and backend:**

  ```bash
   cd client
    npm install

    cd ../server
    npm install
    ```

4. **Configure environment variables:**

Rename .env.example to .env in the backend directory.
Set up environment variables such as database connection string, JWT secret, etc.

4. **Run the backend server:**
    ```bash
        cd backend
        npm start
    ```
5. **Run the frontend server:**
    
    ```bash
        cd frontend
        npm run dev
    ```

## API Endpoints

### User Authentication

- `POST /api/users/login`: 
  - Description: User login.
  - Request Body: `{ "username": "example", "password": "example" }`
  - Response: `{ "token": "<user_token>" }`

- `POST /api/users/register`: 
  - Description: User registration.
  - Request Body: `{ "username": "example", "password": "example", "email": "example@example.com" }`
  - Response: `{ "message": "User registered successfully" }`

### Wallet Management

- `POST api/transactions/deposit-fund`: 
  - Description: Deposit funds into wallet.
  - Request Body: `{ "amount": 100 }`
  - Response: `{ "message": "Funds deposited successfully" }`

- `POST /api/transactions/withdraw-fund`: 
  - Description: Withdraw funds from wallet.
  - Request Body: `{ "amount": 50 }`
  - Response: `{ "message": "Funds withdrawn successfully" }`

- `POST api/transactions/transfer-fund`: 
  - Description: Transfer funds to another user.
  - Request Body: `{ "amount": 50, "recipient": "recipient_username" }`
  - Response: `{ "message": "Funds transferred successfully" }`





https://github.com/vipin-jangra/Wallet/assets/45737214/c4f08107-8aae-4931-a392-d73ee9afc863

