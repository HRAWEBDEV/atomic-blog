import { useEffect, useState } from 'react';
import PostsProvider from './components/PostsProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Archive from './components/Archive';
import Main from './components/Main';

function App() {
 const [isFakeDark, setIsFakeDark] = useState(false);
 // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
 useEffect(
  function () {
   document.documentElement.classList.toggle('fake-dark-mode');
  },
  [isFakeDark]
 );

 return (
  <PostsProvider>
   <section>
    <button
     onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
     className='btn-fake-dark-mode'
    >
     {isFakeDark ? '☀️' : '🌙'}
    </button>

    <Header />
    <Main />
    <Archive />
    <Footer />
   </section>
  </PostsProvider>
 );
}

export default App;
