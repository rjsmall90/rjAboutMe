"use client"
import { useState } from 'react'

const TypeWriter = () => {
    const [ firstTrigger, setFirstTrigger ] = useState<string>("invisible")
    const [ secondTrigger, setSecondTrigger ] = useState<string>("invisible")
    setTimeout(() => setFirstTrigger("visible"), 2500)
    setTimeout(() => setSecondTrigger("visible"), 5000)

    return(
           <div className="flexbox flex-col size-fit">
                <p className="typewriter"> Hi! </p>
                <p className={`typewriter ${firstTrigger}`} style={{animationDelay: '2.5s, 0s'}}> ..it&apos;s me. </p>
                <p className={`typewriter ${secondTrigger}`} style={{animationDelay: '5s, 0s'}}> ..Ryan. </p>
            </div>
    )
}

export default TypeWriter