"use strict";

const output = {
    home : function(req,res){
        res.render("home/index");
    },
    login : function(req,res){
        res.render("home/login");   
    },
}

const process = {
    login : function(req,res){
        console.log(req,res);
    },
}

module.exports = {
    output,
    process
}  