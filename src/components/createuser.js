import { Button, Checkbox, Form } from "semantic-ui-react"
import React, { useState,useRef }  from 'react'


export const CreateUserForm=({handleSubmit,handleChange}) => {
    
    return(
        <>
            <div>
            <Form  onSubmit={handleSubmit}>
                <Form.Field>
                <label>Full Name</label>
                <input placeholder='Full name' name="fullname" onChange ={handleChange}/>
                </Form.Field>
                <Form.Field>
                <label>email</label>
                 <input placeholder='Email'  name="email" onChange={handleChange} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
            </div>
           
            </>
          )
}


export default CreateUserForm


