import { useEffect, useState } from "react";
import UpEventsCard from "./UpEventsCard";
const UpdateEvents = () => {
    const [events, setEvents] = useState([]);
    //fetch all events data
    useEffect(() => {
        fetch('https://volunteer-network-server-tawny.vercel.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl">Update an Event</h2>
            <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5  mx-2 mt-4 mb-20">
                {
                    events.map(event => <UpEventsCard
                        key={event._id}
                        event={event}
                    ></UpEventsCard>)
                }
            </div>
        </div>
    );
};

export default UpdateEvents;