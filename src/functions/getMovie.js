import axios from 'axios'

export const getMovie = async (url) =>{
    axios.get(url)
    .then((response)=>{
        console.log(response.data.results.slice(0,5))
        return await response.data.results.slice(0,5)
        
        
    })

}