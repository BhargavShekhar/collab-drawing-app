"use client"

import { AuthPage } from "@/components/AuthPage"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return <AuthPage isSignin={false} />
}