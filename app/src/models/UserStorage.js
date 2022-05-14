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

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);

        if(isAll) return users;

        const newUsers = fields.reduce(function(newUsers, field){
            if  (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUser(isAll, ...fields){
        return fs
            .readFile("./src/databases/users.json")
            .then(function(data){
                return UserStorage.#getUsers(data, isAll, fields);
            })
            .catch(function(err){console.error});
    }

    static getUserInfo(id){

        return fs
            .readFile("./src/databases/users.json")
            .then(function(data){
                return UserStorage.#getUserInfo(data, id);
            })
            .catch(function(err){console.error});
        
    }

    static async save(userInfo){

        const users = await UserStorage.getUser(true);
        
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디 입니다";
        }

        if(!users.id.includes(userInfo.id)){
            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.password.push(userInfo.password);
            fs.writeFile("./src/databases/users.json", JSON.stringify(users));
            return { succress : true }
        }
        
    }

}

module.exports = UserStorage;