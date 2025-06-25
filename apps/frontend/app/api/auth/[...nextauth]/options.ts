import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { HTTP_BACKEND } from "@/config";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const res = await axios.post(`${HTTP_BACKEND}/signin`, {
                        email: credentials?.email,
                        password: credentials?.password
                    });

                    if (res.status === 200 && res.data?.user) {
                        return {
                            ...res.data.user,
                            token: res.data.token
                        };
                    }

                    return null;
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        console.error("Axios Error Response:", error.response?.data);
                        console.error("URL:", error.config?.url);
                    }
                    console.error("Login failed:", error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/signin'
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const customUser = user as any;
                token.user = {
                    id: customUser.id,
                    name: customUser.name,
                    email: customUser.email
                };
                token.accessToken = customUser.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            return session;
        },
    },
    secret: process.env.AUTH_SECRET
}