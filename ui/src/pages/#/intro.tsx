"use client"
import { useEffect, useState } from 'react'

const Intro = () => {
    const [ firstTrigger, setFirstTrigger ] = useState<string>("invisible")
    const [ secondTrigger, setSecondTrigger ] = useState<string>("invisible")
   
    useEffect(() => {
        const firstTimer = setTimeout(() => setFirstTrigger("visible"), 2500);
        const secondTimer = setTimeout(() => setSecondTrigger("visible"), 5000);
        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
        };
    }, []);
    
    return (
        <div id="intro" className="parallax">
<<<<<<< HEAD
            <div className="flexbox flex-col size-fit intro-header mt-20">
                <p className="typewriter"> Hi! </p>
                <p className={`typewriter ${firstTrigger}`} style={{animationDelay: '2.5s, 0s'}}> ..it&apos;s me. </p>
                <p className={`typewriter ${secondTrigger}`} style={{animationDelay: '5s, 0s'}}> ..Ryan. </p>
=======
            <div className="page-title">
                <h1>Hi! ..it's me. ..Ryan. Yes, THAT Ryan
                </h1>
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
            </div>
            <div className="top-fade" />
        </div>
    )
}

export default Intro;