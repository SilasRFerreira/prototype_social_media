import PostModal from "@/modals/postModal"
import ShownUserData from "../shownUserData"

const PostCard = ({post}: any) => {
    const text = post.title.substring(0,150)
    
    return(
        <li className="flex flex-col gap-6 max-w-[700px]">
            <ShownUserData/>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-justify">{text} ...</p>
            <div className="flex gap-12">
                <button className="p-1 px-2 text-gray-5 bg-gray-1 hover:text-gray-1 hover:bg-gray-5 border border-solid border-gray-1 hover:border-gray-1 rounded">Abrir post</button>
                <button>like</button>
            </div>
            <PostModal list={post}/>
        </li>
    )
}

export default PostCard