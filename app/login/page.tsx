import { Button } from "@/components/ui/button";
import SignupButton from "@/components/auth/signupButton";
import AuthHeroImage from "@/components/auth/AuthHeroImage";
export default function Login() {
    return (
        <div className="bg-[#FFE791] h-screen flex flex-row space-between">
            <div className="bg-white w-[500px] h-[500px] m-auto rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8">
                <h1 className="text-2xl font-bold text-bandiwala-red">Log In</h1>
                <div>
                <p className="text-md text-bandiwala-brown my-2 "><b>Username</b></p>
                <input className="bg-[#ffedcc] w-[350px] h-[30px] placeholder-bandiwala-red text-sm rounded-sm" placeholder='    Enter Here'/>
                </div>
                <div>
                <p className="text-md text-bandiwala-brown my-2 "><b>Password</b></p>
                <input type="password" className="bg-[#ffedcc] w-[350px] h-[30px] placeholder-bandiwala-red text-sm rounded-sm" placeholder='    Enter Here'/>
                </div>

                <div>
                <p className="text-sm underline text-bandiwala-orange text-align-start">Forgot Password?</p>
                <Button className="bg-bandiwala-orange hover:bg-bandiwala-red text-white mt-4 w-[350px]">
                    Log In
                </Button>
                </div>

                <p className="text-sm text-bandiwala-brown space-y-10">Don't have an Account? <SignupButton/></p>
            </div>
            <AuthHeroImage/>
        </div>
    );
}