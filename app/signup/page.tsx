import LoginButton from "@/components/auth/loginButton";
import AuthHeroImage from "@/components/auth/AuthHeroImage";
import { Button } from "@/components/ui/button";
export default function Signup(){
    return (
        <div className="bg-[#FFE791] h-screen flex flex-row space-between">
            <div className="bg-white w-[500px] h-[500px] m-auto rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8">
                <h1 className="text-2xl font-bold text-bandiwala-red">Sign Up</h1>
                <div>
                <p className="text-md text-bandiwala-brown my-2 "><b>Username</b></p>
                <input className="bg-[#ffedcc] w-[350px] h-[30px] placeholder-bandiwala-red text-sm rounded-sm" placeholder='    Enter Here'/>
                </div>
                <div>
                <p className="text-md text-bandiwala-brown my-2 "><b>Password</b></p>
                <input type="password" className="bg-[#ffedcc] w-[350px] h-[30px] placeholder-bandiwala-red text-sm rounded-sm" placeholder='    Enter Here'/>
                </div>
                <Button className="bg-bandiwala-orange hover:bg-bandiwala-red text-white mt-4 w-[350px]">
                    Log In
                </Button>

                <p className="text-sm text-bandiwala-brown space-y-10">Already have an Account? <LoginButton/></p>
            </div>
            <AuthHeroImage/>
        </div>
    );
}