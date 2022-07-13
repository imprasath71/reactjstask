import logo from './logo.svg';
import React, {useState} from "react";
import Axios from "axios";
import './cert.css';
import {Navigate} from "react-router-dom";
import Login from "./login";
import {useLocation,useNavigate} from 'react-router-dom';

function Cert() {

  const [CertnameReg, setCertnameReg] = useState("");
  const [CertIdReg, setCertid] = useState("");
  const [CertMailReg, setEmail] = useState("");
  const [flag, setflag]=useState([]);
  const location = useLocation();
  const mail = location.state.mail;
  console.log("mail:",location.state.mail); 
  
  const certification = (e) => {
    e.preventDefault();
    console.log("asasasas",[CertMailReg][0]);
    Axios.post("http://localhost:5000/certificate",{certname : CertnameReg, certid : CertIdReg, certmail : CertMailReg}).then((response => {
      console.log(response);
      setflag(response.statusText);
      console.log(response.statusText)
      
    }));
  };
  const navigate = useNavigate();
  const func = () => {
    // console.log("tweshin");
    // console.log("certmail : ",[CertMailReg][0]);
    // var certmail = [CertMailReg][0]
    navigate('/dashboard',{state:{mail : mail}});
  }
  return (
    <div class="container">
        <header>CERTIFICATE DETAILS </header>
		<br></br>
        <form action="#">
            <div class="form first">

                    <div class="fields">
                        <div class="input-field">
                            <label> Employee Name</label>
                            <input type="text" placeholder="Name" onChange={(e => {setCertnameReg(e.target.value)})} required/>
                        </div>
						
                        <div class="input-field">
                            <label>CSP</label>
                            <select required>
                                <option disabled selected>Select CSP</option>
                                <option>AWS</option>
                                <option>Azure</option>
                                <option>GCP</option>
                            </select>
                        </div>
                    
                        <div class="input-field">
                            <label>Certificate Level</label>
                            <input type="text" placeholder="Enter Level" required/>
                        </div>

                        <div class="input-field">
                            <label>Certificate ID </label>
                            <input type="number" placeholder="Enter ID " onChange={(e => {setCertid(e.target.value)})} required/>
                        </div>

                        <div class="input-field">
                            <label>Registered Mail</label>
                            <input type="text" placeholder="Enter mail "  onChange={(e => {setEmail(e.target.value)})} />
                        </div>

                        <div class="input-field">
                            <label>Issued Authority</label>
                            <input type="text" placeholder="Enter issued authority" required/>
                        </div>

                     
                        <div class="input-field">
                            <label>Date of Certification</label>
                            <input type="date" placeholder="Enter your issued date" required/>
                        </div>

                        <div class="input-field">
                            <label>Expiry Date of Certification</label>
                            <input type="date" placeholder="Enter expiry date" required/>
                        </div>
						<div class="input-field">
                            <label>Validity</label>
                            <input type="number" placeholder="Enter number" required/>
                        </div>

                    </div>
                </div> 
						<center>
                        <button class="button" onClick={certification}>
                            <input type = "submit" value= "Submit" class="submit-btn" />
                        </button></center>
                    
        </form>
        {(flag === "OK") ? func() : null}
    </div>


      );
}

export default Cert;

{/* <div className="App">
      <div className="certificate">
        <h1>Certification</h1>
        <lable>Certificate Name</lable>
        <input type="text" onChange={(e => {setCertnameReg(e.target.value)})}/>
        <label>Result</label>
        <input type="text" onChange={(e => {setResultReg(e.target.value)})}/>
        <button onClick={certification}>Submit</button>
        {(flag === "OK") ? <Navigate to="/dashboard" /> : null}
      </div>
      
    </div> */}
