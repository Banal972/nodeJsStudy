"use strict";

const fs = require("fs").promises;

class UserStorage {

    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id,password,name]
        const userInfo = usersKeys.reduce(function(newUser, info){
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static getUser(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce(function(newUsers, field){
            if  (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){

        return fs
            .readFile("./src/databases/users.json")
            .then(function(data){
                return UserStorage.#getUserInfo(data, id);
            })
            .catch(function(err){console.error});
        
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {succress : true};
    }

}

module.exports = UserStorage;