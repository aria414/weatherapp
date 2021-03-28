import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form">
            <h2>Enter a city or a zip</h2>
            <input 
                type="text"
                name="searchterm" 
                value={props.formData.searchterm} 
                 onChange={props.handleChange}
            />
        <input type="submit" value="submit" />
      </form>
    )
}

export default Form