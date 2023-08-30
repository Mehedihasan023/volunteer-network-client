

const SingleEvent = ({ event, handleDelete }) => {
    const { _id,img, title, date } = event;

    return (
        <div className="md:mx-8 my-2 ">
            <div className="card card-side bg-base-100 shadow-xl w-11/12 h-44 ">
                <figure><img className="h-40 pl-2 rounded-lg" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{date}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleDelete(_id)} className="btn ">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;