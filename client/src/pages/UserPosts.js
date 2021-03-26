import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import useAxios from 'axios-hooks'

const UserPosts = (props)=>{
    // manual get call
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getMyPosts()
    },[])

    const getMyPosts = async()=>{
        try {
            let res = await axios.get('/api/tweets')
            setPosts(res.data)
        } catch (error) {
            
        }
    }

    // with axois-hook
    // TODO almost like it is caching data an not refreshing when i logout and login with another user with out reloading
    const [{ data:friendPosts, loading, error }, refetch] = useAxios(
        '/api/friend_tweets'
      )
    
    //   if (loading) return <p>Loading...</p>
    //   if (error) return <p>Error!</p>

   const renderPosts = ()=>{
       return  posts.map(post =>{
           return (
            <Link to={{pathname: `posts/${post.id}`, post: post}}>
                <h3>{post.title}</h3>
            </Link>
         )
        })
    }

    const renderFriendPosts = ()=>{
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error!</p>
        return friendPosts.map(post =>{
            return (
             <Link to={{pathname: `posts/${post.id}`, post: post}}>
                 <h3>{post.title}</h3>
             </Link>
          )
         })
     }

    return (
        <div>
            <p>My posts</p>
            <Link to='posts/new'>
                new post
            </Link>
            {renderPosts()}
            <p>friends post</p>
            {renderFriendPosts()}
        </div>
    )
}

export default UserPosts