import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function PopupDropdown({ name, onClose }) {
  const [list, setList] = useState([]);
  const [valueField, setValueField] = useState(null);
  const [addfield, setAddField] = useState(false);
  const [errorField, setErrorField] = useState(null);
  const [rerender, setRerender] = useState(null)
  const [loadding, setLoadding] = useState(false)
  const userToken = Cookies.get("token");
  const router = useRouter()

  const postData = async () => {

    try {
      setLoadding(true);
        const res = await fetch("http://ap.almalk.org:3000/category/required-fields", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-access-token": JSON.stringify(userToken),
            },
            body: JSON.stringify({ "name": name }),
        });

        console.log("Response status:", res.status);
        console.log("Response headers:", res.headers);
        const responseData = await res.json();
        console.log("Response body:", responseData);
        setList(responseData.requiredFields[0].fieldName);
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
    if(!userToken){
      router.push('/')
    }
    postData();
  }, [name]);






  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const newList = [...list];
      fetch(`http://ap.almalk.org:3000/category/${name}/required-fields`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            "x-access-token": JSON.stringify(userToken)
          },
          body: JSON.stringify({ fieldName: list[index] })
        })
        .then(response => response.json())
        .then(data => {
          postData();
        });
    }
  };



  const handleSave = () => {
    if (valueField == "") {
      setErrorField("Please Enter A Value")
    } else {

      fetch(`http://ap.almalk.org:3000/category/${name}/required-fields`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "x-access-token": JSON.stringify(userToken)
          },
          body: JSON.stringify({ fieldName: valueField })
        })
        .then(response => response.json())
        .then(data => {
          postData();
          setAddField(null);
        });
    }
  };



  const handlChange = (value) => {
    setValueField(value);
  };


  return (
    <div className="fixed z-10 inset-0  overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        {loadding ? (<>
          <Loader />
        </>) : (
          <div
            className="inline-block align-bottom  w-[50%] 2xl:w-[30%]  mobile:w-[90%] bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-lg font-bold mb-2 leading-6 text-gray-900">{name}</h3>
              <button onClick={() => {
                setAddField(true)
                setValueField("")
              }} className="bg-green-700 my-2 text-white font-bold px-2 py-1 rounded mr-2">
                Add New Field
              </button>

              <div className="flex-col">


                {addfield ? (
                  <>
                    <div className="flex">
                      <input
                        type="text"
                        value={valueField}
                        placeholder="Field Name"
                        onChange={(e) => handlChange(e.target.value)}
                        className="border w-[80%] mr-2 border-gray-500 p-1 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                      />

                      <button onClick={() => setAddField(false)} className="bg-slate-700 my-2 text-white font-bold px-2 py-1 rounded mr-1">
                        Cancel
                      </button>
                      <button onClick={() => handleSave()} className="bg-green-700 my-2 text-white font-bold px-2 py-1 rounded mr-1">
                        Save
                      </button>
                    </div>
                    {errorField ? (
                      <>
                        <span className="text-red-500 text-sm ml-1 ">{errorField}</span>
                      </>
                    ) : (<></>)}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="mt-4">
                {list.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className='my-2 mx-2 px-2'>{item}</span>

                    <div className="flex">
                      <button onClick={() => handleDelete(index)} className="bg-red-500 my-2 text-white font-bold px-2 py-1 rounded">
                        Delete
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button onClick={onClose} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default PopupDropdown;