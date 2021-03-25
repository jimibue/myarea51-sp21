import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// functional component
const Home = () => {
    // state for component
    const [cats, setCats] = useState(null)
    const [loading, setLoading] = useState(true)
    const  { user } = useContext(AuthContext)
    
    // mount
    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        try{
          let res = await axios.get(`/api/cats`)
          setCats(res.data)
          setLoading(false)
        } catch(err){
            alert('err')
            setLoading(false)
        }
        
    }

    const upVote = (id) =>{
        // going to axios call
        removeCat(id)
    }


    const removeCat = (id) => {
        const newCats  =  cats.filter( cat=> cat.id !== id)
        setCats(newCats)
    }

    if(loading) return <p>Loading</p>
    if(cats.length === 0 ) return <p>no more cats</p>

    const cat = cats[Math.floor(Math.random() * cats.length)]
 
    return(
        <div>
            <h1>Welcome Home {user.email}</h1>
            <div>
          <br />
          <Header as='h1'>Cat Tinder</Header>
          <br />
          <Card key={cat.id}>
            <Card.Content>
            <Image src={cat.avatar} />
              <Card.Header>
                { cat.name }
              </Card.Header>
              <Card.Description>
                { cat.breed }
              </Card.Description>
              <Card.Meta>
                { cat.registry }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={()=> removeCat(cat.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={()=> upVote(cat.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_cats">
            <Button color="blue">
              My Cats
            </Button>
          </Link>
        </div>
        </div>
    )
}
export default Home

// class component
// class Home extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>Home</h1>
//             </div>
//         )
//     }
// }
