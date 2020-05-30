import React from 'react';
//import User from './user';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users : [
                {id: 1, name: 'A', field: 'IT', place: 'Bangalore'},
                {id: 2, name: 'B', field: 'Med', place: 'Bangalore'},
                {id: 3, name: 'C', field: 'Law', place: 'Bangalore'},
                {id: 4, name: 'D', field: 'AME', place: 'Bangalore'},
                {id: 5, name: 'E', field: 'EE', place: 'Bangalore'}
            ]
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(id) {
        
    }

    render() {
        return(
            <React.Fragment>
                <ul>
                    {this.state.users.map((item)=>{
                        return(
                            <li key={item.id}>
                                id: {item.id}, 
                                name: {item.name}, 
                                field: {item.field}, 
                                place: {item.place},
                                <button onClick={this.handleEdit(item.id)}>Edit</button>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    {
                    }
                </div>
            </React.Fragment>
        );
    }

}

export default Users;