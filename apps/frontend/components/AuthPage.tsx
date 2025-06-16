import { HTTP_BACKEND } from "@/config";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import React, { useRef, useState } from "react";

export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleClick = async () => {
        setError(false);
        setErrorMessage("");

        if (isSignin) {
            try {
                const res = await signIn("credentials", {
                    redirect: false,
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                })
                setErrorMessage("Signin Sucessfull");
            } catch (error: any) {
                setError(true);
                setErrorMessage(error.response.data.msg || "Sign-in failed");
            }
        } else {
            try {
                const res = await axios.post(`${HTTP_BACKEND}/signup`, {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value,
                    name: nameRef.current?.value
                })


            } catch (error: any) {
                setError(true);
                setErrorMessage(error.response.data.msg || "Sign-in failed");
            }
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 to-black px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center text-cyan-900">
                    {isSignin ? "Sign In to Your Account" : "Create an Account"}
                </h2>

                <div className="space-y-4 flex flex-col">
                    <Input
                        label="Email"
                        type="text"
                        placeholder="Enter your email"
                        refernce={emailRef}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        refernce={passwordRef}
                    />
                    {!isSignin && (
                        <Input
                            label="Name"
                            type="text"
                            placeholder="Enter your name"
                            refernce={nameRef}
                        />
                    )}
                </div>

                <Button
                    className="w-full bg-cyan-800 text-white hover:bg-cyan-700 transition-colors duration-300 py-2 rounded-xl text-lg"
                    name={isSignin ? "Sign In" : "Sign Up"}
                    onClick={handleClick}
                />

                {error && (
                    <p className="text-center text-red-600 font-medium">{errorMessage}</p>
                )}
            </div>
        </div>
    )
}