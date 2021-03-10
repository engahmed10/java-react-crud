import './App.css';
import Appointments from './components/appointments'  
import CreateAppointment from './components/createappointment'  
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import React, { useState } from 'react';
import CreateUser from './components/createuser'  
import Users from "./components/users"

function App() {
  const [open, setOpen] = useState(false);
    const [openuser, setOpenUser] = useState(false);

  return (
   <div className="App">
    
      <Appointments/>
       <Users/>
        <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Button>Add Appointment</Button>}
           >
          <Modal.Header>Add Appointment</Modal.Header>
            <Modal.Content >
              <CreateAppointment/>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={() => setOpen(false)}>
                Close
              </Button>
            </Modal.Actions>
         </Modal>

           <Modal
              onClose={() => setOpenUser(false)}
              onOpen={() => setOpenUser(true)}
              open={openuser}
              trigger={<Button>Add User</Button>}
           >
          <Modal.Header>Add User</Modal.Header>
            <Modal.Content >
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={() => setOpenUser(false)}>
                Close
              </Button>
            </Modal.Actions>
         </Modal>
    </div>

  );
}

export default App;
