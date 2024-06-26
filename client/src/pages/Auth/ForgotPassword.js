import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [email,setEmail]=useState("");
    const [newPassword,setNewPassword]=useState("");
    const [answer,setAnswer]=useState("");
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("/api/v1/auth/forgot-password",{email,newPassword,answer});
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
    <Layout title={'Forgot Password- BookSellF'}>
        <div className="register" style={{ fontFamily: 'Calisto MT, serif' }}>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your email' required />
            </div>
            <div className="mb-3">
            <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your best friend name' required />
            </div>
            <div className="mb-3">
                <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your new password' required/>
            </div>
           
            <button type="submit" className="btn btn-primary">Reset</button>
            </form>    

        </div>
    </Layout>
  )
}

export default ForgotPassword