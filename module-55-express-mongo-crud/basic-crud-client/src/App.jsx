import './App.css'

function App() {

  const handlerUserCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = { name, email };

    fetch("http://localhost:5000/createUser", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
          alert("User ID created successfully");
          form.reset();
        }
      })
  }

  return (
    <>
      <h1>Vite + React</h1>
      <form onSubmit={handlerUserCreate}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
