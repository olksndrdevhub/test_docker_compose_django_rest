import React from "react"

import CRUDSerive from "../services/crud.service"



export class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = this.props.match.params.id
        
        this.state = {
            user_id: '',
            username: '',
            groups: [],
            group_id: '',
            created: '',
            group_options: [],
            is_user_binded: true
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.GetUser(this.user_id)

        let initialGroups = [];
        CRUDSerive.getAllGroups()
        .then(response => {
            return response.json();
        })
        .then(data => {
            initialGroups = data.results.map((group) => {
                return group
            });
            console.log(initialGroups);
            this.setState({
                group_options: initialGroups,
            });
        });
    }


    GetUser(id) {
        CRUDSerive.getUser(id)
        .then(response => response.json())
        .then(response => {
            if (response.groups[0]) {
                this.setState({
                    user_id: response.id,
                    created: response.created,
                    username: response.username,
                    groups: response.groups,
                    group_id: response.groups[0].id,
                    is_user_binded: response.groups[0].is_user_binded,
                })
                console.log(this.state.groups[0].is_user_binded)
                console.log(response)
                console.log(response.groups[0].id)
                console.log(this.state.groups[0].id)
            } else {
                this.setState({
                    user_id: response.id,
                    created: response.created,
                    username: response.username,
                    is_user_binded: false
                    // groups: response.groups,
                    // group_id: response.groups[0].id
                })
                console.log(response)
            }
            
        })
    }

    handleChangeUsername(event) {
        console.log(event.target.value)
        this.setState({username: event.target.value});
        console.log(this.state)
      }

    handleChangeGroup(event) {
        if(event.target.value !== '-1') {
            var group = this.state.group_options.filter(function(e) {
                return e['id'] == event.target.value;
              });
              
        } else if (event.target.value == '-1') {
            var group = []
        }
        
        console.log(group);
        this.setState({groups: group});
        
        this.setState({group_id:group.id})
        console.log(this.state)
        console.log(this.state.groups)
      }
    
    handleSubmit(event) {
        console.log('Дані, що було надіслано: ' + this.state.user_id + this.state.username + this.state.groups);
        event.preventDefault();
        const data = this.state
        CRUDSerive.updateUser(this.state.user_id, data)
        this.props.history.push('/')
        window.location.reload()
    }
    
    




    render() {

        let group_options = this.state.group_options;
        console.log(this.state.groups)
        let optionItems = group_options.map((option) =>
                <option value={option.id} key={option.name}>{option.name}</option>
            );

        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Username:
                    </label>
                    <input className={"form-control mb-3"} type="text" value={this.state.username} onChange={this.handleChangeUsername} />

                    <label>
                        Group:
                    </label>
                    <select className={"form-control mb-3"} onChange={this.handleChangeGroup} value={this.state.group_id}>
                        <option key={this.state.username} value={'-1'}>-</option>
                        {optionItems}
                    </select>
                    
                    <input type="submit" className={"form-control btn btn-success mt-5"} value="Update" />
                </form>
            </div>
            

        )
    }
}





export class EditGroup extends React.Component {
    constructor(props) {
        super(props);
        this.group_id = this.props.match.params.id
        
        this.state = {
            group_id: '',
            name: '',
            description: '',
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.GetGroup(this.group_id)
    }


    GetGroup(id) {
        CRUDSerive.getGroup(id)
        .then(response => response.json())
        .then(response => {
            this.setState({
                group_id: response.id,
                name: response.name,
                description: response.description
            })
            console.log(response)
        })
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
        console.log(this.state)
      }
    handleChangeDesc(event) {
        this.setState({description: event.target.value});
        console.log(this.state)

      }
    
    handleSubmit(event) {
        console.log('Дані, що було надіслано: ' + this.state.group_id + this.state.name + this.state.description);
        event.preventDefault();
        const data = this.state
        CRUDSerive.updateGroup(this.state.group_id, data)
        this.props.history.push('/groups')
        window.location.reload()
    }
    




    render() {

        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <label>
                        Name:
                    </label>
                    <input className={"form-control mb-3"} type="text" value={this.state.name} onChange={this.handleChangeName} />

                    <label>
                        Description:
                    </label>
                    <input className={"form-control mb-3"} type="text" value={this.state.description} onChange={this.handleChangeDesc} />
                    
                    <input type="submit" className={"form-control btn btn-success mt-5"} value="Update" />
                </form>
            </div>
            

        )
    }
}

