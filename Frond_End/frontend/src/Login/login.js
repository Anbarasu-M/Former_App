import './login.css';
import Login from './loginForm';
import validate from '../Validator/login';
import {  Link,Outlet } from 'react-router-dom';
export const Former_Login = () => {
    const {formData,handleChange,handleClick,errors} = Login(validate);
    return <div>
        <form className="container col-md-4 col-sm-6 login">
            <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleChange}/>
            {errors.userName && <p className="text-danger">{errors.userName}</p>}
            <label>User Type</label>
            <select name="userType" id="userType" onChange={handleChange} className='form-control'>
                    <option value="">----Select----</option>
                    <option value="former">Former</option>
                    <option value="buyer">Buyer</option>
                </select>
                {errors.userType && <p className="text-danger">{errors.userType}</p>}
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange}/>
            {errors.password && <p className="text-danger">{errors.password}</p>}
            <br/>
            <div className="text-center">
            <button type="submit" className="btn btn-primary btn-xs" onClick={handleClick}>Login</button>
            </div>
            {errors.InvalindCredentials && <p className="text-danger">{errors.InvalindCredentials}</p>}
            </div>
            <sapn>If you don't have account <Link to="/register"> Click Here</Link> to Register</sapn>
                <Outlet />
        </form>
    </div>
}



export const Buyer_Login = () => {
    return <div>
        <form className="container col-md-4 col-sm-6">
            <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control"/>
            <label>Password</label>
            
            <input type="password" className="form-control"/>
            <br/>
            <div className="text-center">
            <button type="button" className="btn btn-primary btn-xs">Login</button>
            </div>
            </div>
        </form>
    </div>
}