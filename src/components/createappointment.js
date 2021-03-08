import React from 'react'
import { Button, Checkbox, Form } from "semantic-ui-react";

export const CreateAppointment = () => {
   
   
    return(
            <>
            <Form>
                <Form.Field>
                <label>Description</label>
                <input placeholder='description'/>
                </Form.Field>
                <Form.Field>
                <label>date</label>
                <input placeholder='date' />
                </Form.Field>
                <Form.Field>
                 Add user 
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
      
            </>
          )
}


export default CreateAppointment


