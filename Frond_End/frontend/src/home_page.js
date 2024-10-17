// return <div className="Full_Page">
// <head>
//   <title>My App</title>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
//   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
// </head>
// <br></br>
// <button onClick={former_register}> Former Register</button>
// <button onClick={former_login}> Former Login</button>
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<former_register />}>
//       <Route path="blogs" element={<former_register />} />
//       <Route path="contact" element={<former_login />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
// <br></br>
// {form === "register" && <Former_Register/>}
// {form === "login" && <Former_Login/>}
// </div>

import './App.css';
import Navbar from './Navbar/navbar';
import './home.css';
import homeImage from './image/fr6.jpg';
import { Link,Outlet } from 'react-router-dom';
export const Home = ()=> {
  return <div className="Full_Page" >
    <header>
      <title>My App</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<Navbar/>
    </header>
    <body className="home_page">
    <br></br>
    <Link to="/register"> Register Here</Link>
    <Link to="/login"> Login Here</Link>
    <br></br>
    <Outlet />
    </body>
    </div>
}


// export default Home;
