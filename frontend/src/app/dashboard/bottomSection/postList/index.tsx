import PostCard from '@/components/postsCard'
import { posts } from '../../../../../database'

const PostList = () => {    
    return(
        <ul>
            {posts.map((post) => {                    
                return(                    
                    <PostCard key={post.id} post={post}/>                        
                    )
            })}
        </ul>
    )
}

export default PostList 