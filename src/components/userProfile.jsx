import React from'react';
import Header from './header'
import Navigation from './navigation';

class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        } 
    }

    componentDidMount() {
        let profileId = sessionStorage.getItem("userID");
        console.log(profileId);
        let url = 'https://reqres.in/api/users?page=2';
        fetch(url).then((res)=>res.json()).then((users)=>{ 
            console.log(users.data.find(val => val.id==profileId)) ;         
            return (this.setState({user: users.data.find(val => val.id==profileId)}))
        }).catch(err=>console.log(err.errorMessage));
    }

    render() {
        return(
            <div className="twoColumns">
                <Navigation />
                <div className="column-right">
                    <Header />
                    <div className="body-content">
                        <p><img src={this.state.user.avatar}/></p>
                        <p>Name: {this.state.user.first_name}</p>
                        <p>ID: {this.state.user.id}</p>
                        <p>Last Name: {this.state.user.last_name}</p>
                        <p>Email Id: {this.state.user.email}</p>
                    </div>
                </div>                
            </div>
        )
    }
}

export default UserProfile;