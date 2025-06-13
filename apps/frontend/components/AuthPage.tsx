import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

export function AuthPage({ isSignin }: {
    isSignin: boolean
}) {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black">
            <div className="p-4 m-2 bg-white text-black rounded flex items-center gap-3">
                <Input label="Email: " type="text" placeholder="Email" />
                <Input label="Password: " type="text" placeholder="Password" />

                <Button
                    className="bg-cyan-800 px-4 py-2 rounded-xl border text-white hover:bg-cyan-700"
                    name={isSignin ? "Signin" : "Signup"}
                    onClick={() => {
                        console.log("Btn clicked");
                    }}
                />
            </div>
        </div>
    )
}