import React ,{useState,useEffect,useRef}  from 'react'
import {Image,List,Button, Header, Modal} from 'semantic-ui-react'
//import Modal from 'react-modal'
import    CreateUserForm from './createuser'

const Users=({props})=>{
const [users, setUsers] = useState([]);
const [openuser, setOpenUser] = useState([]);
const [form, setForm] = useState("");


   useEffect(()=> {
       fetch("http://localhost:8080/users")
       .then(response=>response.json())
      .then(data=>(setUsers(data)
       )
      )
    
   },[]);


    function handleChange(e){
            const{name,value}=e.target
            setForm(prevState=>({user:{...prevState.user,[name]:value}}))
       }

    function handleSubmit(e){
     e.preventDefault();
        
          const fetchUrl = 'http://localhost:8080/users';
          fetch(fetchUrl, {
              method: 'POST',
              body: JSON.stringify(form.user),
              headers: {
                'Content-Type': 'application/json'
              }
          })
          .then((response) => response.json())
          .then((data) => setUsers(users.concat(data)))
          .catch((error) => console.log(`erroorrrr`,error))

    }

   function handleDelete(e,id){
      e.preventDefault();
      const fetchUrl = `http://localhost:8080/users/${id}`;

      fetch(fetchUrl , {
        method:'DELETE',
          headers: {
                'Content-Type': 'application/json'
              }
      })
       setUsers(users.filter((e)=>e.userid != id ))
        //e.target.parentNode.remove();          
   }
 
   
   return<fragment>
              {console.log(users)}  
         {users.map((user)=>{
             return   <List selection verticalAlign='middle'>
                
                   
                    <List.Content>
                        <List.Item>
                        
                            <List.Content>
                             <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                            <List.Header>{user.fullname}</List.Header>
                              {user.email}         
                              <button  onClick={e=>handleDelete(e,user.userid)} >delete</button>
                            <List.Content>
                          <List.Item as='ul'>    
                             <List.Header>His Appointments</List.Header>
                            <List.Item as='li'> 
                             {user.appointments?
                             user.appointments.map(app=>
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
                             </Modal><br/></>):""
    
                            }
                             </List.Item> 
                         </List.Item> 
                        </List.Content>
                        </List.Content>
                         </List.Item>
                    </List.Content>
                   
                </List> 
        })}

     <CreateUserForm 
                     handleSubmit={handleSubmit}
                     handleChange={handleChange}
     />

     </fragment>

}


export default Users