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
             {apponitment.description}
             </div>
            
           )
           }
           </fragment>
};
export default Appointments;