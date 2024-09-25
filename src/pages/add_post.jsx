import { useState } from "react"
import PostForm from "../components/post_form"

const AddPost = ()=>{
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [userId, setUserId] = useState("1")
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(title === ""){
            alert("Title cannot be empty")
            return
        }
        if(title.length >= 50){
            alert("Title cannot be more than 50 characters")
            return
        }
        if(body === ""){
            alert("Description cannot be empty")
            return
        }
        setIsLoading(true)
        try{
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            title: title,
                            body: body,
                            userId: userId
                        }
                    ),
                    headers:{
                        "Content-Type": "application/json"
                    }
                }
            )
            const data = await response.json();
            console.log(title, body, userId, data)
        }catch(e){
            alert("something went wrong, please try again")
        }
        setIsLoading(false)
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Add Post</h1>
            {
                isLoading && <p>Loading...</p>
            }
            <PostForm
                onChangeTitle={(e)=>setTitle(e.target.value)}
                onChangeBody={(e)=>setBody(e.target.value)}
                onChangeUserId={(e)=>setUserId(e.target.value)}
            />
        </form>
    )
}

export default AddPost