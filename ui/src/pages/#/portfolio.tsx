import SkillsCard from "@/components/skills_card";
import ScrollReveal from "@/components/scroll_reveal";

const Portfolio = () => {
    return (
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
            <div id="git_widget"></div>
            <div id="medium_widget"></div>
            <div id="li-widget"></div>
        </div>
    )
}

export default Portfolio; 