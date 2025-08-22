import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import axiosInstance from '../../api/axios';
import { toast } from 'react-toastify';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const registerSubmit = (data) => {
        axiosInstance.post('/register', data)
            .then((response) => {
                toast.success("Registration successful. Please login.");
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Registration failed");
                console.error("Registration error:", error);
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
                                    <form onSubmit={handleSubmit(registerSubmit)} class="text-left clearfix" action="index.html" >
                                        <div class="form-group">
                                            <input {...register('name')} type="name" class="form-control" placeholder="Name" />
                                        </div>
                                        <div class="form-group">
                                            <input {...register('email')} type="email" class="form-control" placeholder="Email" />
                                        </div>

                                        <div class="form-group">
                                            <input {...register('password')} type="password" class="form-control" placeholder="Password" />
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-main text-center" >Register</button>
                                        </div>
                                    </form>
                                    <p class="mt-20">Already have an account ?<Link to={'/login'}> Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Register