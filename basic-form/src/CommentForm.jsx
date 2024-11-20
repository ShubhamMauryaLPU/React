import { useState } from "react";
import {useFormik} from "formik";
export default function CommentForm({addNewComment}){
    let [formData,setFormData]=useState({
        username: "",
        remarks: "",
        rating : 5
    });
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{
                ...currData,
                [event.target.name]:event.target.value,
            }
        });
        
    }
    let onSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        setFormData({
            username: "",
            rating: 5,
            remarks:"",
        });

    }
    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={onSubmit}>
            <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} name="username"/>
            <br/>
            <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating"/>
            <br/>
            <textarea placeholder="Comments" value={formData.remarks} onChange={handleInputChange} name="remarks"></textarea>
            <br/>
            <button>Submit</button>
            </form>
        </div>
    );
}
// import { useState } from "react";
// import { useFormik } from "formik";

// export default function CommentForm({ addNewComment }) {
//   const validate = values => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = 'Required';
//     }
//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       rating: 5,
//       remarks: ''
//     },
//     validate,
//     onSubmit: values => {
//       console.log(values);
//       addNewComment(values);
//       formik.resetForm();
//     }
//   });

//   return (
//     <div>
//       <h4>Give a comment</h4>
//       <form onSubmit={formik.handleSubmit}>
//         <input 
//           placeholder="username" 
//           type="text" 
//           value={formik.values.username} 
//           onChange={formik.handleChange} 
//           name="username"
//         />
//         {formik.errors.username ? <div>{formik.errors.username}</div> : null}
//         <br />
//         <input 
//           placeholder="rating" 
//           type="number" 
//           min={1} 
//           max={5} 
//           value={formik.values.rating} 
//           onChange={formik.handleChange} 
//           name="rating"
//         />
//         <br />
//         <textarea 
//           placeholder="Comments" 
//           value={formik.values.remarks} 
//           onChange={formik.handleChange} 
//           name="remarks"
//         ></textarea>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
