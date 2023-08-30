
const RegisterListRow = ({ register }) => {
    const { name, email, date, events } = register
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{events}</td>
            <td>
                {
                    <button className="btn btn-secondary btn-xs">X</button>
                }
            </td>
        </tr>
    );
};

export default RegisterListRow;