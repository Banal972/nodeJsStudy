"use strict";

const User = require("../../models/User");

const output = {
    home : function(req,res){
        res.render("home/index");
    },
    login : function(req,res){
        res.render("home/login");   
    },
    register : function(req,res){
        res.render("home/register");   
    },
}

const process = {
    login : function(req,res){

        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        
    },
}

module.exports = {
    output,
    process
}  