import { useState } from "react";

export default function Form(props) {
  /** TODO: Add state fields in formData */
  const [formData, setFormData] = useState({
    review: '',
    username: '',
    email: ''
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const data = type === "checkbox" ? checked : value
    setFormData({
      ...formData,
      [name]: data
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <!-- Radio inputs go here --> */}
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <!-- checkboxes go here --> */}
      </div>
      <label
        >What else have you got to say about your rubber duck?<textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        ></textarea></label
      ><label
        >Put your name here (if you feel like it):<input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange} /></label
      ><label
        >Leave us your email pretty please??<input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} /></label
      ><input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}