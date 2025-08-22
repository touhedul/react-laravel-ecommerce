import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { useForm } from 'react-hook-form';
import axios from '../../api/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from "../../components/context/AdminAuthContext";


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { login } = useContext(AdminAuthContext); // ✅ use context method


    const loginSubmit = (data) => {

        axios.post('/login', data)
            .then((response) => {
                console.log("Login successful:", response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('admin', JSON.stringify(response.data.user));
                login(response.data.user); // ✅ update context state

                toast.success("Login successful");
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                toast.error(error.response?.data?.message);
                console.error("Login error:", error.response.data.message);
            });
    }

    return (
        <>
            <Layout>

                <section class="signin-page account">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="block text-center">
                                    <a class="logo" href="index.html">
                                        <img src="public/assets/images/logo.png" alt="" />
                                    </a>
                                    <h2 class="text-center">Welcome Back</h2>
                                    <form onSubmit={handleSubmit(loginSubmit)} class="text-left clearfix" action="index.html" >
                                        <div class="form-group">
                                            <input {...register('email')} type="email" class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <input {...register('password')} type="password" class="form-control" placeholder="Password" />
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-main text-center" >Login</button>
                                        </div>
                                    </form>
                                    <p class="mt-20">New in this site ?<a href="signin.html"> Create New Account</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Login