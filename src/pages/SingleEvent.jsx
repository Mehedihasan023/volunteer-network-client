

const SingleEvent = ({event}) => {
    const { img, title, date } = event;
    return (
        <div className="md:mx-8 my-2">
            <div className="card card-side bg-base-100 shadow-xl w-11/12 h-44 ">
                <figure><img className="h-40" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{date}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;