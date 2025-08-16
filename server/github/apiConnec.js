


const githubConnec = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try{
        const response = await fetch(url)
        data = await response.json()
    } catch (err) {
        return err
    }

    console.log(data)
}

export { githubConnec }