import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SingleEvent from "./SingleEvent";
import Swal from 'sweetalert2'
const Events = () => {
    const { user } = useContext(AuthContext);
    const [eventList, setEventList] = useState([]);
    const url = `http://localhost:5000/events-list?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEventList(data))

    }, [url])

    const handleDelete = (id) => {
        // alert message before delete 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/events-list/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = eventList.filter(event => event._id !== id)
                            setEventList(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })



    }

    console.log(eventList)
    return (
        <>
            <h2 className="text-center font-bold text-3xl mt-7"> {eventList.length === 0 ? 'No Events Added' : ' '}</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-3 mb-5">
                {
                    eventList.map(event => <SingleEvent
                        key={event._id}
                        event={event}
                        handleDelete={handleDelete}
                    >
                    </SingleEvent>)
                }
            </div>
        </>

    );
};

export default Events;