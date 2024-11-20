import React from "react";
import { useState } from "react";
const Form = () => {
  let [formData, setFormData] = useState({
    username: "",
    fname: "",
  });
  let handleData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit=(event)=>{
    console.log(formData);
    event.preventDefault();
    setFormData({
        username: '',
        fname: ''
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleData}
          />
        </div>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input type="text" name="fname" id="fullName" onChange={handleData} value={formData.fname} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
