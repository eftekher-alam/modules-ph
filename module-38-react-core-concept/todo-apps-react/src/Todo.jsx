export default function Todo({ name, isDone }) {

    if (isDone) {
        return <li>Task : {name} ✓</li>
    }
    return <li>Task : {name} ❌</li>


    // return (
    //     <li>Task : {name} {isDone ? "✓" : "❌"}</li>
    // );
}