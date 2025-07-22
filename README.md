# 🛒 Shoppyglobe Backend

ShoppyGlobe-backend is a simple e-commerce backend built with **Node.js**, **Express**, and **MongoDB**. It supports user authentication, product management, and cart functionalities.

GitHub Link: https://github.com/ROHINI-H/Shoppyglobe-backend.git

## 🛸 Features

- ✅ User registration and login with JWT authentication
- 📦 Product & Cart CRUD (Create, Read, Update, Delete)
- 🛍️ Add, update, and remove items in the cart after user authentication
- 🔒 Protected routes using middleware
- 🧪 Error handling and input validation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Auth**: JWT & bcrypt
- **Environment Config**: dotenv

## 🗃️ Project Structure
<pre>
shoppyglobe-backend/
│
├── controllers/
│   ├── user.controller.js
│   ├── cart.controller.js
│   └── product.controller.js
│
├── middleware/
│   ├── authentication.js
│   └── handleError.js
│
├── models/
│   ├── cart.model.js
│   ├── product.model.js
│   └── user.model.js
│
├── routes/
│   ├── user.routes.js
│   ├── cart.routes.js
│   └── product.routes.js
│
├── .env
├── API test Results.pdf  #Added screenshots of the API calls 
├── server.js
├── package-lock.json
├── README.md
└── package.json
</pre>

## 💻 Getting Started

1. **Clone the repository**:
  ```bash
  git clone https://github.com/ROHINI-H/Shoppyglobe-backend.git
  cd Shoppyglobe-backend
  ```
2. **Install Dependencies**:
  ```bash
  npm install
  ```
3. **Start MongoDB (if local)**
```bash
mongod
```
4. **Create a `.env` file**
```bash
cp .env.example .env
```
5. **Start the App Server**:
  ```bash
  npm start
```
This will start the server. You’ll see output like:
```
> shoppyglobe-backend@1.0.0 start
> nodemon server.js

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
[dotenv@17.2.0] injecting env (3) from .env (tip: ⚙️  suppress all loogs with { quiet: true })
Server running on port 4500
```

## 🛠️ API Endpoints

### 🔐 Auth Routes

| Method | Endpoint   | Description         | Request Body                 |
|--------|------------|---------------------|------------------------------|
| POST   | `/register`| Register a new user | `{ "email": "user", "password": "pass" }` |
| POST   | `/login`   | Login a user        | `{ "email": "user", "password": "pass" }` |

### 📦 Product Routes

| Method | Endpoint           | Description         |Request Body                 |
|--------|--------------------|---------------------|-----------------------------|
| GET    | `/products`        | Get all products    |-                            |
| GET    | `/products/:id`    | Get a product by ID |-                            |
| POST   | `/products`        | Create a new product|`{ id, name, price, description, stock }`|
| PUT    | `/products/:id`    | Update a product    | Fields to update (e.g., `{ name, price }`) |
| DELETE | `/products/:id`    | Delete a product    |-                            |

### 🛒 Cart Routes (Authenticated)

| Method | Endpoint       | Description                          | Request Body / Params                              |
|--------|----------------|--------------------------------------|----------------------------------------------------|
| GET    | `/cart`        | Get current user’s cart              | –                                                  |
| POST   | `/cart`        | Add item to cart                     | `{ "productID": 1, "quantity": 2 }`                |
| PUT    | `/cart/:id`    | Update quantity of item in cart      | `{ "quantity": 5 }` (`:id` is product ID in cart)  |
| DELETE | `/cart/:id`    | Remove item from cart                | `:id` is product ID to remove                      |

## 🫱🏼‍🫲🏼Contributing
If you'd like to contribute to this project, please fork this repository and submit a pull request. You can also report issues or suggest improvements by opening an issue.

## 🔏License
This project is licensed under the MIT License.

## 🙇🏻‍♀️Acknowledgments
Special thanks to Internshala trainings for providing the training to learn react and develop this project.

## 🚀Connect with me
If you'd like to learn more about my work or connect professionally, you can find me on LinkedIn: www.linkedin.com/in/rohini-h
