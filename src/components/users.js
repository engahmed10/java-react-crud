import React ,{useState,useEffect}  from 'react'
import {Image,List,Button, Header, Modal} from 'semantic-ui-react'
//import Modal from 'react-moal'
const Users=({props})=>{
const [users, setUsers] = useState([]);
const [openuser, setOpenUser] = useState([]);

   useEffect(()=> {
       fetch("http://localhost:8080/users")
       .then(response=>response.json())
      .then(data=>(setUsers(data)
       )
      )
    
   },[]);

   return<fragment>
        {users.map((user)=>{
             return   <List selection verticalAlign='middle'>
                
                    <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                    <List.Content>
                        <List.Header>{user.fullname}</List.Header>
                            <List.Content>
                            {user.email}
                            <List.Content>
                          <List.Item as='ul'>    
                             <List.Header>His Appointments</List.Header>
                            <List.Item as='li'> 
                             {user.appointments.map(app=>
                                    <>
                                <Modal style={{'width':'500px'}}
                                    onClose={() => setOpenUser(false)}
                                    onOpen={() => setOpenUser(true)}
                                    trigger={<Button> {app.date} </Button>}
                                >
                                <Modal.Header  >  {app.type}                      
                                    </Modal.Header>
                                    <Modal.Content >
                                     {app.Description}<br/>
                                    {app.time}
                                    </Modal.Content>
                                    <Modal.Actions>
                                    </Modal.Actions>
                             </Modal><br/></>)
    
                            }
                           

                             </List.Item> 
                         </List.Item> 
                        </List.Content>
                        </List.Content>
                    </List.Content>
                    </List.Item>
                </List> 
        })}
     </fragment>

}


export default Users