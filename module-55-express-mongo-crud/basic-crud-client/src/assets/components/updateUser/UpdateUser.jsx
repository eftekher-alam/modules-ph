import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const user = useLoaderData();
    const handlerUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email };

        fetch(`http://localhost:5000/updateUser/${user._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Successfully updated..!");
                }
            });
    }
    return (
        <div>
            <h3>Update user</h3>
            <form onSubmit={handlerUpdateUser} >
                <input type="text" name="name" defaultValue={user.name} id="name" />
                <br />
                <input type="email" name="email" defaultValue={user.email} id="email" />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateUser;