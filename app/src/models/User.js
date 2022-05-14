"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id,password} = UserStorage.getUserInfo(body.id);
        
        if (id) {
            if (id === body.id && password === body.password){
                return {succress : true};
            }
            return {succress : false, msg : '비밀번호가 틀렸습니다.'};
        }
        return {succress : false, msg : '존재하지 않는 아이디 입니다'};

    }

};


module.exports = User;
