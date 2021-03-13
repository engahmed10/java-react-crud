import React from 'react'
import { Button, Checkbox, Form } from "semantic-ui-react";

export const CreateAppointment = ({users}) => {
   
   
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
                 Choose user 
                <select id="users">
               {users.map(user=> <option value="">{user.fullname }</option>)}
                   
                  
                </select>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
      
            </>
          )
}


export default CreateAppointment


