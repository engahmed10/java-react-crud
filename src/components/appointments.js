
import React, { useEffect,useState } from 'react';
import Users from './users'
const Appointments = (props) => {
    const [state, setstate] = useState([]);
   useEffect(()=> {
       fetch("http://localhost:8080/appointments")
       .then(response=>response.json())
      .then(data=>(<Users prop={console.log('here',data)}/>,setstate(data)
       )
      )
    
   },[]);


    return <fragment>
          { 
           
           }
           </fragment>
};
export default Appointments;