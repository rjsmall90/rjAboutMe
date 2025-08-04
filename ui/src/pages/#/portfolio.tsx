import SkillsCard from "@/components/skills_card";
import ScrollReveal from "@/components/scroll_reveal";

const Portfolio = () => {
    return (
<<<<<<< HEAD
        <div id="portfolio" className="flex flex-col justify-center">
            <div className="page-title">
                <h3>Skills</h3>
            </div>
            <div id="skills">
                <ScrollReveal className="delay-300">                 
                    <div className="grid auto-cols-3 grid-flow-col gap-8">
                        <div><SkillsCard /></div>
                    </div>
                </ScrollReveal>
            </div>
=======
        <div id="portfolio" className="segment">
            <div className="page-title">
                <h3> Portfolio Portfolio </h3>
            </div>
            <div id="skills"></div>
>>>>>>> dfba3d4 (fade-in transitions and css cleanup complete)
            <div id="git_widget"></div>
            <div id="medium_widget"></div>
            <div id="li-widget"></div>
        </div>
    )
}

export default Portfolio; 