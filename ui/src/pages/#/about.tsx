import Image from 'next/image'
import ScrollReveal from "@/components/scroll_reveal"
// import SlideDown from "@/components/slide_reveal"

<<<<<<< HEAD
import family_pic from "../../assets/images/family_man.png"
import ry_and_kids from "../../assets/images/why_we_do_it.png"
import solo_shot from "../../assets/images/well_actually.png"

const About = () => {
    return (
        <div id="about-me" className="parallax relative">
                <div className="page-title">
                    <ScrollReveal>
                        <h1>3 Things About Me</h1> 
                    </ScrollReveal>
                </div>
<<<<<<< HEAD
                <ScrollReveal className="delay-400">
                <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-3 sm:grid-cols-none gap-8 overflow-x-auto sm:overflow-visible">
=======
                <ScrollReveal className="delay-500">
                <div className="grid auto-cols-3 grid-flow-col gap-8">
>>>>>>> 3c41706 (prod build ready)
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-80 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-150 transition-transform">
                                <Image  
                                    src={family_pic}
                                    alt="Me and the kids" />
                        </div>
                            <h1 className="image_caption typewriter"> I&apos;m A Father..</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
<<<<<<< HEAD
                        <div className="w-80 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-150 transition-transform">
                                <Image  
                                    src={solo_shot}
                                    alt="Me With A Microphone" />
                        </div>
                            <h1 className="image_caption typewriter">An Entrepeneur..</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-80 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-150 transition-transform">
                            <Image  
                                src={ry_and_kids}
                                alt="Co-Founders and their Students" />
                        </div>
=======
                        <div className="w-80 aspect-square rounded-xl overflow-hidden shadow hover:scale-150 transition-transform">
                                <Image  
                                    src={succesful_event}
                                    alt="After A BTP Event" />
                        </div>
                            <h1 className="image_caption typewriter">An Entrepeneur..</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-80 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-150 transition-transform">
                            <Image  
                                src={solo_shot}
                                alt="Me With A Microphone" />
                        </div>
>>>>>>> 3c41706 (prod build ready)
                            <h1 className="image_caption typewriter">..And Someone Who Likes <br></br> To Give Back When I Can</h1>
                    </div>
                </div>
                </ScrollReveal>
<<<<<<< HEAD
=======
const About = () => {
    return (
        <div id="about-me" className="parallax relative">
            <div className="page-title">
                <p> This Is The New About Me Page </p>
            </div>
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
=======
>>>>>>> 3c41706 (prod build ready)
            <div className="top-fade" />
        </div>
    )
}

export default About