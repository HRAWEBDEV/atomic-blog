import { useContext } from 'react';
import { postsContext } from '../postsContex';

function List() {
 const { posts } = useContext(postsContext);
 return (
  <ul>
   {posts.map((post, i) => (
    <li key={i}>
     <h3>{post.title}</h3>
     <p>{post.body}</p>
    </li>
   ))}
  </ul>
 );
}

export default List;
