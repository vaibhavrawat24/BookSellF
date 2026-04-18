import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import "../Auth/Auth.css";

const Register = () => {
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [password,setPassword]=useState("");
    const [answer,setAnswer]=useState("");
    const navigate=useNavigate();


    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("/api/v1/auth/register",{name,email,password,phone,address,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else{
                toast.error(res.data.message);
            }
        }  
        catch(error){
            console.log(error);
            toast.error('Something went wrong');
        }
    };

  return (
    <Layout title='Register - BookSellF'>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Create account</h1>
          <p className="auth-subtitle">Join BookSellF today</p>

          <form onSubmit={handleSubmit}>
            <div className="auth-field">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
            </div>
            <div className="auth-field">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required />
            </div>
            <div className="auth-field">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            <div className="auth-field">
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" required />
            </div>
            <div className="auth-field">
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address" required />
            </div>
            <div className="auth-field">
              <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Security question: best friend's name?" required />
            </div>
            <button type="submit" className="btn-auth-primary">Create Account</button>
          </form>

          <p className="auth-footer">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Sign in</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;