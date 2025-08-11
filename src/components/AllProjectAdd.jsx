import React from 'react';

const AllProjectAdd = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {user.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg">
          <img src={item.image} alt={item.ProductName} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{item.ProductName}</h2>
            <p className="text-sm text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: item.paragraph }}></p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjectAdd;
