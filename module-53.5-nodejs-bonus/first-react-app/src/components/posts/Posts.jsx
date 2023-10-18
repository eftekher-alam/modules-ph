import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map((data, index) =>
                    <Link to={`/post/${data.id}`} key={index}>
                        <h2>{data.title}</h2>
                    </Link>)
            }
        </div>
    );
};

export default Posts;