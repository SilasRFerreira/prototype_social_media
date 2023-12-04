const PostCard = ({post}: any) => {
    return(
        <li>
            <h3>{post.user}</h3>
            <p>{post.stack}</p>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
        </li>
    )
}

export default PostCard