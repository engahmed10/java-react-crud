import react from 'react';
import {useEffect} from 'react';
import React, { useState } from 'react';

const Appointments = (props) => {
    const [state, setstate] = useState([]);
   useEffect(()=> {
       fetch("http://localhost:8080/appointments")
       .then(response=>response.json())
      .then(data=>setstate(data))

   },[]);


    return <fragment>
          { 
            state.map(apponitment=>
             <div>
            <ol> 
            <li>
            Appointment  Description: {
             apponitment.description
             }
             </li>
              Appointment  date: {
             apponitment.date
             }
             <li>
             </li>
             </ol>
             </div>
           )
           }
           </fragment>
};
export default Appointments;