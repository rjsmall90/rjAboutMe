"use client"
import { useEffect, useState } from 'react'

type Quote = {
  quote: string;
  quotee: string;
};

async function fetchQuotes(){
    const url = `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/quotes`;
    let data;
    try {
        const response = await fetch(url)
        data = (await response.json()) as Quote[];

        const inspoQuotes = data.map((q) =>  {
            return {quote: q.quote, quotee: q.quotee}
        })
        
        return inspoQuotes

    } catch(err) {
        console.error("Error fetching quotes:", err);
    }
}

export default function GeneratedQuote(){
    const [quote, setQuote] = useState<string>("")
    const [quotee, setQuotee] = useState<string>("")

    useEffect(()=>{
        try{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            fetchQuotes().then((quotes: any) => {
                const index = Math.floor(Math.random() * 14-0+1)+1
                setQuote(quotes[index].quote)
                setQuotee(quotes[index].quotee)
            })
        } catch(err) {
            console.log("Error Fetching Quote", err)
        }
    }, [])

    return (
        <div className="segment">
            <div className="quote w-full flex flex-col">
                <h4 className="text-left"> &quot;{quote}&quot; </h4> 
                <p className="text-right mt-2"> - {quotee} </p>
            </div>
        </div>
    )
}