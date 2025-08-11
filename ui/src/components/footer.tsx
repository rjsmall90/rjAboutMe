import Image from 'next/image'

import igIcon from "../assets/icons/1161954_instagram_icon.png"
import liIcon from "../assets/icons/287697_linkedin_icon.png"
import fbIcon from "../assets/icons/5279111_network_fb_social media_facebook_facebook logo_icon.png"

export default function Footer(){
    return (
        <div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-270 h-1 my-8 bg-gray-200 border-1 rounded-sm dark:bg-gray-700"></hr>
                <div className="absolute px-4 -translate-x-1/2 left-1/2 dark:bg-gray-900">
                     <div className="flex flex-col sm:flex-row gap-6 overflow-x-auto sm:overflow-visible">
                        <a href="https://www.instagram.com/rj_theengineer"><Image className="w-15 h-15 rounded-full object-scale-down mx-auto bg-[#F72585]" src={igIcon} alt="Instagram" /></a>
                        <a href="https://linkedin.com/in/ryansmall90"><Image className="w-15 h-15 rounded-full object-scale-down mx-auto bg-[#F72585]" src={liIcon} alt="LinkedIn" /></a>
                        <a href="https://www.facebook.com/ryan.small2"><Image className="w-15 h-15 rounded-full object-scale-down mx-auto bg-[#F72585]" src={fbIcon} alt="Facebook"/></a>
                    </div>
                </div>
            </div> 
        </div>
    )
}


// {/* <div className="inline-flex items-center justify-center w-full">
//                 <hr className="flex-grow border-t-2 border-[#F7F7F7] mx-4" />
//                 <div className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">
//                     <div className="flex flex-col sm:flex-row gap-6 overflow-x-auto sm:overflow-visible">
//                         <Image className="w-15 h-15 rounded-full object-cover mx-auto bg-[#F72585]" src={igIcon} alt="Instagram" />
//                         <Image className="w-15 h-15 rounded-full object-cover mx-auto bg-[#F72585]" src={liIcon} alt="LinkedIn" />
//                         <Image className="w-15 h-15 rounded-full object-cover mx-auto bg-[#F72585]" src={fbIcon} alt="Facebook"/>
//                     </div>
//                     <hr className="flex-grow border-t-2 border-[#F7F7F7] mx-4" />
//                 </div>
//             </div> */}