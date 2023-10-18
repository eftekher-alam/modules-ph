
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loaderUsers = useLoaderData();
    const [users, setUsers] = useState(loaderUsers)

    const handlerDeleteUser = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:5000/deleteUser/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount) {
                    alert("Deleted Successfully");
                    const newUsers = users.filter(user => user._id != _id);
                    setUsers(newUsers);
                }
            });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) =>
                        <tr key={index}>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                <Link to={`/update/${user?._id}`}><button>Update</button></Link> |
                                <button onClick={() => handlerDeleteUser(user?._id)} >Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default Users;