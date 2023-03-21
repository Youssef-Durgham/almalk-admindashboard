import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Navbar from '../../components/Navbar'
import { useRouter } from "next/router";

export default function AddRequiredField() {
  const [name, setName] = useState("");
  const [requiredFields, setRequiredFields] = useState([]);
  const [errors, setErrors] = useState([]);
  const userToken = Cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    if(!userToken){
      router.push('/')
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddFieldClick = () => {
    setRequiredFields([...requiredFields, ""]);
  };

  const handleFieldChange = (event, index) => {
    const newRequiredFields = [...requiredFields];
    newRequiredFields[index] = event.target.value;
    setRequiredFields(newRequiredFields);
  };

  const handleRemoveFieldClick = (indexToRemove) => {
    const newRequiredFields = requiredFields.filter(
      (_, index) => index !== indexToRemove
    );
    setRequiredFields(newRequiredFields);
    const newErrors = errors.filter((_, index) => index !== indexToRemove);
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = [];
    if (name.trim() === "") {
      newErrors.push("Name is required");
    }
    const fieldsWithValues = requiredFields.filter((field) => field.trim() !== "");
    if (fieldsWithValues.length === 0) {
      newErrors.push("At least one required field is required");
    }
    setErrors(newErrors);
    if (newErrors.length === 0) {

      const data = {
        name,
        fieldName: fieldsWithValues,
      };

      const postData = async () => {

        try {
            const res = await fetch("http://ap.almalk.org:3000/category/required-fields", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "x-access-token": JSON.stringify(userToken),
                },
                body: JSON.stringify(data),
            });


            // const responseData = await res.json();
      
            if (res.status === 401) {
              console.log("run 2 401")
            }
            router.push('/dashboard/categories')
          } catch (error) {
            console.error("error", error);
            console.log("run 3")
          }
    };

    postData();
    }
  };

  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit} className="max-w-md my-[100px] mobile:w-[90%] border-1 bg-white p-10 shadow-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-900 font-bold mb-2" htmlFor="name">
          Category Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="shadow appearance-none py-3 px-3 text-gray-700 leading-tight  focus:shadow-outline   border w-full  border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
        />
        {errors.includes("Name is required") && (
          <p className="text-red-500 text-xs italic">Name is required</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-900 font-bold mb-2" htmlFor="requiredFields">
          Required Fields:
        </label>
        {requiredFields.map((field, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={field}
              onChange={(event) => handleFieldChange(event, index)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline border-gray-500 p-3  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
            />
            {errors[index] && (
              <p className="text-red-500 text-xs italic ml-2">{errors[index]}</p>
            )}
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={() => handleRemoveFieldClick(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-full text-gray-900 font-bold"
          onClick={handleAddFieldClick}
        >
          Add Field
        </button>
        {errors.includes("At least one required field is required") && (
      <p className="text-red-500 text-xs italic">At least one required field is required</p>
    )}
  </div>
  <button
    type="submit"
    className="bg-[#DB9E43] hover:bg-[#c98e37]  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
  >
    Add Category
  </button>
</form>
</>
  )
}
