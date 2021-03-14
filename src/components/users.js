import React ,{useState,useEffect,useRef}  from 'react'
import {Image,List,Button, Header, Modal} from 'semantic-ui-react'
//import Modal from 'react-modal'
import    CreateUserForm from './createuser'
import    CreateAppointmentForm  from './createappointment'

const Users=({props})=>{
const [users, setUsers] = useState([]);
const [openuser, setOpenUser] = useState([]);
const [form, setForm] = useState("");
const [appForm,setAppForm]=useState("");

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

   function handleAppChange(e,user_id){
                

       const{name,value}=e.target
      setAppForm(prevState=>({appointment:{...prevState.appointment,[name]:value}}))
      console.log(`log`,appForm.appointment)
   }

   function handleAppSubmit(e){

     e.preventDefault();        
     const fetchUrl = `http://localhost:8080/${appForm.appointment.user_id}/appointments`;
     fetch(fetchUrl, {
        method: 'POST',
        body: JSON.stringify(appForm.appointment),
        headers: {
        'Content-Type': 'application/json'
        }
     })
     .then((response) => response.json())
    // .then((data) => setAppointment(apointments.concat(data)))
    // .catch((error) => console.log(`erroorrrr`,error))

    }
 
   
   return<fragment>
       
         {users.map((user)=>{
             return <List selection verticalAlign='middle'>

                       <List.Content>
                                <List.Item>
                                    <List.Content>
                                     <Image style={{'margin':'20px 20px'}} avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />

                                            {user.fullname}<br/>
                                            {user.email}         
                                            &nbsp; &nbsp; &nbsp; <button  onClick={e=>handleDelete(e,user.userid)} >delete</button>
                                    </List.Content>
                                        
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
                                                            <Modal.Header> 
                                                            {app.type}                      
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
                                   
                                </List.Item>
                        </List.Content>
                   </List> 
        })}

     <CreateUserForm 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
     />
     <CreateAppointmentForm 
        handleAppSubmit={handleAppSubmit}
        handleAppChange={handleAppChange }
        users={users}
     />

     </fragment>

}


export default Users