# Makeup Product App -- React + Rest CRUD

A simple makeup product website built to learn React core concepts:` components, props, useState, and useEffect.` The front‑end connects to a REST API for user CRUD operations using Bearer token authentication via the public test API at https://gorest.co.in/. Learn api fetch data in console and network.

### Features

- List, create, update and delete users (CRUD) via the **GoRest API**.
- Simple product listing UI for makeup categories (static or **fetched from a local JSON**).

```
- Learnable code structure demonstrating:
- Functional components
- Props passing
- useState for local component state
- useEffect for fetching data and side effects
```

- **Token-based authentication** (Bearer token stored in environment variables)

### Tech Stack

- React (Create React App / Vite)
- JavaScript (ES6+)
- Fetch API / Axios
- Optional: React Router for navigation

### Prerequisites

Make sure you have the following installed before starting:

- Node.js >= 22.x

```bash
    node --version
    v22.14.0
```

- npm >= 11.x

```bash
    npm --version
    10.9.2
```

- nvm >= 20.x

```bash
    nvm list
    20.19.5
```

- A GoRest access token

```bash
    Get free token for testing api in this site:
    https://gorest.co.in/
```

### Project Structure

```bash
    Makeup_Produt_Project/
    ├── node_modules/
    ├── public
    │   └── assets
    ├── src/
    │   ├── components/
    │   ├── Hero.jsx
    │   ├── Nav.jsx
    │   ├── Product.jsx
    ├── data/
    │   ├── ApiUserList.js
    │   ├── productData.js
    ├── zustand
    App.css
    App.jsx
    index.css
    main.jsx
```

### API Endpoints

```bash
    # Get User Endpoint (method: 'GET')
    https://gorest.co.in/public/v2/users

    # Create User Endpoint (method: 'POST')
    https://gorest.co.in/public/v2/users

    # Create User Endpoint (method: 'PATCH')
    https://gorest.co.in/public/v2/users/${id}

    # Delete User Endpoint (method: 'DELETE')
    https://gorest.co.in/public/v2/users/${id}

```

### 📂 Rest CRUD With Bearer Token (Code)

```bash
    const TOKEN =
    'YOUR_TOKEN';
```

---

```jsx
const userGetListWithToken = async (TOKEN) => {
  try {
    const response = await fetch("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log("api data", data);
    setUser(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
```

---

```jsx
const createUserHandler = async () => {
  console.log("successfully created user");
  try {
    const response = await fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        gender: gender,
        email: email,
        status: status,
      }),
    });
    const data = await response.json();
    if (data.status === "active") {
      setName("");
      setEmail("");
      setGender("");
      setStatus("");
    }
    console.log("User created:", data);
    // Optionally, refresh the user list after creating a new user
    userGetListWithToken(TOKEN, setUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
```

---

```jsx
const updatUserHandler = async (id, TOKEN, name, email, gender, status) => {
  console.log("Sucessfully Updated User", id);

  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender,
        status: status,
      }),
    });
    const data = await response.json();
    console.log("User updated:", data);
    setUpdatedClicked(false);
    if (data.status === "active") {
      setName("");
      setEmail("");
      setGender("");
      setStatus("");
    }
    userGetListWithToken(TOKEN, setUser);
    // Update user logic here
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
```

```jsx
const deleteUserHandler = async (id) => {
  console.log("Successfully deleted user", id);
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    // const data = await response.json();
    // console.log('User updated:', data);
    userGetListWithToken(TOKEN, setUser);
    // Update user logic here
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
```

### License

#### MIT
