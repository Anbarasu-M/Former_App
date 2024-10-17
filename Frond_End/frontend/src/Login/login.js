import './login.css';
import Login from './loginForm';
import validate from '../Validator/login';
export const Former_Login = () => {
    const {formData,handleChange,handleClick,errors} = Login(validate);
    return <div>
        <form className="container col-md-4 col-sm-6 login">
            <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleChange}/>
            {errors.userName && <p className="text-danger">{errors.userName}</p>}
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange}/>
            {errors.password && <p className="text-danger">{errors.password}</p>}
            <br/>
            <div className="text-center">
            <button type="submit" className="btn btn-primary btn-xs" onClick={handleClick}>Login</button>
            </div>
            </div>
            <br/>
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