const quotes = [
    {
        text: "If there is no struggle, there is no progress.",
        author: "Frederick Douglass"
    },
        {
        text: "Never be limited by other people’s limited imaginations",
        author: "Mae Jemison"
    },
        {
        text: "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self‑discipline and effort.",
        author: "Jesse Owens"
    },
        {
        text: "Success isn’t about how much money you make, it’s about the difference you make in people’s lives.",
        author: "Michelle Obama"
    },
        {
        text: "Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
        author: "Barack Obama"
    },
        {
        text: "Don’t let your head hang down. Never give up and sit and grieve. Find another way.",
        author: "Satchel Paige"
    },
        {
        text: "The struggles along the way are only meant to shape you for your purpose.",
        author: "Chadwick Boseman"
    },
        {
        text: "Set your goals high, and don’t stop till you get there.",
        author: "Bo Jackson"
    },
        {
        text: "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.",
        author: "Langston Hughes"
    },
        {
        text: "The most common way people give up their power is by thinking they don’t have any.",
        author: "Alice Walker"
    },
        {
        text: "Hold fast to dreams, for if dreams die, life is a broken‑winged bird that cannot fly.",
        author: "Langston Hughes"
    },
        {
        text: "Where there is no vision, there is no hope.",
        author: "George Washington Carver"
    },
        {
        text: "Freedom is never given; it is won.",
        author: "A. Philip Randolph"
    },
        {
        text: "Nothing will work unless you do.",
        author: "Maya Angelou"
    },
        {
        text: "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
        author: "Audre Lorde"
    }
]

const fetchQuotes = async () => {
    const mappedQuotes = []
    quotes.map((quote) => {
        return mappedQuotes.push({quote: quote.text, quotee: quote.author})
    })
    return mappedQuotes;
}

export { fetchQuotes }