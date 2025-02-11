// import React, { useState, useEffect } from 'react'

// const UseEffectEx = () => {
//     // const [count,setCount]=useState(1);
//     // useEffect(()=>{
//     //     setTimeout(()=>{
//     //         setCount(100);
//     //     },2000)
//     //     document.title="MRU";
//     // },count)


//     const[users,setUsers]=useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response=>response.json().then(data=>{
//             console.log(data);
//             setUsers(data);
//         }))
//         .catch(err=>console.log(err))
//     },[])
//     return(
//         <div className="parent">
//             {
//             users.map((user,index)=>{
//                 return (
//                     <div key={index}>
//                       <h1>{user.name}</h1>
//                       <h3>{user.email}</h3>
//                     </div>
//                   )
//             })
//         }
//         </div>
        
        
//     )
    
  
// }

// export default UseEffectEx