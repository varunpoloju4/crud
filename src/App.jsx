// import React from 'react'
// import Navbar from './components/Navbar'
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import Dashboard from './Pages/Dashboard';
// import Classroom from './Pages/Classroom';
// import Assessment from './Pages/Assessment';
// import Store from './Pages/Store';
// import Calender from './Pages/Calender';
// import News from './Pages/News';
// import Blog from './Pages/Blog';
// import PageNotFound from './Pages/PageNotFound';
// import MyAccount from './Pages/MyAccount';
// import Profile from './Pages/Profile';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Classroom/>}/>
//             <Route path='/assessment' element={<Assessment/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile'element={<Profile/>}>
//             <Route path='/profile/myaccount' element={<MyAccount/>}/>
//             <Route path='/profile/myuseeting' element={<MyAccount/>}/>
//             </Route>
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './crudcomponents/Home';
import Create from './crudcomponents/Create';
import Edit from './crudcomponents/Edit';
import {ToastContainer} from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App