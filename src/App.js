// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Navbar from  "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// class App extends React.Component{
//   render(){
//     return(
//       <div className="app">
//         <Navbar/>
//         <Main></Main>
//         <div className="side">
//           <Sidebar1/>
//           <Sidebar2/>
//         </div>
//         <Footer/>      
//       </div>
//     )
//     }
// };
// export default App();
// import './global.css';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Main></Main>
//       <div className="side">
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


// ! props
// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1
//         username="Varun"
//         age={20}
//         hobbies={["playing ","reading"]}
//         address={{city:"Hyd",area:"miyapur"}}
//         isMarried={false}
//         sendFun={function(){alert("Hi Varun❤")}}
//         />
//       </div>
//     )
//   }
// }
// import React from 'react'
// const FBCPropex1 = (props) => {
//     if(props.isLoggedIn == true) {
//         return(
//         <div>
//             <h1>Welcome (props.username)</h1>
//             {
//             props.profiles.map(profile=>{
//                 return 
//                 <li>{profile} </li>
//                 })
//             }
//         </div>
//         )
//     }else{
//         return <h1>Please Login first!</h1>
//     }    
// }
// export default FBCPropex1
// import React, {Component} from 'react'
// import PropsChildren from './propexample/PropsChildren';
// import SubChildProps from './propexample/SubChildProps';

// const App = () => {
//     return (
//       <div>
//         <PropsChildren username="Varun" company="Google">
//         <h1>This data is passing as a props to child components</h1>
//         <SubChildProps/>
//         </PropsChildren>
//       </div>
//     )
//   }
//  export default App;
import React from 'react'
//import UseEffectEx from './hookexample/UseEffectEx'
import RefExample from './hookexample/RefExample'

const App = () => {
  return (
    <div>
      <RefExample/>
    </div>
  )
}

export default App