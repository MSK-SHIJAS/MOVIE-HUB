import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

function Sign(){  
return (
<>
<div className='A'>
<form>
    SIGNUP
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='abc@gmail.com' />
  </div>
  <div class="mb-3">  
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='abcdef' />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='abc123_@' />
  </div>
  <button type="submit" class="btn btn-primary">SIGNUP</button>

</form>
</div>
</>
);
};

export default  Sign;