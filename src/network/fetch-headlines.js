export const fetchHeadlines=async()=>{
    const result=await fetch(`https://newsapi.org/v2/top-headlines?q=all&apiKey=aae2da9709064b05aa027d60e7c04c23&pageSize=100`)
    console.log(result)
    return await result.json()
}