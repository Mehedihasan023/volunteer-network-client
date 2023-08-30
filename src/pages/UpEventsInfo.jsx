import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpEventsInfo = () => {
    const event = useLoaderData();
    const id= event?._id;
   // console.log(id);

    const handleUpdateEvent = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const img = form.img.value;
        const addEvents = { title, date, description, img }
        //console.log(addEvents);
        //update value of an event
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addEvents)

        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data?.result?.modifiedCount > 0) {
                    Swal.fire({
                         icon: 'success',
                         title: 'Event updated successfully...',
                     })
                }
            })

    }

    return (
        <div>
            <h2 className="text-3xl">Update an Event</h2>

            <div className="mt-4">
            {/* get new update value */}
                <form onSubmit={handleUpdateEvent}>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event Title</span>
                                </label>
                                <input type="text" defaultValue={event?.title} name='title' placeholder="enter title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Event Date</span>
                                </label>
                                <input type="date" defaultValue={event?.date}  name='date' placeholder="" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea defaultValue={event?.description} name='description' className="textarea textarea-primary" placeholder="enter designation"></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Banner</span>
                                </label>
                                <input type="text" defaultValue={event?.img} name='img' placeholder="enter image Url" className="input input-bordered" />
                            </div>



                        </div>
                        <div className="form-control mt-4">

                            <input className="btn btn-primary btn-block" type="submit" value="Update" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpEventsInfo;