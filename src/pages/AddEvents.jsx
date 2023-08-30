import Swal from 'sweetalert2'

const AddEvents = () => {
    const handleAddEvent =event=>{
        event.preventDefault();
        const form = event.target;
        const title= form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const img= form.img.value;
        const addEvents={title,date,description,img}
        console.log(addEvents);

        fetch('http://localhost:5000/add-events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addEvents)
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



    return (
        <div>
            <h2 className="text-3xl">Add event</h2>

               <form onSubmit={handleAddEvent}>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Event Title</span>
                            </label>
                            <input type="text" name='title' placeholder="enter title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Event Date</span>
                            </label>
                            <input type="date" name='date' placeholder="" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' className="textarea textarea-primary" placeholder="enter designation"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Banner</span>
                            </label>
                            <input type="text" name='img' placeholder="enter image Url" className="input input-bordered" />
                        </div>



                    </div>
                    <div className="form-control mt-4">

                        <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                    </div>
                </div>
               </form>
            
        </div>
    );
};

export default AddEvents;