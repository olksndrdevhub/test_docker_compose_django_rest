


class CRUDSerive {

    getAllUsers() {
        return fetch('http://127.0.0.1:8000/api/users/');
    }

    getAllGroups() {
        return fetch('http://127.0.0.1:8000/api/groups/');
    }

    getUser(id) {
        return fetch(`http://127.0.0.1:8000/api/users/${id}`, {
        });
    }

    getGroup(id) {
        return fetch(`http://127.0.0.1:8000/api/groups/${id}`, {
        });
    }

    deleteUser(id) {
        return fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            method: 'delete'
        });
    }

    deleteGroup(id) {
        return fetch(`http://127.0.0.1:8000/api/groups/${id}`, {
            method: 'delete'
        });
    }

    createUser(data) {
        return fetch('http://127.0.0.1:8000/api/users/', {
            method: 'post', body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    
    createGroup(data) {
        return fetch('http://127.0.0.1:8000/api/groups/', {
            method: 'post', body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    updateUser(id, data) {
        return fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
            method: 'put', body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }            
        });
    }

    updateGroup(id, data) {
        return fetch(`http://127.0.0.1:8000/api/groups/${id}/`, {
            method: 'put', body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    

}

export default new CRUDSerive;