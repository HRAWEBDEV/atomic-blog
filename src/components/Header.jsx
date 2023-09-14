import { useContext } from 'react';
import { postsContext } from '../postsContex';
import Results from './Results';
import SearchPosts from './SearchPosts';
function Header() {
 const { onClearPosts } = useContext(postsContext);
 return (
  <header>
   <h1>
    <span>⚛️</span>The Atomic Blog
   </h1>
   <div>
    <Results />
    <SearchPosts />
    <button onClick={onClearPosts}>Clear posts</button>
   </div>
  </header>
 );
}

export default Header;
