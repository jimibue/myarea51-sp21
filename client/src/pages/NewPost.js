import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider";
import { Link, useHistory } from 'react-router-dom'
import FormattedMessage from "../components/FormattedMessage";
import useAxios from "axios-hooks";


function NewPost() {
    const history = useHistory()
    const [
        { data, loading, error },
        executePost
      ] = useAxios(
        {
          url: '/api/tweets',
          method: 'post'
        },
        { manual: true }
      )

    const { register, handleSubmit, errors, watch } = useForm();

    const onSubmit = (data) => {
        console.log('data: ', data);
        executePost({data:data})
        // post /api/tweets, data
        // let res = axios.post('/api/tweets',data)
    }; // your form submit function which will invoke after successful validation



    // note we are using semantic UI form components here..
    if(data) {
        history.push('/')
        return null
    }
    if(error) return <pre>{JSON.stringify(error)}</pre>
    if(loading) return <pre>loading</pre>

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Link to='/'>
                back
            </Link>
            <h1>New Post</h1>
            {/* {registerError && <FormattedMessage type='alert'>
                 <pre>{JSON.stringify(registerError, null, 2)}</pre>
              </FormattedMessage>
            } */}

            <Form.Field>
                <label>Title
                {errors.title && <p style={{ color: 'red' }}>*{errors.title.message}</p>}
                </label>
                <input
                    // TODO uncomment before pushing prod
                    name="title"
                    ref={register({
                        required: "Required",
                    })}
                />
            </Form.Field>
            <Form.Field>
                <label>Text
                {errors.text && <p style={{ color: 'red' }}>*{errors.text.message}</p>}
                </label>
                <input
                    // TODO uncomment before pushing prod
                    name="text"
                    ref={register({
                        required: "Required",
                    })}
                />
            </Form.Field>


            <Button>Add</Button>
        </Form>
    );
}

export default NewPost