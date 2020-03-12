import React from 'react'
const Login =()=>{
    return(
        <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInput">Name</label>
            <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"/>
          </div>
          <div className="col-auto">
            <label className="sr-only" for="inlineFormInputGroup">Username</label>
            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
            </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-ligh">Login</button>
          </div>
        </div>
      </form>
        
    )
}
export default Login