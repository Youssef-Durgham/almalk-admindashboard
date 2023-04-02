import React, { useState, useEffect } from 'react';
import PopupDropdown from '../../components/PopupDropdown'
import Navbar from '../../components/Navbar'
import Loader from '../../components/Loader';
import Cookies from "js-cookie";

function CategoriesTable() {
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [name, setCatName] = useState('');
  const [loadding, setLoadding] = useState(false);
  const userToken = Cookies.get("token");
  const [editCategory, setEditCategory] = useState(null);
  const [clickedDelete, setClickedDelete] = useState(null);
  const [item, setItem] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");


  const postData = async () => {
    try {
      setLoadding(true);
      const res = await fetch("http://ap.almalk.org:3000/categories");

      console.log("Response status:", res.status);
      console.log("Response headers:", res.headers);
      const responseData = await res.json();
      console.log("Response body:", responseData);


      setCategories(responseData);
      setLoadding(false);
      setLoadding(false)

      if (res.status === 401) {
        console.log("run 2 401")
        setLoadding(false)
      }

    } catch (error) {
      console.error("error", error);
      console.log("run 3")
    }
  };

  
  useEffect(() => {
    postData();
  }, []);


  const handleDropdownOpen = (name) => {
    setCatName(name);
    setShowDropdown(true);
  };


  const handleDropdownClose = () => {
    setShowDropdown(false);
  };


  const handleEdit = (category) => {
    setEditCategory(category);
    setEditCategoryName(category.name);
  };


  const handleEditSave = () => {
    fetch(`http://ap.almalk.org:3000/category/${editCategory._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "x-access-token": userToken.startsWith("Bearer")
          ? userToken.replace("Bearer ", "")
          : userToken,
      },
      body: JSON.stringify({ name: editCategoryName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        postData();
        setEditCategory(null);
        setEditCategoryName("");
      });
  };


  const handleEditCancel = () => {
    setEditCategory(null);
    setEditCategoryName("");
  };





  const handleClickeDelete = (category) => {
    setClickedDelete(true);
    setItem(category);
  };


  const handleDelete = () => {

    fetch(`http://ap.almalk.org:3000/category/${item._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          "x-access-token": userToken.startsWith('Bearer') ? userToken.replace('Bearer ', '') : userToken
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setClickedDelete(null)
        postData()
      });
  };



  return (
    <>
      <Navbar />
      {loadding ? (
        <>
          <Loader />
        </>
      ) :
        (
          <div className="flex-col justify-center  mb-16 items-center h-screen">
            <div className='text-3xl text-center   m-4 font-bold'> Categories List</div>
            <table className="table-auto bg-gray-800 text-white rounded-md  mx-auto w-[60%] 2xl:w-[40%] mobile:w-[90%] p-4 shadow-md">
              <thead>
                <tr>
                  <th className="px-4 text-lg  py-2">Name</th>
                  <th className="px-4 text-lg  py-2">Show</th>
                  <th className="px-4 text-lg  py-2">Edit</th>
                  <th className="px-4 text-lg  py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index}>
                    <td className="border text-lg text-center px-4 py-2">{category.name}</td>
                    <td className="border text-center px-4 py-2">
                      <button
                        className="bg-[#DB9E43] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDropdownOpen(`${category.name}`)}
                      >
                        Show
                      </button>
                    </td>
                    <td className="border text-center px-4 py-2">
                      <button
                        className="bg-white hover:bg-[#ded8d8] text-black font-bold py-2 px-4 rounded"
                        onClick={() => handleEdit(category)}

                      >
                        Edit
                      </button>
                    </td>
                    <td className="border text-center px-4 py-2">
                      <button
                        className="bg-[#db4643] hover:bg-[#b83735] text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleClickeDelete(category)}
                      >
                        Delete
                      </button>
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>

            {showDropdown && <PopupDropdown name={name} onClose={handleDropdownClose} />}

            {editCategory && (

              <div className="fixed z-10 top-0 left-0 h-screen w-full  flex justify-center items-center">
                <div className="absolute bg-black opacity-50 inset-0"></div>
                <div className="bg-white rounded-lg w-1/3 mobile:w-[60%] z-20">
                  <div className="text-center font-bold text-lg p-4">Edit Category Name</div>
                  <div className="p-4">
                    <input
                      type="text"
                      className="border rounded-lg w-full py-2 px-3  focus:border-[#E77600] focus:shadow-md focus:outline-none"
                      value={editCategoryName}
                      onChange={(e) => setEditCategoryName(e.target.value)}
                    />
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={handleEditCancel}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleEditSave}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}


            {clickedDelete && (

              <div className="fixed z-10 top-0 left-0 h-screen w-full  flex justify-center items-center">
                <div className="absolute bg-black opacity-50 inset-0"></div>
                <div className="bg-white rounded-lg w-1/3 mobile:w-[60%] my-auto z-20">
                  <div className="p-4">
                    <h1 className='text-center font-bold text-lg p-4'>Are you sure you want to delete  <span className='text-red-500 text-xl'>{item.name} </span> Category?</h1>
                    <div className="flex justify-center mt-4">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => setClickedDelete(null)}
                      >
                        No
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDelete}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      }

    </>
  );
}

export default CategoriesTable;
