import PostCard from '@/components/postsCard'
import { posts } from '../../../../../database'

const PostList = () => {    
    return(
        <ul className='mt-16 flex flex-col gap-12 '>
            {posts.map((post) => {                    
                return(                    
                    <PostCard key={post.id} post={post}/>                        
                    )
            })}
        </ul>
    )
}

export default PostList 