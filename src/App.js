import React, { createContext, useContext, useEffect, useState } from "react";
import Count from "./components/Count";
import Form from "./components/Form";
import Greetings from "./components/Greetings";
import ListComponent from "./components/ListComponent";

// Create a custom hook
const useGetData = (type) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cars = [
      { id: 1, name: "Tesla", year: 2022 },
      { id: 2, name: "BMW", year: 2020 },
      { id: 3, name: "Mercedes", year: 2017 },
    ];

    const books = [
      { id: 1, name: "Harry Potter" },
      { id: 2, name: "Lord of the rings" },
    ];

    if (type === "cars") {
      setData(cars);
    } else if (type === "books") {
      setData(books);
    } else {
      setData([]);
    }
  }, [type]
  )
  ;
  return data;
};

// create a context
const AuthContext = createContext({
  user: {
    username: "akchindo",
    name: "Abdullahi Chindo",
    email: "abdullahichindo16@gmail.com",
  },
  verified: true,
});

function AuthProvider(props) {
  const [user, setUser] = useState({
    username: "akchindo",
    name: "Abdullahi Chindo",
    email: "abdullahichindo16@gmail.com",
    bio: "before",
  });
  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setUser: setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

function UserProfile() {
  const { user, verified } = useContext(AuthContext);
  return (
    <div>
      <h1>User Profile</h1>
      <div>Username: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email} </div>
      <div>Verified: {verified ? "yes" : "false"}</div>
      <UserBio />
    </div>
  );
}

function UserBio() {
  const { user, setUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUser((prev) => {
      return { ...prev, bio: "after" };
    });
  };

  return (
    <div>
      <h1>User Bio</h1>
      <div>{user.bio}</div>
      <button onClick={handleUpdate}>Update Bio</button>
    </div>
  );
}

function Car(props) {
  const listOfCars = props.data.map((car) => {
    return (
      <ul>
        <li>Brand: {car.brand}</li>
        <li>Color: {car.color}</li>
        <li>Year: {car.year}</li>
      </ul>
    );
  });
  return <div>{listOfCars}</div>;
}

const App = () => {
  const [state, setState] = useState("Welcome to the magic");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // if (count > 0) {
    //   console.log(`App Component rendered...  `);
    // }
    console.log(`count: ${count}`);
  }, [count]);

  const cars = [
    { brand: "Honda", color: "red", year: 2016 },
    { brand: "Toyota", color: "black", year: 2012 },
    { brand: "Peugeot", color: "blue", year: 2007 },
  ];

  const handleChange = () => {
    setState("Welcome to the jungle");
    setTimeout(() => {
      setState("Welcome to the magic");
    }, 1000);
  };

  const data = useGetData("books");
  console.log(data);
  return (
    <section className='main-page'>
      {/* <AuthProvider>
        <UserProfile />
      </AuthProvider> */}
      {/* <p>Hello World</p> */}
      {/* <p onMouseOver={handleChange}> {state}</p> */}
      {/* <Greetings /> */}
      {/* <ListComponent /> */}
      {/* <Form /> */}
      {/* <Car data={cars} /> */}
      <Count
        count={count}
        increase={() => {
          setCount(count + 1);
        }}
        decrease={() => {
          setCount(count - 1);
        }}
      />
    </section>
  );
};

export default App;
