import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { loadPosts } from '../store/posts';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts());
    },[dispatch]);

    return (
        <div>
            <h1>Posts
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </h1>
        </div>
    )

}
export default Posts;