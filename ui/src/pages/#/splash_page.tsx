import { useState } from "react";


function SplashPage() {
    const titles = ["Father?", "Designer?", "Co-Founder?", "Creator?","...Engineer"];
    const [ currentTitle, setCurrentTitle ] = useState(0);
    
    const handleAnimationEnd = (event: React.AnimationEvent<HTMLHeadingElement>) => {
    // Only responds to the typing animation ending, not the blink-caret
        if (event.animationName === 'typing') {
            const lastWord = currentTitle === titles.length - 1;
            
            if(!lastWord) {
                setCurrentTitle(currentTitle + 1); 
            }   
        }
    };  

    const title = () => {
        return (
        <p 
        onAnimationEnd={handleAnimationEnd}
        key={currentTitle}
        className="page-title typewriter"> 
            {titles[currentTitle]} 
        </p>
        )
                    
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#2c2c2c]">
            <h3 className="inline-block text-lg text-white page-title">{'{'}RJThe{title()}{'}'}</h3>
        </div>
  );
}

export default SplashPage;