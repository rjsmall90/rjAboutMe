"use client"
import { useState } from 'react'

type ContactInfo = {
    contact_name: string
    contact_email: string
    contact_message: string
}

export default function ContactForm(){
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const formInfo: ContactInfo = {
        contact_name: name,
        contact_email: email,
        contact_message: message
    }

    const sendEmail = async () => {
        console.log(name, email, message)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(formInfo),
            })

            const result = await response.json();
            console.log(result.message); 
        }catch(err) {
            console.log("Unable To Send Message", err)
        }finally {
            setMessage("")
        }
    }

    return (
        <div className="mx-auto flex flex-col max-w-sm items-center gap-x-4 rounded-xl p-6 shadow-lg border-4 border-[#F72585] h-100 mb-8 ">
            <input 
                className="border rounded border-[#F72585] field-sizing-fixed p-2 mb-4 mt-1 w-2xs text-[#F7F7F7]"
                value={name} 
                placeholder="Enter Name" 
                onChange={(e)=> setName(e.target.value)} />
            <input 
                className="border rounded border-[#F72585] field-sizing-fixed p-2 mb-4 w-2xs text-[#F7F7F7]"
                type="email"
                value={email}
                placeholder="Enter E-mail" 
                onChange={(e)=> setEmail(e.target.value)} />
            <textarea 
                className="border rounded border-[#F72585] w-2xs h-30 p-5 mb-8 text-[#F7F7F7]"
                placeholder="Enter Message"
                onChange={(e)=> setMessage(e.target.value)}
            /> 
            
            <button className="px-4 py-2 bg-[#F72585] text-[#F7F7F7] mt-4 rounded hover:bg-pink-700" onClick={sendEmail}>Submit</button>
        </div>
    )
}