import React, {useState} from "react";
import Axios from "axios";
import {Navigate} from "react-router-dom";
import "./reg.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

// const schema = yup.object().shape({
  
//   FirstName: yup.string().required("First Name is required").min(3,"Your first name must have atleast 3 characters").max(15,"Your first name must not exceed 15 characters"),
//   LastName: yup.string().required("Last Name is required").min(3,"Your last name must have atleast 3 characters").max(15,"Your last name must not exceed 15 characters"),
//   email: yup.string().email("Enter a valid email ID").required("Email ID is required"),
//   password: yup.string().required("Password is required").min(8,"Your password must have atleast 8 characters").max(15, "Your password must not exceed 15 characters" ),
//   confirmpassword: yup.string().oneOf([yup.ref("password"),null]).required()
 
// });

function Reg() {

const [usernameReg, setUsernameReg] = useState("");
const [passwordReg, setPasswordReg] = useState("");
const [emailReg, setEmailReg] = useState("");
const [flag, setflag]=useState([]);

// const { register, handleSubmit, formState:{errors}  } = useForm({
//   resolver: yupResolver(schema),
 
// });



const reg = (event) => {
  
    Axios.post("http://localhost:5000/register",{username:usernameReg,password:passwordReg,email:emailReg}).then((response => {
        setflag(response.statusText);  
        console.log(response);
    console.log(response.statusText);
    }));
    
  };
  
  
  return (
    <div class="container">
  <title>Registration Form </title>
    <div class="title"><b>REGISTRATION FORM</b></div>
    <div class="content">
      <form >
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder= "Eg :James" />
            {/* <p> {errors.FirstName?.message} </p> */}
          </div>
          <div class="input-box">
            <span class="details">Last Name</span>
            <input type="text" placeholder="Eg :Bond"  />
            {/* <p> {errors.LastName?.message} </p> */}
          </div>
		  <div class="input-box">
            <span class="details">User Name</span>
            <input type="text" placeholder="Eg :james@25" onChange={(e => {setUsernameReg(e.target.value)})} />

          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Eg :abc@gmail.com" onChange={(e => {setEmailReg(e.target.value)})} 
           />
            {/* <p> {errors.email?.message} </p> */}
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Eg :xyz" />
            {/* <p> {errors.password?.message} </p> */}
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Eg :xyz" onChange={(e => {setPasswordReg(e.target.value)})} 
            />
            {/* <p> {errors.confirmpassword?.message} </p> */}
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div class="button">
          <button onClick={reg}>Submit</button>
        </div>
      </form>
      {(flag === "OK") ? <Navigate to="/login" /> : null}
    </div>
    
  </div>
  );
}

export default Reg;


{/* <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <lable>Username</lable>
        <input type="text" onChange={(e => {setUsernameReg(e.target.value)})}/>
        <lable>Password</lable>
        <input type="text" onChange={(e => {setPasswordReg(e.target.value)})}/>
        <button onClick={register}>Register</button>
      </div>
      {(flag === "OK") ? <Navigate to="/login" /> : null}
      </div> */}