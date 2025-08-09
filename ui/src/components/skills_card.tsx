/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from 'react'

type Skill = {
  category: string;
  skills: string[];
};

async function fetchSkills(): Promise<Skill[] | undefined> {
    const url = `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/skills`;
    let data;
    try {
        const response = await fetch(url)
        data = (await response.json()) as Skill[];

        const allSkills: Skill[] = data.map((skill: Skill) =>  {
            return {category: skill.category, skills: skill.skills}
        })
        
        return allSkills

    } catch(err) {
        console.error("Error fetching quotes:", err);
    }
}

export default function SkillsCard() {
    const [skills, setSkills] = useState<Skill[]>([])
    
    useEffect(()=>{
        try{
            fetchSkills().then((skill: any) => {
                setSkills(skill)
            })
        } catch(err) {
            console.log("Error Fetching Skills", err)
        }
    }, [])

    let keyVal=1
    return (
        <div className="grid auto-cols-3 grid-flow-col gap-8">
            {skills.map((skill: any) => {
                return (
                    <div key={keyVal+=1} className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl p-6 shadow-lg border-4 border-[#F72585]">
                        <div>
                            <div className="text-xl font-medium text-[#F72585] text-center">{ skill.category }</div>
                                <ul>
                                    {skill.skills.map((s: never) => (
                                        <li key={keyVal+=1} className="text-gray-500 dark:text-gray-400 text-left">• {s}</li> 
                                    ))}
                                </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}