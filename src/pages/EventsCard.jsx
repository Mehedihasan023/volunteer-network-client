

const EventsCard = ({ event }) => {
    const { _id, img, title } = event;
    return (
        <div>
            <div className="card w-11/12 h-80 bg-base-100 hover:bg-base-300 shadow-xl">
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