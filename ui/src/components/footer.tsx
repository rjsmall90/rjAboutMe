import Image from 'next/image'

import liIcon from "../assets/icons/287697_linkedin_icon.png"

export default function Footer(){
    const icon = liIcon
    return (
        <div>
            <hr className="h-px my-8 bg-[#F7F7F7] border-0 dark:bg-gray-700"></hr>
            <div className="grid auto-cols-3 grid-flow-col gap-8">
                <div className="w-10"><Image fill={true} src={icon} alt="LinkedIn icon" /></div>
                
                {/* <Image fill={true} src="../assets/icons/287697_linkedin_icon.png" alt="LinkedIn icon" />
                <Image fill={true} src="../assets/icons/287697_linkedin_icon.png" alt="LinkedIn icon" /> */}
            </div>
        </div>
    )
}