'use client'
import Image from "next/image"
export default function AuthHeroImage(){
    return <Image src={require('../../assets/images/loginhero.jpg')} width={500} alt="Login" className="h-screen"/>
}