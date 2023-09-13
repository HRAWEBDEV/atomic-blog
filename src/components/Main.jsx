import FormAddPost from './FormAddPost';
import Posts from './Posts';
function Main({ posts, onAddPost }) {
 return (
  <main>
   <FormAddPost onAddPost={onAddPost} />
   <Posts posts={posts} />
  </main>
 );
}

export default Main;
