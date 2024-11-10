
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Login from './components/Login';

function App() {
  return (
    <>
    <Login/>
    <Navbar title="Ushereel" profile="Profile" 
    savedPosts="Saved Posts" analytics="Analytics" 
    setting="Settings" subs="Subscription"/>
   
    <div className='container'>
      <TextForm heading="Post your Startup reels here"/>
    </div>
    

    </>
  );
}

export default App;
