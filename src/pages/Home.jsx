import { useState } from "react";
import EventsCard from "./EventsCard";

const Home = () => {
    const [events, setEvents] = useState([]);
    //fetch all events data
    const fetchData = () => {

        fetch('https://volunteer-network-server-tawny.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }
    //if data is not loaded then fetch data 6 more times 
    let count = 0;
    while (events.length === 0 && count < 6) {
        if (events.length === 0) {
            fetchData();
           // location.reload(true);
            count++;
            console.log(count)
        }
        else {
            count = 6;
        }
    }

    return (
        // display all events
        <div className="bg-[#F8FAFC] h-screen">
            <div className="flex justify-center items-center ">
                <h2 className="text-3xl">I grow by helping people in need.</h2>
            </div>
            {/* show  message if data is not found in server */}
            <p className={events.length === 0 ? "text-orange-600 text-center text-2xl mt-20" : 'hidden'}>
                {
                    events.length === 0 && 'Data not found.. Server is down!!! '
                }
            </p>

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