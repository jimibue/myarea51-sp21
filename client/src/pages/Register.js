import React, {useContext, useState} from 'react'
import { Form, Header } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory } from 'react-router-dom'

const Register = (props)=> {
    const {handleRegister} = useContext(AuthContext)
    const [email, setEmail] = useState('test@test.com')
    const [nickname, setNickname] = useState('test@test.com')
    const [password, setPassword] = useState('123456')
    const [passwordConfirmation, setPasswordConfirmation] = useState('123456')
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email, password, passwordConfirmation})
        handleRegister({email, password, passwordConfirmation, nickname}, history)
    } 
    return (

        <>
        <Header>Register</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input 
            autoFocus
            required
            label='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        <Form.Input 
            required
            label='nickname'
            value={nickname}
            onChange={(e)=> setNickname(e.target.value)}
          />
         <Form.Input 
            required
            label='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        <Form.Input 
            required
            label='confirm password'
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
          />
          <Form.Button>register</Form.Button>
        </Form>
        </>
    )
}

export default Register