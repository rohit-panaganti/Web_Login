// import React from 'react';


// const componentDidMount = ()=>{

//   fetch("http://localhost:5000/userData", {
//     method: "POST",
//     crossDomain: true,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify({
//       token,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data, "userData");
//       // if (data.status == "ok") {
//       //   alert("Registration Successful");
//       // } else {
//       //   alert("Something went wrong");
//       // }
//     });


// } 

// const UserInfo = ({ username, email }) => {
  

//   return (
//     <div style={styles.container}>
//       {componentDidMount()}
//       <h2>User Information</h2>
//       <p><strong>Username:</strong> {username}</p>
//       <p><strong>Email:</strong> {email}</p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: 'center',
//     margin: '20px auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     width: '300px',
//     backgroundColor: '#f9f9f9',
//     fontFamily: 'Arial, sans-serif',
//   },
// };

// export default UserInfo;
import React,{Component} from "react";

export default class UserDetails extends Component {
constructor(props){
  super(props);
  this.state = {
    userData:"",
  };
}
componentDidMount(){


  fetch("http://localhost:5000/userData", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token:window.localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      this.setState({userData:data.data})
      // if (data.status == "ok") {
      //   alert("Registration Successful");
      // } else {
      //   alert("Something went wrong");
      // }
    });


}

logOut=()=>{
  window.localStorage.clear();
  window.location.href="./sign-in";
  
}

render() {

  return (
      <div>
        Name<h1>{this.state.userData.fname}</h1>
        Email<h1>{this.state.userData.email}</h1>
        Role<h1>{this.state.userData.lname}</h1>
        <button onClick={this.logOut} className="btn btn-primary rounded-pill px-4 py-2">Log out</button>
      </div>
  );
}

}