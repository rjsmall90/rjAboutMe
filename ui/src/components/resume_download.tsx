<<<<<<< HEAD
"use client"
import Image from 'next/image'
import ScrollReveal from "@/components/scroll_reveal"

import paper from "../assets/icons/7695997_document_business_paper_file_paperwork_icon.png"
<<<<<<< HEAD

export default function ResumeDownload(){
    return (
        <div className="relative">
            <div className="page-title">
                <ScrollReveal>
                    <h1> Hiring? </h1> 
                </ScrollReveal>
            </div>
            <ScrollReveal className="delay-300">
                <div className="flex flex-col sm:flex-row gap-8 overflow-x-auto sm:overflow-visible">
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/resumes/rsmall-resume_FE.pdf" 
                            download="/resumes/rsmall-resume_FE.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3"> Front End Engineer Resume </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/resumes/rsmall-resume_FS.pdf" 
                            download="/resumes/rsmall-resume_FS.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3"> Full Stack Engineer Resume </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/resumes/rsmall-resume_DR.pdf" 
                            download="/resumes/rsmall-resume_DR.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3 text-center mt-3"> Developer Relations Resume </h1>
                    </div>
                </div>
            </ScrollReveal>
=======


export default function ResumeDownload(){
    return (
        <div className="segment">
            <div className="content">
                {/* placeholder quote*/}
                <h1>"This Will Be Where You Can Download My Resume </h1>
                <div className="grid">

                </div>
            </div>
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
=======

export default function ResumeDownload(){
    return (
        <div className="relative">
            <div className="page-title">
                <ScrollReveal>
                    <h1> Download Resume </h1> 
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
                        <h1 className="image_caption text-center mt-3"> Front End Engineer </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/public/resumes/rsmall-resume_FS.pdf" 
                            download="/public/resumes/rsmall-resume_FS.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3"> Full Stack Engineer </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <a 
                            href="/public/resumes/rsmall-resume_DR.pdf" 
                            download="/public/resumes/rsmall-resume_DR.pdf" 
                            className="w-36 aspect-square bg-[#F7F7F7] rounded-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
                        >
                            <Image src={paper} alt="resume icon" />
                        </a>
                        <h1 className="image_caption text-center mt-3 text-center mt-3"> Developer Relations </h1>
                    </div>
                </div>
            </ScrollReveal>
>>>>>>> 3c41706 (prod build ready)
        </div>
    )
}