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
        <div>
            <textarea field-sizing-fixed onChange={(e)=> setName(e.target.value)}> Enter Name: </textarea>
            <textarea field-sizing-fixed onChange={(e)=> setEmail(e.target.value)}> Enter Email: </textarea>
            <textarea w-20 h-20 border rounded p-2 onChange={(e)=> setMessage(e.target.value)}> Enter Message: </textarea>
            <button onClick={sendEmail}>Submit</button>
        </div>
    )
}