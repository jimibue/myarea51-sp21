import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider, Image } from 'semantic-ui-react';

const MyCats = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        getCats()
    }, [])

    const getCats = async () => {
        try {
            let res = await axios.get('/api/my_cats')
            setCats(res.data)
        } catch (err) {
            alert('error occured getting liked cats')

        }
    }
    return (
        <>
            <Link to='/'>Home</Link>
            <h1>My Cats</h1>
            <Card.Group itemsPerRow={4}>
                {cats.map(cat =>
                    <Card key={cat.id}>
                        <Image src={cat.avatar} />
                        <Card.Content>
                            <Divider />
                            <Card.Header>
                                {cat.name}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </>
    )
}

export default MyCats