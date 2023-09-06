import React, { useState } from "react";
import "./Login.scss";
import { handleLogin } from "../../services/authService";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(e, userName, password, setUsername, setPassword);
    console.log("Email:", userName);
    console.log("Password:", password);
  };

  return (
    <div className="login-form">
      <section className="form animated flipInX">
        <h2>Login To Your Account</h2>
        {isValid && <p className="valid">Valid. Please wait a moment.</p>}
        {error && <p className="error">{error}</p>}
        <form className="loginbox" autoComplete="off" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" id="submit">
            Login
          </button>
        </form>

        <p>
          Not registered? <Link to="/register">Register here</Link>
        </p>
      </section>
    </div>
  );
};

export default Login;

///////////////////////////////////////////////////////////

// import React, { useState } from "react";

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOTP] = useState("");
//   const [generatedOTP, setGeneratedOTP] = useState(null);
//   const [message, setMessage] = useState("");

//   const generateOTP = () => {
//     const otp = Math.floor(1000 + Math.random() * 9000);
//     setGeneratedOTP(otp);
//     return otp;
//   };

//   const handleSendOTP = () => {
//     if (/^\d{10}$/.test(phoneNumber)) {
//       const otp = generateOTP();
//       // Make an API request to send the OTP
//       fetch("http://localhost:8080/api/v1/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ phoneNumber, otp }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success) {
//             alert(`OTP sent to ${phoneNumber}: ${otp}`);
//           } else {
//             alert("Failed to send OTP. Please try again.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     } else {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//     }
//   };

//   const handleVerifyOTP = () => {
//     const enteredOTP = parseInt(otp);
//     if (enteredOTP === generatedOTP) {
//       setMessage("OTP verified. Login successful!");
//     } else {
//       setMessage("Invalid OTP. Please try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login with OTP</h2>
//       <input
//         type="tel"
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//         required
//       />
//       <button onClick={handleSendOTP}>Send OTP</button>
//       <input
//         type="text"
//         placeholder="OTP"
//         value={otp}
//         onChange={(e) => setOTP(e.target.value)}
//         required
//       />
//       <button onClick={handleVerifyOTP}>Verify OTP</button>
//       <div>{message}</div>
//     </div>
//   );
// };

// export default Login;
