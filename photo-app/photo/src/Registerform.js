import { useState } from "react";


function Registerform() {
    const [data, setData] = useState({
        username: " ",
        password: " ",
        confirmpassword: " ",
    })

    function onChangeUserData(event) {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <h3>user form</h3>
            <label>Email ID:</label>
            <input value={data.emailId} name="emailId" onChange={onChangeUserData}></input>
            <label>passWord:</label>
            <input value={data.password} name="password" tyepe="password" onChange={onChangeUserData}></input>
            <label>confirm passWord:</label>
            <input value={data.confirmpassword} type="password" name="confirmpassword" onChange={onChangeUserData}></input>
            {
                data.password !== data.confirmpassword ? <div> Password not match</div>
                    : null}
        </div>
    )

}
//     const { username, password, confirmpassword } = data;

//     const changeHandler = (e) => {
//         setData(e.target.value);
//     }

//     const submitHandler = (e) => {

//         console.log(data);
//     }
//     return (
//         <div>
//             <center>
//                 <form onSubmit={submitHandler}  >
//                     <input type="text" name="username" value={username} placeholder="username" onChange={changeHandler} /><br />
//                     <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler} /><br />
//                     <input type="password" name="confirmpassword" value={confirmpassword} placeholder="confirPassword" onChange={changeHandler} />

//                     <div>
//                         <input type="submit"  />
//                     </div>

//                 </form>
//             </center>
//         </div>
//     )
// }
 export default Registerform;