import { useLoaderData } from "react-router-dom";

const Post = () => {
    const { title, category_name, picture } = useLoaderData();

    return (
        <div>
            <h3>{title}</h3>
            <h4>{category_name}</h4>
            <img src={picture} alt="" />
        </div>
    );
};

export default Post;