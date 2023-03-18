import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import Navbar from '../../components/Navbar'
export default function Page1() {
  const router=useRouter();
  const [formData, setFormData] = useState({})
  const [file, setFile] = useState(null)
  const [Categories, setCategories] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  function removeBearer(token) {
    // Check if the input string starts with 'Bearer '
    if (token.startsWith('Bearer ')) {
      // Remove the 'Bearer ' string from the input string and return the result
      return token.replace('Bearer ', '');
    } else {
      // If the input string doesn't start with 'Bearer ', return it as is
      return token;
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formDataWithFile = new FormData()
    formDataWithFile.append('file', file)
    formDataWithFile.append('status', 'new')
    formDataWithFile.append('isOwner', true)
    formDataWithFile.append('category', '63dd1414faf93b4b9b379a15')
    Object.keys(formData).forEach((key) => {
      formDataWithFile.append(key, formData[key])
    })
    const response = await fetch(`http://ap.almalk.org:3000/category/${selectedOption}/paid-item`, {
      method: 'POST',
      headers: {
        'x-access-token': removeBearer(Cookies.get('token'))
      },
      body: formDataWithFile,
    })
    const data = await response.json()
    console.log(data);
    if(data){
      router.push('/dashboard')
    }
  }

  const handleChange = (event) => {
    if (event.target.name === 'file') {
      setFile(event.target.files[0])
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://ap.almalk.org:3000/categories");
      const data = await response.json();
      setCategories(data);
    }

    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="bg-gray-800 p-8 rounded-lg sm:p-4 md:p-6 lg:p-8 m-6">
      <h1 className="text-3xl font-bold text-gray-200 mb-8">Form Title</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="field1" className="block text-gray-200 font-bold mb-2">title:</label>
          <input type="text" id="title" name="title" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-gray-200 font-bold mb-2">price:</label>
          <input type="text" id="price" name="price" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-gray-200 font-bold mb-2">currency:</label>
          <input type="text" id="price" name="currency" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-gray-200 font-bold mb-2">location:</label>
          <input type="text" id="price" name="location" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-gray-200 font-bold mb-2">details:</label>
          <input type="text" id="price" name="details" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-gray-200 font-bold mb-2">phone:</label>
          <input type="text" id="price" name="phone" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='mb-4'>
          <label htmlFor="field2" className="block text-gray-200 font-bold mb-2">category:</label>
        <select value={selectedOption} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleOptionChange}>
        <option value="" disabled hidden>Categories</option>
        {Categories?.map(e=>
          (<option key={e._id} value={e.name}>{e.name}</option>)
          )
        }
      </select>
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-200 font-bold mb-2">File:</label>
          <input type="file" id="file" name="images" onChange={handleChange} className="text-gray-200" />
        </div>
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
    </>
  )
}
