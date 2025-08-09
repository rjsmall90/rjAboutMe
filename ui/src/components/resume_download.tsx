"use client"
import Image from 'next/image'
import ScrollReveal from "@/components/scroll_reveal"

import paper from "../assets/icons/7695997_document_business_paper_file_paperwork_icon.png"

export default function ResumeDownload(){
    return (
        <div className="relative">
            <div className="page-title">
                <ScrollReveal>
                    <h1> Hiring? </h1> 
                </ScrollReveal>
            </div>
            <ScrollReveal className="delay-300">
                <div className="grid auto-cols-3 grid-flow-col gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/public/resumes/rsmall-resume_FE.pdf" 
                            download="/public/resumes/rsmall-resume_FE.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3"> Front End Engineer Resume </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/public/resumes/rsmall-resume_FS.pdf" 
                            download="/public/resumes/rsmall-resume_FS.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3"> Full Stack Engineer Resume </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/public/resumes/rsmall-resume_DR.pdf" 
                            download="/public/resumes/rsmall-resume_DR.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3 text-center mt-3"> Developer Relations Resume </h1>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}