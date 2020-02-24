import axios from "axios"

const get = ({ url, data={}})=>{
    return axios.get(url,{
        params:{
            ...data
        }
    }).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
}

const post = ({ url, data={}})=>{
    return axios.post( url, data)
            .then(res =>{
                return res.data
            }).catch(err =>{
                console.log(err)
            })
}

export {
    get,
    post
}