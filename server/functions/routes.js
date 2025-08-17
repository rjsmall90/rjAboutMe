import quotes from "../data/quotes.json" assert { type: "json" }
import skills from "../data/skills.json" assert { type: "json" }

const fetchQuotes = async () => {
    return quotes;
}

const fetchSkills = async () => {
    return skills
}

export { fetchQuotes, fetchSkills }

// const mappedSkills = []
// skills.map((skill) => {
//     return mappedSkills.push({category: skill.category, skills: [skill.skills]})
// })
// return mappedSkills;

// const mappedQuotes = []
// quotes.map((quote) => {
//     return mappedQuotes.push({quote: quote.text, quotee: quote.author})
// })