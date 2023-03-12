import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CustomerList from './Component/Customer/CustomerList/CustomerList';
import CustomerForm from './Component/Customer/CustomerForm/CustomerForm';
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SignIn/SignIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CustomerList/>}/>
        <Route path='form' element={<CustomerForm/>}/>
        <Route path='form/:customerName' element={<CustomerForm/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Routes>
    </Router>
    );
}

export default App;
