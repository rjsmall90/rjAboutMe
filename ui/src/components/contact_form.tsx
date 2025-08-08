"use client"
import { useState } from 'react'

type ContactInfo = {
    contact_name: string
    contact_email: string
    contact_message: string
}

export default function ContactForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const formInfo: ContactInfo = {
        contact_name: name,
        contact_email: email,
        contact_message: message
    }

    const sendEmail = async () => {
        try {
            const response = await fetch("http://localhost:8000/contact", {
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
        }
    }

    return (
        <div className="mx-auto flex flex-col max-w-sm items-center gap-x-4 rounded-xl p-6 shadow-lg border-4 border-[#F72585]">
            <input 
                className="border rounded border-[#F72585] field-sizing-fixed p-2 mb-4 mt-4 w-2xs" 
                defaultValue="Enter Name" 
                onChange={(e)=> setName(e.target.value)} />
            <input 
                className="border rounded border-[#F72585] field-sizing-fixed p-2 mb-4 w-2xs" 
                defaultValue="Enter E-mail" 
                onChange={(e)=> setEmail(e.target.value)} />
            <textarea 
                className="border rounded border-[#F72585] w-2xs h-20 p-5 mb-4" 
                onChange={(e)=> setMessage(e.target.value)}
            > 
                Enter Message: 
            </textarea>
            <button className="px-4 py-2 bg-[#F72585] text-white rounded hover:bg-pink-700" onClick={sendEmail}>Submit</button>
        </div>
    )
}