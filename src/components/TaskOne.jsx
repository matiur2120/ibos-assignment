import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const [users, setusers] = useState([
    {
      id: uuidv4(),
      name: "Abdul Kader",
      email: "abdul@gmail.com",
    },
    {
      id: uuidv4(),
      name: "Mostakim Billa",
      email: "mostakim@gmail.com",
    },
    {
      id: uuidv4(),
      name: "Habibur Rahman",
      email: "habib@gmail.com",
    },
    {
      id: uuidv4(),
      name: "Kasem Ali",
      email: "alikasem@gmail.com",
    },
  ]);

  const handleSubmit = (event) => {
    console.log("hi");
    event.preventDefault();
    const { isValid, errors } = validate();
    if (isValid) {
      setusers([...users, { id: uuidv4(), name: name, email: email }]);
      setName("");
      setEmail("");
      setErrors("");
    } else {
      setErrors(errors);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const deleteIteam = (deleteId) => {
    const newUsers = users.filter((user) => {
      return deleteId !== user.id;
    });
    setusers(newUsers);
  };
  console.log(users);
  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is empty!";
    }
    if (!email) {
      errors.email = "Email is Empty";
    }
    const isDuplicate = users.find((user) => {
      return user.email === email;
    });
    if (isDuplicate) {
      errors.email = "Email is already exists";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div className='mx-4'>
      <form className='mb-8 mt-4' action='' onSubmit={handleSubmit}>
        <div className='flex'>
          <div className='flex flex-col mr-3'>
            <label
              className='block pl-1 text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              id='name'
              value={name}
              name='name'
              placeholder='Enter name'
              type='text'
              onChange={handleName}
              className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.name && (
              <p className='text-xs -mt-2 text-red-700'>{errors.name}</p>
            )}
          </div>
          <div className='flex flex-col mr-3'>
            <label
              className='block pl-1 text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              value={email}
              placeholder='Enter email'
              type='email'
              onChange={handleEmail}
              className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            />
            {errors.email && (
              <p className='text-xs -mt-2 text-red-700'>{errors.email}</p>
            )}
          </div>
          <div className='flex flex-col justify-center'>
            <button
              disabled={!name || !email}
              className='bg-transparent text-gray-700 font-semibold hover:text-gray-900 rounded py-1  px-8 border border-gray-500 focus:outline-none mt-4'
              type='submit'
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <div className='flex justify-center'>
        <table className='table w-full table-fixed text-center border-collapse border border-gray-800'>
          <thead>
            <tr>
              <th className='border border-gray-600'>Name</th>
              <th className='border border-gray-600'>Email</th>
              <th className='border border-gray-600'>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className='border border-gray-600'>{user.name}</td>
                <td className='border border-gray-600'>{user.email}</td>
                <td className='border border-gray-600'>
                  <a
                    href='#'
                    className='text-gray-700 font-semibold hover:text-red-600'
                    onClick={() => deleteIteam(user.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskOne;
