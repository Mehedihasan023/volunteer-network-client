import { useEffect, useState } from "react";
import RegisterListRow from '/src/pages/RegisterListRow';
import Swal from 'sweetalert2'
const RegisterList = () => {
   const [registerList, setRegisterList] = useState([]);
   
   useEffect(()=>{
       fetch('http://localhost:5000/register-list')
       .then(res=> res.json())
       .then(data=> setRegisterList(data))
   },[])
    
    const handleDelete =(id)=>{
        // show alert message before delete
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
                fetch(`http://localhost:5000/register-list/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = registerList.filter(register => register._id !== id)
                            setRegisterList(remaining);
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
                                     handleDelete={handleDelete}
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