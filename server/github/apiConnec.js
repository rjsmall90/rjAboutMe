import dotenv from 'dotenv';
dotenv.config()

const headers = {'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`}

const githubFetchUserInfo = async () => {
    let userInfo;
    const url = "https://api.github.com/user"
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        }).then((res) => res.json()).then((user) => {
            userInfo = user
        })
    } catch (error) {
        console.log("Error Retreiving User Data: ", error)
    }

    return userInfo;
}

const githubFetchAllRepos = async () => {
    let repoInfo, url, username, userId;
    const user = await githubFetchUserInfo().then((repo) => {
        url = repo.repos_url
        username = repo.login
        userId = repo.id
    })

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        }).then((res) => res.json()).then((repo) => {
            repoInfo = repo
        })
    } catch (error) {
        console.log("Error Retreiving Repo Data: ", error)
    }

    return repoInfo;
}

export { githubFetchAllRepos }