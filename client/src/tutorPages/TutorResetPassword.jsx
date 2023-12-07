import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const TutorResetPassword = () =>{
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const {id,token} = useParams()
  const handleOnChange = (e) => {
    const { value } = e.target;
    setPassword(value)
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:4000/tutor/reset-password/${id}/${token}`,
        {
          password
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log('jdjd')
        if(res.data.Status === 'Successfully updated password'){
          handleSuccess(`able to change the password`);
          setTimeout(() => {
            navigate("/tutor/login");
          }, 1000);
        }else {
          handleError(`couldn't change the password`);
        }
      })
      .catch(error=>{
        console.log(error);
      })
      setPassword(password);

      
      console.log('this is data',data)
    }
    catch(err){
      console.log("couldn't send request to server");
    }
     
  }
  return (
    <div className="form_container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">New Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your Password"
            onChange={handleOnChange}
          />
        </div>
       
        
      
        <button type="submit">Update</button>
        
      </form>
      <ToastContainer />
    </div>
  );
};


export default TutorResetPassword;