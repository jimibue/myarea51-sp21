import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { Form,Button } from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider";
import { useHistory } from 'react-router-dom'
import FormattedMessage from "../components/FormattedMessage";


function RegisterUX() {
    const history = useHistory()

    const {handleRegister, registerError}  = useContext(AuthContext)

    const { register, handleSubmit, errors, watch } = useForm();

    const onSubmit = (data) => {
        console.log('data: ', data);
         handleRegister(data, history)
    }; // your form submit function which will invoke after successful validation

    const password = useRef({});
    // TODO SET INITIAL PASSWORD TO "" WHEN DONE TESTING
    // password.current = watch("password", "");

    password.current = watch("password", "123456");

    console.log(watch("example")); // you can watch individual input by pass the name of the input
    console.log(errors);

    // note we are using semantic UI form components here..

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            {registerError && <FormattedMessage type='alert'>
                 <pre>{JSON.stringify(registerError, null, 2)}</pre>
              </FormattedMessage>
            }

            <Form.Field>
                <label>Email
                {errors.email && <p style={{ color: 'red' }}>*{errors.email.message}</p>}
                </label>
                <input
                    // TODO uncomment before pushing prod
                   defaultValue='test@test.com'
                    name="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
            </Form.Field>

            <Form.Field>
                <label>Password
                {errors.password && <p style={{ color: 'red' }}>*{errors.password.message}</p>}
                </label>
                <input

                    name="password"
                    // TODO uncomment before pushing prod
                    defaultValue='123456'
                    // type="password"
                    ref={register({
                        required: "You must specify a password",
                        minLength: {
                            value: 6,
                            message: "Password must have at least 6 characters"
                        }
                    })}
                />
            </Form.Field>

            <Form.Field>
                <label>Password
                {errors.password_confirmation && <p style={{ color: 'red' }}>*{errors.password_confirmation.message}</p>}
                </label>
                <input

                    name="password_confirmation"
                    // TODO uncomment before pushing prod
                    // type="password"
                    defaultValue='123456'
                    ref={register({
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    })}
                />
            </Form.Field>
            <Button>Register</Button>
        </Form>
    );
}

export default RegisterUX