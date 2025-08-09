import Image from 'next/image'
import ScrollReveal from "@/components/scroll_reveal"
import SlideDown from "@/components/slide_reveal"

import family_pic from "../../assets/images/family_man.png"
import succesful_event from "../../assets/images/succesful_event.png"
import solo_shot from "../../assets/images/well_actually.png"

const About = () => {
    return (
        <div id="about-me" className="parallax relative">
                <div className="page-title">
                    <ScrollReveal>
                        <h1>About Me </h1> 
                    </ScrollReveal>
                </div>
                <div className="grid auto-cols-3 grid-flow-col gap-8">
                    <div className="flex flex-col justify-center">
                        <div className="w-48 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-105 transition-transform">
                            <SlideDown>
                                <Image  
                                    src={family_pic}
                                    alt="Me and the kids" />
                            </SlideDown>
                        </div>
                        <SlideDown>
                            <h1 className="image_caption"> I'm A Father..</h1>
                        </SlideDown>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="w-48 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-105 transition-transform">
                            <SlideDown>
                                <Image  
                                    src={succesful_event}
                                    alt="After A BTP Event" />
                            </SlideDown>
                        </div>
                        <SlideDown>
                            <h1 className="image_caption">An Entrepeneur..</h1>
                        </SlideDown>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="w-48 aspect-[3/4] rounded-xl overflow-hidden shadow hover:scale-105 transition-transform">
                            <SlideDown>
                                <Image  
                                    src={solo_shot}
                                    alt="Me With A Microphone" />
                            </SlideDown>
                        </div>
                        <SlideDown>
                            <h1 className="image_caption">And Someone Who Likes <br></br> To Give Back When I Can</h1>
                        </SlideDown>
                    </div>
                </div>
            <div className="top-fade" />
        </div>
    )
}

export default About