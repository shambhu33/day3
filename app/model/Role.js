const uuid = require('uuid').v4;

module.exports = class Role{
    static #userList = [
        {
            id: 1,
            name: 'John Doe1',
            age: 20
        },
        {
            id: 2,
            name: 'Jane Doe2',
            age: 21
        }
    ];

    constructor(obj){
        obj.id = uuid();
        this.obj = obj;
    }

    save(){
        Role.#userList.push(this.obj);
    }

    static findAll(){
        return Role.#userList;
    }
    
    static deleteById(id){
        Role.#userList = Role.#userList.filter(user => user.id != id);
    }
}