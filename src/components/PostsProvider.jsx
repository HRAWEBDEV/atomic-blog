import { useContext } from 'react';
import { createContext, useState } from 'react';
import { createRandomPost } from '../utils/createRandomPost';

const postsContext = createContext(null);

const usePosts = () => {
 const value = useContext(postsContext);
 if (!value) throw new Error('context is out of ranged');
 return value;
};

const PostsProvider = ({ children }) => {
 const [posts, setPosts] = useState(() =>
  Array.from({ length: 30 }, () => createRandomPost())
 );
 const [searchQuery, setSearchQuery] = useState('');

 const searchedPosts =
  searchQuery.length > 0
   ? posts.filter((post) =>
      `${post.title} ${post.body}`
       .toLowerCase()
       .includes(searchQuery.toLowerCase())
     )
   : posts;

 function handleAddPost(post) {
  setPosts((posts) => [post, ...posts]);
 }

 function handleClearPosts() {
  setPosts([]);
 }

 return (
  <postsContext.Provider
   value={{
    posts: searchedPosts,
    onClearPosts: handleClearPosts,
    onAddPost: handleAddPost,
    searchQuery,
    setSearchQuery,
   }}
  >
   {children}
  </postsContext.Provider>
 );
};

export default PostsProvider;
export { usePosts };
