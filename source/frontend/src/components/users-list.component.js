import React from "react"
import CRUDSerive from "../services/crud.service"
import { Link } from "react-router-dom"

class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        CRUDSerive.getAllUsers()
        .then(response => response.json())
        .then(response => {
            this.setState({
                users: response.results
            });
            console.log(response.results)
        })
        .catch(e => {
            console.log(e);
        });
    }

    delUser(id) {
        CRUDSerive.deleteUser(id)
        .then(response => {
                console.log(response.results);
                window.location.reload();
            })
            .catch(e => {
                console.log(e);
            })
    }


    render() {
        const users = this.state.users;

        return (
            <div className="col">
                <h4>Users List</h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Group</th>
                            <th>Group ID</th>
                            <th>Creating Date</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>

                    <tbody>

                        {users && users.map((user) => (

                            <tr key={user.username}>
                                <td>{user.username}</td>
                                <td>{ user.groups[0] ? user.groups[0].name : '-' }</td>
                                <td>{ user.groups[0] ? user.groups[0].id : '-' }</td>
                                <td>{user.created}</td>
                                <td>
                                    <Link to={"/edit/user/" + user.id} className={"btn btn-primary"}>
                                    Edit
                                    </Link>
                                </td>
                                <td>
                                    <button 
                                    className='btn btn-danger'
                                    onClick={id => this.delUser(user.id)}
                                    >
                                    Remove
                                    </button>
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>  

                <Link to={"/add/user/"} className={"btn btn-primary"}>
                    Add User
                </Link>
            </div>

        )
    }

}

export default UsersList;