import React, { useState } from 'react'

const DropDown = () => {

  const [country, setCountry] = useState('');
  const [statess, setState] = useState('');
  const [cities, setCities] = useState('');

  const data = {
    india: {
      states: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
        TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
        Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
        WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
        Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
        Haryana: ["Gurugram", "Faridabad", "Panipat"],
        Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
        UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
        Bihar: ["Patna", "Gaya", "Bhagalpur"],
        Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
      },
    },
    usa: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        NewYork: ["New York City", "Buffalo", "Rochester"],
      },
    },
    germany: {
      states: {
        Bavaria: ["Munich", "Nuremberg", "Augsburg"],
        Berlin: ["Berlin", "Potsdam", "Cottbus"],
      },
    },
  };

  let countries = Object.keys(data);
  let state = [];
  let city = [];

  if (country) {
    state = Object.keys(data[country].states);
  }

  if (country && state) {
    city = data[country].states[statess];
  }

  return (
    <div className='flex justify-center items-center flex-col mx-auto mt-10 p-10 gap-6 bg-white shadow-xl rounded-2xl w-[90%] max-w-md'>
      
      <h1 className='text-2xl font-bold text-gray-700 mb-4'>Select Location</h1>

      <select
        className='w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option disabled value="">Select Country</option>
        {countries.map((ct, idx) => (
          <option key={idx} value={ct}>{ct}</option>
        ))}
      </select>
      <p className='text-sm text-gray-600'>Your Country is: <span className='font-medium'>{country}</span></p>

      <select
        className='w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200'
        value={statess}
        onChange={(e) => setState(e.target.value)}
      >
        <option disabled value="">Select State</option>
        {state.map((ct, idx) => (
          <option key={idx} value={ct}>{ct}</option>
        ))}
      </select>
      <p className='text-sm text-gray-600'>Your State is: <span className='font-medium'>{statess}</span></p>

      <select
        className='w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200'
        value={cities}
        onChange={(e) => setCities(e.target.value)}
      >
        <option disabled value="">Select City</option>
        {city && city.map((ct, idx) => (
          <option key={idx} value={ct}>{ct}</option>
        ))}
      </select>
      <p className='text-sm text-gray-600'>Your City is: <span className='font-medium'>{cities}</span></p>
    </div>
  );
}

export default DropDown;
