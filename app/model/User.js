const uuid = require('uuid').v4;

module.exports = class User{
    static #userList = [
        {
            id: 1,
            name: 'John Doe',
            age: 20
        },
        {
            id: 2,
            name: 'Jane Doe',
            age: 21
        }
    ];

    constructor(obj){
        obj.id = uuid();
        this.obj = obj;
    }

    save(){
        User.#userList.push(this.obj);
    }

    static findAll(){
        return User.#userList;
    }
    
    static deleteById(id){
        User.#userList = User.#userList.filter(user => user.id != id);
    }
}