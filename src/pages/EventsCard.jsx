import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
const EventsCard = ({ event }) => {
    const { img, title, description } = event;
    const [eventTitle, setEventTitle] = useState('');
    const { user } = useContext(AuthContext);
    const currentDate = new Date();
    const dateFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    // Format the currentDate using Intl.DateTimeFormat
    const date = currentDate.toLocaleDateString('en-us', dateFormatOptions);

    const addToEventList = () => {
     
        setEventTitle(title);
        if (title == eventTitle) {
            return Swal.fire({
                icon: 'error',
                text: 'Already added to event list',
            });
        }
        else {
            const email = user?.email;
            const eventList = { title, img, email, description,date};
            console.log(eventList)

            //add events to database
            fetch('https://volunteer-network-server-tawny.vercel.app/event-list', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventList)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Event added successfully...',
                        })
                    }
                })
        }



    }





    return (
        <div >

            <div onClick={() => addToEventList()} className="card w-11/12 h-80 bg-base-100 hover:bg-base-300 shadow-xl mt-5">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl h-60 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>

                </div>
            </div>

        </div>
    );
};

export default EventsCard;