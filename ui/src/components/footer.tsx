import Image from 'next/image'

import igIcon from "../assets/icons/1161954_instagram_icon.png"
import liIcon from "../assets/icons/367594_linkedin_business_network_social_icon.png"
import fbIcon from "../assets/icons/367582_facebook_social_icon.png"

export default function Footer(){
    return (
        <div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-270 h-0 my-8 bg-[#F7F7F7] border-1 rounded-sm "></hr>
                <div className="absolute px-4 -translate-x-1/2 left-1/2">
                     <div className="flex flex-col sm:flex-row gap-6 overflow-x-auto sm:overflow-visible">
                        <a href="https://www.instagram.com/rj_theengineer"><Image className="w-13 h-13 rounded-full object-scale-down mx-auto bg-[#F72585]" src={igIcon} alt="Instagram" /></a>
                        <a href="https://linkedin.com/in/ryansmall90"><Image className="w-13 h-13 rounded-full object-scale-down mx-auto bg-[#F72585]" src={liIcon} alt="LinkedIn" /></a>
                        <a href="https://www.facebook.com/ryan.small2"><Image className="w-13 h-13 rounded-full object-scale-down mx-auto bg-[#F72585]" src={fbIcon} alt="Facebook"/></a>
                    </div>
                </div>
            </div> 
        </div>
    )
}