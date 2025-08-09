"use client"
import Image from 'next/image'
import ScrollReveal from "@/components/scroll_reveal"
import SlideDown from "@/components/slide_reveal"

import paper from "../assets/icons/7695997_document_business_paper_file_paperwork_icon.png"
// import frontend from "../../public/resumes/rsmall-resume_FE.pdf"
// import fullstack from "../assets/resumes/rsmall-resume_FS.pdf"
// import devrel from "../assets/resumes/rsmall-resume_DR.pdf"

const download = (file: string) => {
    if (typeof window !== "undefined"){
        window.location.href = file
    }
}


export default function ResumeDownload(){
    return (
        <div>
         <div className="page-title">
                    <ScrollReveal>
                        <h1> Download Resume </h1> 
                    </ScrollReveal>
                </div>
                <div className="grid auto-cols-3 grid-flow-col gap-8">
                    <div className="flex flex-col justify-center">
                        <a href="/public/resumes/rsmall-resume_FE.pdf" download="/public/resumes/rsmall-resume_FE.pdf" className="w-35 aspect-square bg-[#F7F7F7] rounded-lg shadow-md flex items-center justify-center overflow-hidden shadow hover:scale-105 transition-transform">
                            <SlideDown>
                                <Image  
                                    src={paper}
                                    alt="resume icon" />
                            </SlideDown>
                        </a>
                        <SlideDown>
                            <h1 className="image_caption"> Front End Engineer </h1>
                        </SlideDown>
                    </div>
                    <div className="flex flex-col justify-center">
                        <a href="/public/resumes/rsmall-resume_FS.pdf" download="/public/resumes/rsmall-resume_FS.pdf" className="w-35 aspect-square bg-[#F7F7F7] rounded-lg shadow-md flex items-center justify-center overflow-hidden shadow hover:scale-105 transition-transform">
                            <SlideDown>
                                <Image  
                                    src={paper}
                                    alt="resume icon" />
                            </SlideDown>
                        </a>
                        <SlideDown>
                            <h1 className="image_caption"> Full Stack Engineer </h1>
                        </SlideDown>
                    </div>
                    <div className="flex flex-col justify-center">
                        <a href="/public/resumes/rsmall-resume_DR.pdf" download="/public/resumes/rsmall-resume_DR.pdf" className="w-35 aspect-square bg-[#F7F7F7] rounded-lg shadow-md flex items-center justify-center overflow-hidden shadow hover:scale-105 transition-transform">
                            <SlideDown>
                                <Image  
                                    src={paper}
                                    alt="resume icon" />
                            </SlideDown>
                        </a>
                        <SlideDown>
                            <h1 className="image_caption"> Developer Relations </h1>
                        </SlideDown>
                    </div>
                </div>
            </div>
    )
}