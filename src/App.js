import './App.css';
import Leftside from  './component/leftside';
import Rideside from  './component/rideside';
import Middleside from  './component/middleside';


function App() {
  return (
   
   <div className='main'>
   <div className='Root__top-container'>
   <h1>hello world</h1>
   <Leftside/>
   <Rideside/>
   <Middleside/>
   
   </div>
   </div>
   
  );
}

export default App;
