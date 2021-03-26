import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const UserPosts = (props)=>{
    const [posts, setPosts] = useState([{id:1, title:'post 1', text:'asdfasdf'},{id:2, title:'post 2', text:'asdfasdf'} ])
    useEffect(()=>{
        getPosts()
    })

    const getPosts = async()=>{
        try {
            let res = await axios.get('/api/tweets')
            setPosts(res.data)
        } catch (error) {
            
        }
    }
   const renderPosts = ()=>{
       return  posts.map(post =>{
           return (
            <Link to={{pathname: `posts/${post.id}`, post: post}}>
                <h3>{post.title}</h3>
            </Link>
         )
        })
    }
    return (
        <div>
            <p>posts</p>
            {renderPosts()}
        </div>
    )
}

export default UserPosts