import { useEffect, useState } from "react";
import EventsCard from "./EventsCard";

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://volunteer-network-server-tawny.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
  //  console.log(events);


    return (
        // display all events
        <div className="bg-[#F8FAFC] h-screen">
            <div className="flex justify-center items-center ">
                <h2 className="text-3xl">I grow by helping people in need.</h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 mx-11 mt-4">
                {
                    events.map(event => <EventsCard
                        key={event._id}
                        event={event}   
                    ></EventsCard>)
                }
            </div>
        </div>
    );
};

export default Home;