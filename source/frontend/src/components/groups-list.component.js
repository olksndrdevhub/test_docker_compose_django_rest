import React from "react";
import CRUDSerive from "../services/crud.service";
import { Switch, Route, Link } from "react-router-dom";







class GroupsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: [],
        };
    }

    componentDidMount() {
        this.getGroups();
    }

    getGroups() {
        CRUDSerive.getAllGroups()
        .then(response => response.json())
        .then(response => {
            this.setState({
                groups: response.results
            });
            console.log(response.results)
        })
        .catch(e => {
            console.log(e);
        });
    }

    checkIfGroupHaveUsers(group) {
        if(group.is_user_binded) {
            return true
        } else {
            return false
        };
    }

    delGroup(id, group) {
        if(this.checkIfGroupHaveUsers(group)) {
            let message = "Users are linked to this group. You can't delete it until you unlink them!"
            alert(message);
        } else {
            CRUDSerive.deleteGroup(id)
            .then(response => {
                    console.log(response.results);
                    window.location.reload();
                })
                .catch(e => {
                    console.log(e);
                })
            alert('deleted!')
        }
        
    }



    render() {
        const groups = this.state.groups;

        return (
            <div className="col">
                <h4>Group List</h4>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {groups && groups.map((group) => (
                            <tr key={group.id}>
                                <td>{group.id}</td>
                                <td>{group.name}</td>
                                <td>{group.description}</td>
                                <td>
                                    <Link to={"/edit/group/" + group.id} className={"btn btn-primary"}>
                                    Edit
                                    </Link>
                                </td>
                                <td>
                                    <button 
                                    className='btn btn-danger'
                                    onClick={id => this.delGroup(group.id, group)}
                                    >
                                    Remove
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>    

                <Link to={"/add/group/"} className={"btn btn-primary"}>
                    Add Group
                </Link>  
            </div>
        )
    }

}



export default GroupsList;