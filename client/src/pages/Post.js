import {useLocation,  Link} from 'react-router-dom'

const Post = (props) =>{
    const {post} = useLocation()
    
    return (
        <div>
            <Link to='/'>back</Link>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
        </div>
    )
}

export default Post