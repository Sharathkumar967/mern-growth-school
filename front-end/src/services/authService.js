import { userLogin, userRegister } from "../redux/auth/authActions";
import store from "../redux/store";

// Access the Redux state and log it
const currentState = store.getState();
console.log("Redux State:", currentState);

export const handleLogin = (
  e,
  userName,
  password,
  setUsername,
  setPassword
) => {
  e.preventDefault();
  try {
    if (!userName || !password) {
      return alert("Please Provide All fields");
    }
    console.log("email", userName, "password", password);
    store.dispatch(userLogin({ userName, password }));

    // Clear the input fields
    setUsername("");
    setPassword("");
  } catch (err) {
    console.log(err);
  }
};

export const handleRegister = (e, userName, email, password) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        userName,
        email,
        password,
      })
    );
  } catch (err) {
    console.log(err);
  }
};

////////////////////////////////////////////////
// import { userLogin, userRegister } from "../redux/auth/authActions";
// import store from "../redux/store";

// // Access the Redux state and log it
// const currentState = store.getState();
// console.log("Redux State:", currentState);

// export const handleLogin = (
//   e,
//   userName,
//   password,
//   setUsername,
//   setPassword
// ) => {
//   e.preventDefault();
//   try {
//     if (!userName || !password) {
//       return alert("Please Provide All fields");
//     }
//     console.log("email", userName, "password", password);
//     store.dispatch(userLogin({ userName, password }));

//     // Clear the input fields
//     setUsername("");
//     setPassword("");
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const handleRegister = (e, userName, email, password) => {
//   e.preventDefault();
//   try {
//     store.dispatch(
//       userRegister({
//         userName,
//         email,
//         password,
//       })
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };
