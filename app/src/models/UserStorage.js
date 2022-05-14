"use strict";

class UserStorage {
    static #users = {
        id : ["test","test2","test3"],
        password : ['1234','1234','1234'],
        name : ['테스트','테스트2','테스트3']
    };

    static getUser(...fields){
        const users = this.#users;
        const newUsers = fields.reduce(function(newUsers, field){
            if  (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce(function(newUser, info){
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        console.log(users);
    }

}

module.exports = UserStorage;