
'use client'
import Image from 'next/image';
import React from 'react'
import Input from '@/components/Input'
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

const LoginForm = ({currentUser}) => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const router = useRouter();

     useEffect(() => {
  if(currentUser){
      router.push("/cart")
      router.refresh()
    }
       
     }, [])

    const onSubmit = (data) => {
        setLoading(true)
        signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        }).then((callback) => {
            setLoading(false);

            if (callback?.ok) {
                router.push("/");
                router.refresh();
                toast.success("Logged In");
            }
            if (callback.error) {
                toast.error(callback.error);
            }
        });

    };

   if(currentUser){
       return <p>Login redirecting......</p>
      }
    return (
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center py-10 drop-shadow-2xl">


            <div className="flex shadow-md">

                <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem]" >
                    <div className="w-72">

                        <h1 className="text-xl font-semibold">Welcome back</h1>
                        <small className="text-gray-400">Welcome back! Please enter your details</small>


                        <form className="mt-4">
                            <div className="mb-3">
                                <label className="mb-2 block text-xs font-semibold">Email</label>
                                <Input id="email" label="Email" disabled={loading} register={register} errors={errors} required />
                            </div>


                            <div className="mb-3 flex flex-wrap content-center">
                                <Input id="password" label="Password" disabled={loading} register={register} errors={errors} required type="password" />
                            </div>

                            <div className="mb-3">
                                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                                    onClick={handleSubmit(onSubmit)}
                                >SignIn</button>
                                    

                            </div>
                        </form>
                        <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
                            onClick={() => {signIn("google")}}>

                            <Image className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                width={300}
                                height={600}
                                alt="login image"
                            />
                            Sign in with Google
                        </button>
                        <div className="text-center">
                            <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
                            <a href="#" className="text-xs font-semibold text-purple-700">Sign up</a>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-[32rem]" >
                    <Image
                        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
                        src="https://i.imgur.com/9l1A4OS.jpeg"
                        width={300}
                        height={600}
                        alt='image'
                    />
                </div>

            </div>



        </div>
    )
}

export default LoginForm