import PostsProvider from './components/PostsProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Archive from './components/Archive';
import Main from './components/Main';
import ModeController from './components/ModeController';
import ModeProvider from './components/ModeProvider';

function App() {
 return (
  <ModeProvider>
   <PostsProvider>
    <section>
     <ModeController />
     <Header />
     <Main />
     <Archive />
     <Footer />
    </section>
   </PostsProvider>
  </ModeProvider>
 );
}

export default App;
