import React from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom'

const Body = function(props) {
    const history = useHistory();
    function handleClick(id) {
        sessionStorage.setItem("userID",id);
        //return <Redirect from="/UserList" to="/UserProfile" />
        history.push("/UserProfile")
    }
    return(
        <div className="body-content">
            <h1>Page Title</h1>
            <ul className="user-tab">
                <li><Link to="/">Users List</Link></li>
                <li><Link to="/UserProfile">User Profile</Link></li>
            </ul>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.map((val) => (
                            <tr key={val.id} onClick={(event)=>{event.preventDefault(); 
                            handleClick(val.id)}} >
                                <td>{val.first_name}</td>
                                <td>{val.id}</td>
                                <td>{val.last_name}</td>
                                <td>{val.email}</td>
                            </tr>
                            // <UserRow val={val} />     
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Body;