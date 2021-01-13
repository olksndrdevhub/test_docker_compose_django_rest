import React from "react"
import CRUDSerive from "../services/crud.service"



export class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            groups: [],
            group_id: '',

            group_options: [],

        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        let initialGroups = [];
        CRUDSerive.getAllGroups()
        .then(response => {
            return response.json();
        })
        .then(data => {
            initialGroups = data.results.map((group) =>{
                return group
            });
            this.setState({
                group_options: initialGroups,
                groups: [initialGroups[3]],
                group_id: initialGroups[3].id
            });
        });
    }

    handleChangeUsername(event) {
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
        console.log(group)
        this.setState({groups: group});
        this.setState({group_id:group.id})
        console.log(this.state)

      }
    
    handleSubmit(event) {
        console.log('Дані, що було надіслано: ' + this.state.username + this.state.groups);
        event.preventDefault();
        const data = this.state
        CRUDSerive.createUser(data)
        this.props.history.push('/')
        window.location.reload()
    }





    render() {
        let group_options = this.state.group_options;
        console.log(group_options);
        let optionItems = group_options.map((option) =>
                <option value={option.id} key={option.name}>{option.name}</option>
            );

        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <label>
                        Username:
                    </label>
                    <input className={"form-control mb-3"} type="text" onChange={this.handleChangeUsername} />

                    <label>
                        Group:
                    </label>
                    <select className={"form-control mb-3"} onChange={this.handleChangeGroup} value={this.state.group_id}>
                        <option key={this.state.username} value={'-1'}>-</option>
                        {optionItems}
                    </select>
                    
                    <input type="submit" className={"form-control btn btn-success mt-5"} value="Add" />
                </form>
            </div>
            

        )
    }


}


export class AddGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',

        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        console.log('Дані, що було надіслано: ' + this.state.name + this.state.description);
        event.preventDefault();
        const data = this.state
        CRUDSerive.createGroup(data)
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
                    <input className={"form-control mb-3"} type="text" onChange={this.handleChangeName} />

                    <label>
                        Description:
                    </label>
                    <input className={"form-control mb-3"} type="text" onChange={this.handleChangeDesc} />

                    
                    <input type="submit" className={"form-control btn btn-success mt-5"} value="Add" />
                </form>
            </div>
            

        )
    }


}