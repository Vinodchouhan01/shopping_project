import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const totalAmount = searchParams.get('totalAmount');
  
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    amount : totalAmount ,
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, address, amount } = formData;
  
      const response = await axios.post('http://localhost:4000/api/v1/info', {
        name,
        email,
        address,
        amount
      });
      
      console.log('Form submitted successfully:', response.data);
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error(error.response.data.message);
      console.error(error);
      toast.error('Error placing order!');
    }
  
    console.log('Form submitted:', formData);
  };
  

  return (
    <div className="bg-white rounded-md shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
             Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
          </label>
        </div>
        <div>
          <label className="block mb-1">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
          </label>
        </div>
        {/* Add more form fields for address, city, state, zip, payment method, etc. */}
        <div>
          <label className="block mb-1">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-md p-2 w-full"
            />
          </label>
        </div>

        <div>
  <label className="block mb-1">
    Amount:
    <input
      type="text"
      name="amount"
      value={formData.amount}
      readOnly 
      className="border rounded-md p-2 w-full"
    />
  </label>
</div>

        {/* Add more fields as needed */}
        <div>
          <button  type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
