"use client"

import { AuthPage } from "@/components/AuthPage"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Component() {
    const router = useRouter();
    const { status } = useSession()

    useEffect(() => {
        if (status === "authenticated") router.push("/");
    })


    return <AuthPage isSignin={false} />
}