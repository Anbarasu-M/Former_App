import './register.css'
import Former_Rigister_Form  from './registerForm'
import validate from '../Validator/register'
export const Former_Register = () => {
    const {formData,handleChange, handleClick, errors} = Former_Rigister_Form(validate);
    return <div>
        <form className="container col-md-4 col-sm-6 Former_Register text-center">
            <div className="form-group">
            <label className="mt-2">Username</label>
            <input type="text" className="form-control" name="userName" onChange={handleChange} value={formData.userName}/>
            {errors.userName && <p className="text-danger">{errors.userName}</p>}
            <label>State</label>
            <input type="text" className="form-control" name="state" onChange={handleChange} value={formData.state}/>
            {errors.state && <p className="text-danger">{errors.state}</p>}
            <label>City</label>
            <input type="text" className="form-control" name="city" onChange={handleChange} value={formData.city}/>
            {errors.city && <p className="text-danger">{errors.city}</p>}
            <label>Place</label>
            <input type="text" className="form-control" name="place" onChange={handleChange} value={formData.place}/>
            {errors.place && <p className="text-danger">{errors.place}</p>}
            <label>Phone No</label>
            <input type="text" className="form-control" name="phoneNo" onChange={handleChange} value={formData.phoneNo}/>
            {errors.phoneNo && <p className="text-danger">{errors.phoneNo}</p>}
            <label>Password</label>    
            <input type="password" className="form-control" name='password' onChange={handleChange} value={formData.password}/>
            {errors.password && <p className="text-danger">{errors.password}</p>}
            <label>Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
            <br></br>
            <div className="text-center">
            <button type="submit" onClick={handleClick} className="btn btn-primary btn-xs">Login</button>
            </div>
            <br></br>
            </div>
        </form>
    </div>
}


export const Buyer_Register = () => {
    return <div className="Buyer_Register">
        <form className="container col-md-4 col-sm-6">
            <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control"/>
            <label>Password</label>    
            <input type="password" className="form-control"/>
            <label>Confirm Password</label>
            <input type="password" className="form-control"/>
            <br></br>
            <div className="text-center">
            <button type="button" className="btn btn-primary btn-xs">Login</button>
            </div>
            </div>
        </form>
    </div>
}