"use client"
import Image from 'next/image';
import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {



    const onSubmit = (values: any) => {
    }


    return (
        <div className="min-h-screen bg-no-repeat bg-cover w-full max-w-full flex items-center bg-opacity-25 justify-center" style={{ backgroundImage: `url(${"/assest/image/bg-image.jpg"})`, backgroundSize: 'cover' }}>
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-20 text-[#16a329] uppercase">Tea is our life</h2>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                            <div className="text-gray-600">
                                <Image src='/assest/image/lloginpage.webp' alt='' width="300" height="300" />
                            </div>

                            <form className="mt-10 space-y-4">
                                <div>
                                    <input name="email" type="email" aria-label="email" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Email address" />
                                </div>
                                <div>
                                    <input name="password" type="password" aria-label="current-password" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Password" />
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label  className="ml-3 block text-sm">
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a href="jajvascript:void(0);" className="text-sm text-blue-600 hover:text-blue-500">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="!mt-10">
                                    <button type="button" className="w-full py-2.5 px-4 text-md hover:text-[#214e27] rounded text-white bg-[#16a329] hover:bg-[#80e98e] focus:outline-none">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login