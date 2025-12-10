import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Product from './components/Product'
import { Routes, Route } from "react-router-dom"
import { 
  faceCareProducts, 
  foundationProducts, 
  makeupProducts, 
  lipCareProducts 
} from "./data/productData"
import { useEffect, useState } from 'react'

export default function App() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [updatingUserId, setUpdatingUserId] = useState('');
  const [updatedClicked, setUpdatedClicked] = useState(false);
  const [data, setData] = useState([]);

  const TOKEN =
    '636fc0ea5cd56df68373142d33b80b5e97bb749cffddbdde1e623a3e95c7781f';

  const userGetListWithToken = async (TOKEN) => {
    try {
      const response = await fetch('https://gorest.co.in/public/v2/users', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      console.log('api data', data);
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const createUserHandler = async () => {
    console.log('successfully created user')
    try {
      const response = await fetch('https://gorest.co.in/public/v2/users', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          gender: gender,
          email: email,
          status: status,
        }),
      });
      const data = await response.json();
      if (data.status === 'active') {
        setName('');
        setEmail('');
        setGender('');
        setStatus('');
      }
      console.log('User created:', data);
      // Optionally, refresh the user list after creating a new user
      userGetListWithToken(TOKEN, setUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updatUserHandler = async (id, TOKEN, name, email, gender, status) => {
    console.log('Sucessfully Updated User', id);
    
    try {
      const response = await fetch(
        `https://gorest.co.in/public/v2/users/${id}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            gender: gender,
            status: status,
          }),
        }
      );
      const data = await response.json();
      console.log('User updated:', data);
      setUpdatedClicked(false);
      if (data.status === 'active') {
        setName('');
        setEmail('');
        setGender('');
        setStatus('');
      }
      userGetListWithToken(TOKEN, setUser);
      // Update user logic here
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUserHandler = async (id) => {
    console.log("Successfully deleted user",id)
    try {
      const response = await fetch(
        `https://gorest.co.in/public/v2/users/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );
      // const data = await response.json();
      // console.log('User updated:', data);
      userGetListWithToken(TOKEN, setUser);
      // Update user logic here
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const updateUserHandlerFromUI = (id) => {
    setUpdatedClicked(true);
    setUpdatingUserId(id)
    console.log('sucessfully updated user',id)
  };

  useEffect(() => {
    // userGetList(); //this function call it is no have token.
    userGetListWithToken(TOKEN, setUser);
  }, []);

  // useEffect(() => {
  //   fetch("https://mocki.io/v1/e0477236-259d-4b19-b8c4-cd728418de11")
  //     .then(res => res.json())
  //     .then(result => {

  //       console.log("This is the api data",result);   // See API data in console
  //       setData(result);
  //     })
  //     .catch(err => console.error("Error:", err));
  // }, []);

  const faceCareProduct = faceCareProducts.map(item => {
     return (
       <Product 
        key={item.id} 
        {...item}   //object separator , return object
       />
    )
   })


   const foundationProduct = foundationProducts.map(item => {
     return (
      <Product
         key={item.id} 
         {...item} 
      />
    )
   })

   const makeupProduct = makeupProducts.map(item => {
     return (
      <Product 
        key={item.id} 
        {...item} />
      )
   })

   const lipCareProduct = lipCareProducts.map(item => {
     return (<Product 
      key={item.id} 
      {...item} />
     )
   })

  return (
    <section>
        <Nav />
        <Hero />
        {/* Face Care Products */}
        <section className="product-container">
            {faceCareProduct}
        </section>
          
        {/* Foundation */}
        <section className="product-container">
            {foundationProduct}
        </section>
      
        {/* Makeup Product */}
        <section className="product-container">
          {makeupProduct}
        </section>

        {/* Lip Care Products */}
        <section className="product-container">
          {lipCareProduct}
        </section>

        <section>
          <div className="login-wrapper">
        <div className="login-container">
          
          <h2 className="login-title">User Login</h2>

          <form className="login-form">

            <input
              type="text"
              placeholder="Enter Your Username"
              className="login-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            
            <input
              type="text"
              placeholder="Enter Your Gender"
              className="login-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <input
              type="text"
              placeholder="Is User Active?"
              className="login-input"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />

            <button 
            className="login-btn"
            onClick={createUserHandler}>
              Login
            </button>
          </form>
          </div>
      </div>
          <div>
      {/* <p>{name}</p> */}
      {user?.map((item, index) => (
        <div
          key={index}
          className="user-div">
          {updatingUserId === item.id ? (
            <div>
            <div>
              <input
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='text'
                placeholder='gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <input
                type='text'
                placeholder='status'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <button
                className="update-btn"
                onClick={() =>
                  updatUserHandler(updatingUserId, TOKEN, name, email, gender, status)
                }>
                Update User
              </button>
            </div>
            </div>
          ) : (
            <>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.gender}</p>
              <p>{item.status}</p>
              <p>{item.id}</p>
              <button
                className="update-btn"
                onClick={() => updateUserHandlerFromUI(item.id)}>
                Update User
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteUserHandler(item.id)}>
                Delete Button
              </button>
            </>
          )}
        </div>
      ))}
      {/* {updatedClicked ? (
        <></>
      ) : (
        <>
         
      
        </>
      )} */}

      {/* {ApiUserList} */}
    </div>
  
        </section>


    </section>
    
  )
}

