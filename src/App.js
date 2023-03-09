import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CustomerList from './Component/Customer/CustomerList/CustomerList';
import CustomerForm from './Component/Customer/CustomerForm/CustomerForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CustomerList/>}/>
        <Route path='form' element={<CustomerForm/>}/>
        <Route path='form/:customerName' element={<CustomerForm/>}/>
      </Routes>
    </Router>
    );
}

export default App;
