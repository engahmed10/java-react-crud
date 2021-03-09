import React from 'react'
import { Button, Checkbox, Form } from "semantic-ui-react";

export const CreateUser= () => {
   
   
    return(
            <>
            <Form>
                <Form.Field>
                <label>Full Name</label>
                <input placeholder='Full name'/>
                </Form.Field>
                
                <Form.Field>
                <label>email</label>
                 <input placeholder='Email'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
      
            </>
          )
}


export default CreateUser


