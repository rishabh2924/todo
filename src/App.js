import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './screens/Login';
 

import SignUp from './screens/Signup';



import Todo from './component/todo.js';

function App() {
  return (


    < Router>
      <div> 
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/mylist' element={<Todo/>} />
    
        </Routes>
      </div>
    </Router>
 

   
  );
}

export default App;  
