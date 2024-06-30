"use client";
import useTitle from '@/components/common/hooks/useTitle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Form {
    email: string,
    password: string,
}

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    useTitle('Login')
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<Form>();

    const handleOnSubmit = (data: Form) => {
        console.log(data);
        // Here, you can perform your login logic.
        // For demonstration, let's just set loggedIn to true.
        setLoggedIn(true);
        // You can also clear the form fields if needed.
        router.push("/admin/dashboard");
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
                            <form onSubmit={handleSubmit(handleOnSubmit)} className="mt-10 space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        {...register("email")}
                                        placeholder="Email address"
                                    />
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        {...register("password", { valueAsNumber: true})}
                                        placeholder="Password"
                                    />
                                    {errors.password && <span>{errors.password.message}</span>}
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label className="ml-3 block text-sm">
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="text-sm text-blue-600 hover:text-blue-500">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="!mt-10">
                                    <button type="submit" className="w-full py-2.5 px-4 text-md hover:text-[#214e27] rounded text-white bg-[#16a329] hover:bg-[#80e98e] focus:outline-none">
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
