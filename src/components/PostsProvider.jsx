import { useContext, useMemo, useCallback } from 'react';
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

 const handleAddPost = useCallback((post) => {
  setPosts((posts) => [post, ...posts]);
 }, []);

 const handleClearPosts = useCallback(() => {
  setPosts([]);
 }, []);

 const contextValue = useMemo(
  () => ({
   posts: searchedPosts,
   onClearPosts: handleClearPosts,
   onAddPost: handleAddPost,
   searchQuery,
   setSearchQuery,
  }),
  [searchedPosts, searchQuery, setSearchQuery, handleAddPost, handleClearPosts]
 );

 return (
  <postsContext.Provider value={contextValue}>{children}</postsContext.Provider>
 );
};

export default PostsProvider;
export { usePosts };
