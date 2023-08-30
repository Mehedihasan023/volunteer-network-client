import { useContext, useEffect, useState } from "react";
import EventsCard from "./EventsCard";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    //const{user}=useContext(AuthContext);
    const [events, setEvents] = useState([]);
    // const [eventTitle,setEventTitle]=useState({});
    // const [volunteerInfo,setVolunteerInfo]=useState([]);
    // const [count,setCount] =useState(0);
    // const [prevId,setPrevId]=useState('');
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    console.log(events);

    // const addToEventsList = (id) => {
    //    // console.log(id)
    //   setPrevId(id)
    //    if(prevId ==id){
    //     setCount(count+1)
    //    }
    //    console.log(count)

    //        //fetch event title by id
    //        fetch(`http://localhost:5000/events/${id}`)
    //            .then(res => res.json())
    //            .then(data => setEventTitle(data))
    //        console.log(eventTitle)
    //        //fetch volunteer info by id
    //        fetch(`http://localhost:5000/register-list?email=${user?.email}`)
    //            .then(res => res.json())
    //            .then(data => setVolunteerInfo(data))

    //        const ev = volunteerInfo[0].events = eventTitle.title;
    //        console.log(ev);
       
      
    // }


    return (
        <div className="bg-[#F8FAFC] h-screen">
            <div className="flex justify-center items-center ">
                <h2 className="text-3xl">I grow by helping people in need.</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 mx-11 mt-4">
                {
                    events.map(event => <EventsCard
                        key={event._id}
                        event={event}
                        //addToEventsList={addToEventsList}
                       
                    ></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Home;