export default function Post({ post }) {
    const { title, body } = post;
    const postStyle = {
        width: "400px",
        display: "inline-block",
        padding: "20px",
        margin: "5px",
        border: "1px solid tomato",
        borderRadius: "20px",
        textAlign: "justify"
    }
    return (
        <div style={postStyle}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>

    );
}