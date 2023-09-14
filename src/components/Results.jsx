import { useContext } from 'react';
import { postsContext } from '../postsContex';

function Results() {
 const { posts } = useContext(postsContext);
 return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
