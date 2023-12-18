
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
        <div class=" h-screen flex mt-20 justify-center max-sm:mt-5">

        <div class="bg-white p-8 rounded shadow-md max-w-md w-full">
        
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Sign In</h2>
        
        
            <div class="mb-4">
                <label htmlFor="lastName" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <Input id="email" type='email' label="Email" disabled={loading} register={register} errors={errors} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Doe" />                </div>
        
        
            <div class="mb-6">
                <label htmlFor="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <Input id="password"  label='password'  disabled={loading} register={register} errors={errors} required type="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="**********"/>
            </div>
           
          
           
<button class="bg-blue-500 text-white rounded-full px-4 py-2 w-full hover:bg-blue-600"   onClick={handleSubmit(onSubmit)}>
{loading ? "Loading" : "Sign Ip"}
</button>
        
            
            <button class="bg-red-500 text-white rounded-full px-4 py-2 w-full mt-4" onClick={() => {signIn("google")}}>
   
                Sign In with Google
            </button>
        
            <p class="mt-4 text-gray-600 text-sm text-center">
                Already have an account? <a href="#" class="text-blue-500">Log in</a>
            </p>
        
        </div>
        
        </div>
    )
}

export default LoginForm