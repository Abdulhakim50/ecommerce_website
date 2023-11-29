'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { signIn,signOut } from 'next-auth/react'
import toast from 'react-hot-toast';
import { useState,useEffect } from "react";
import Input from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';







const Form = ({currentUser}) => {
   const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const router = useRouter();

    useEffect(() => {
        if(currentUser){
          router.push("/")
          router.refresh()
        }
         
           
         }, [])
        const onSubmit = (data) => {

            setLoading(true);
            axios.post('/api/register', data).then(() => {
                toast.success('registred successfully');
                signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect:false,
                }).then((callback) => {
                    if (callback?.ok) {
                        router.push('/')
                        
                            router.refresh(
                               toast.success('logged in success')
                            )
                    }
                    if (callback?.error) {
                        toast.error(callback.error)
                    }
                });
            }).catch(() => toast.error('someting want  wrong')).finally(() => {
                setLoading(false)
            }
            );
        }


       if (currentUser) {
           return <p>Login redirecting......</p>
        }
        return (

            <div classNameName="flex">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">

                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg limg"

                            ></div>

                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md" 
                                 onClick={() => {signIn("google")}}>

                                    <Image className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                        width={300}
                                        height={600}
                                        alt="login image"

                                      
                                    />
                                    Sign up with Google
                                </button>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" >
                
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="Name">
                                                First Name
                                            </label>
                                            <Input id="name" label="Name" disabled={loading} register={register} errors={errors} required />
                                        </div>

                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                            Email
                                        </label>
                                        <Input id="email" label="Email" disabled={loading} register={register} errors={errors} required />

                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                                Password
                                            </label>
                                            <Input id="password" label="Password" disabled={loading} register={register} errors={errors} required type="password" />


                                        </div>

                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="button"
                                            onClick={handleSubmit(onSubmit)}
                                        >
                                            {loading ? "loading" : "signun"}
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="#"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <   Link
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="/login"
                                        >
                                            Already have an account? Login!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

export default Form