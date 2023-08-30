import { FaTrashAlt } from 'react-icons/fa';
const RegisterListRow = ({ register, handleDelete }) => {
    const {_id, name, email, date, events } = register
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{events}</td>
            <td>
                {
                    <button onClick={()=>handleDelete(_id)}
                    className="btn bg-red-500 text-white btn-sm">                      
                    <FaTrashAlt/>
                    </button>
                }
            </td>
        </tr>
    );
};

export default RegisterListRow;