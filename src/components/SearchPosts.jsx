import { useContext } from 'react';
import { postsContext } from '../postsContex';

function SearchPosts() {
 const { searchQuery, setSearchQuery } = useContext(postsContext);
 return (
  <input
   value={searchQuery}
   onChange={(e) => setSearchQuery(e.target.value)}
   placeholder='Search posts...'
  />
 );
}

export default SearchPosts;
