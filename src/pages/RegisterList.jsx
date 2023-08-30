import { useEffect, useState } from "react";
import RegisterListRow from '/src/pages/RegisterListRow'
const RegisterList = () => {
   const [registerList, setRegisterList] = useState([]);
   
   useEffect(()=>{
       fetch('http://localhost:5000/register-list')
       .then(res=> res.json())
       .then(data=> setRegisterList(data))
   },[])
 
   console.log(registerList);
    return (
        <div>
            <h2 className="text-3xl">Volunteer register list</h2>
            <div>
                <div className="overflow-x-scroll">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Rgistration Date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registerList.map(register => <RegisterListRow
                                    key={register._id}
                                    register={register}
                                    // handleDelete={handleDelete}
                                    // handleBookingConfirm={handleBookingConfirm}
                                >
                                </RegisterListRow>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default RegisterList;