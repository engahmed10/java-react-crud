import './App.css';
import Appointments from './components/appointments'  
import CreateAppointment from './components/createappointment'  
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  return (
   <div className="App">
      <Appointments/>
     
    
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
    </div>

  );
}

export default App;
