import React from 'react'
import CustomerForm from '../../Component/Customer/CustomerForm/CustomerForm'
import CustomerList from '../../Component/Customer/CustomerList/CustomerList'
import Navbar from '../../Component/Navbar/Navbar'

const Customer = () => {
  return (
<><Navbar/>
<CustomerList/>
<CustomerForm/>    </>)
}

export default Customer