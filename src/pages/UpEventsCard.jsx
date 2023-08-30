import { Link } from "react-router-dom";


const UpEventsCard = ({event}) => {
    const {_id, img, title } = event;

    return (
        <div>
            <Link to={`/admin/up-events-info/${_id}`}>
                <div className="card w-11/12 h-52 bg-base-100 hover:bg-base-300 shadow-xl mt-5">
                    <figure className="">
                        <img src={img} alt="Shoes" className="rounded-xl h-max w-full" />
                    </figure>
                    <div className=" items-center text-center">
                        <p className="">{title}</p>

                    </div>
                </div>
            </Link>
          
        </div>
    );
};

export default UpEventsCard;