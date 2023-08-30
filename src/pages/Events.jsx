import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SingleEvent from "./SingleEvent";

const Events = () => {
    const{user}=useContext(AuthContext);
    const [eventList, setEventList] = useState([]);
    const url = `http://localhost:5000/events-list?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setEventList(data))
     
    },[url])
   
console.log(eventList)
    return (
        <div className="grid md:grid-cols-2 grid-cols-1">
          {
            eventList.map(event=> <SingleEvent
            key={event._id}
            event={event}
            >
            </SingleEvent>)
          }
        </div>
    );
};

export default Events;