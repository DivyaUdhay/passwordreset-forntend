import React from 'react'
import { Link } from "react-router-dom";


function Passwordreset() {
  return (
    <div className='container'>
    <div className='col'>
      <div className='row'>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
            <p className='form-label'> Forget Password?</p>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>

          <div class="mb-3">
            <p class="form-label">Don't have account,<Link to='/signin'>Click here</Link> to SignUP</p>

          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Passwordreset