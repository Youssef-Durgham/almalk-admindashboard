import React, { useState, useEffect } from 'react';
import PopupDropdown from '../../components/PopupDropdown'
import Navbar from '../../components/Navbar'
import Loader from '../../components/Loader';
function CategoriesTable() {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [name, setCatName] = useState('');
  const [loadding, setLoadding] = useState(false);


  useEffect(() => {
    setLoadding(true);
    fetch('http://ap.almalk.org:3000/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoadding(false);
      })
      .catch(error => {
        console.log('Error fetching categories:', error);
        setLoadding(false);
      });
  }, []);



  const handleDropdownOpen = (name,action) => {
    setCatName(name);
    setShowDropdown(true);
  };


  const handleDropdownClose = () => {
    setShowDropdown(false);
  };


  return (
    <>
    <Navbar />
    {loadding ? (
      <>
      <Loader />
       </>
    ):
    (
      <div className="flex-col justify-center  mb-16 items-center h-screen">
      <div className='text-3xl text-center   m-4 font-bold'> Categories List</div>
      <table className="table-auto bg-gray-800 text-white rounded-md  mx-auto w-[60%] 2xl:w-[40%] mobile:w-[90%] p-4 shadow-md">
        <thead>
          <tr>
            <th className="px-4 text-lg  py-2">Name</th>
            {/* <th className="px-4 py-2">Edit</th> */}
            <th className="px-4 text-lg  py-2">Show</th>
           
          </tr>
        </thead>
        <tbody>
          {categories.map((category,index) => (
            <tr key={index}>
              <td className="border text-lg text-center px-4 py-2">{category.name}</td>
              <td className="border text-center px-4 py-2">
                <button
                  className="bg-[#DB9E43] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDropdownOpen(`${category.name}`,'show')}
                >
                  Show
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {showDropdown && <PopupDropdown name={name} onClose={handleDropdownClose} />}
    </div>
    )
  }
    
    </>
  );
}

export default CategoriesTable;
