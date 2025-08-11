import Image from 'next/image'

import igIcon from "../assets/icons/1161954_instagram_icon.png"
import liIcon from "../assets/icons/367594_linkedin_business_network_social_icon.png"
import fbIcon from "../assets/icons/367582_facebook_social_icon.png"

export default function Footer(){
    return (
        <footer className="w-full px-4 py-6 bg-transparent">
            <div className="flex items-center justify-center w-full relative">
                <hr className="w-full max-w-3xl h-px my-4 bg-[#F7F7F7] border-0 rounded-sm"></hr>
                <div className="absolute px-4 -translate-x-1/2 left-1/2">
                     <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6">
                        <a href="https://www.instagram.com/rj_theengineer"><Image className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-[#F72585] p-1" src={igIcon} alt="Instagram" /></a>
                        <a href="https://linkedin.com/in/ryansmall90"><Image className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-[#F72585] p-1" src={liIcon} alt="LinkedIn" /></a>
                        <a href="https://www.facebook.com/ryan.small2"><Image className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain bg-[#F72585] p-1" src={fbIcon} alt="Facebook"/></a>
                    </div>
                </div>
            </div> 
        </footer>
    )
}