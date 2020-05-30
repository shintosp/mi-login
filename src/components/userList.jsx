import React, {Component} from 'react';
import Header from './header'
import Navigation from './navigation';
import Body from './body';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        let url = 'https://reqres.in/api/users?page=2';
        fetch(url).then((res)=>res.json()).then((users)=>(this.setState({users: users.data}))).catch()
    }
    render() {
        return(
            <div className="twoColumns">
                <Navigation />
                <div className="column-right">
                    <Header />
                    <Body users={this.state.users}/>
                </div>                
            </div>
        )
    }
}
export default UserList;