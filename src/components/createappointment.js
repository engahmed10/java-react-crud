import React from 'react'
import { Button, Checkbox, Form } from "semantic-ui-react";

export const CreateAppointment = ({handleAppChange,handleAppSubmit,users}) => {
     
    return(
            <>
                <Form onSubmit={handleAppSubmit}>
                        <Form.Field>
                            <label>Description</label>
                            <input placeholder='description' name="description" onChange={handleAppChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>date</label>
                            <input placeholder='date' name="date"  onChange={handleAppChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Time</label>
                            <input placeholder='time' name="time" onChange={handleAppChange} />
                        </Form.Field>
                        <Form.Field>
                            Choose user 
                            <select onChange={handleAppChange}  name="userid"  >
                                <option disabled selected value="undefined"  > -- select an option -- </option>
                                {users.map(user=>
                                                    <option value={user.userid} >{user.fullname}
                                                    </option>)}
                            </select>
                       </Form.Field>
                   <Button type='submit'>Submit</Button>
                </Form>
            </>
          )
}


export default CreateAppointment


