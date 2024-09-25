import { useEffect, useState } from "react"
import PostCard from "../components/post_card"

const Post = ()=>{
    const [allPost, setAllPost] = useState([])
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/posts").then(
                async (response)=>{
                    const posts = await response.json()
                    setAllPost(() => posts)
                }
            )
        },
        []
    )
    return(
        <div>
            {
                allPost.map(
                    (post)=>{
                        return <PostCard key={post.id} post={
                            post
                        }/>
                    }
                )
            }
        </div>
    )
}
export default Post