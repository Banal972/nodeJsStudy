"use strict";

const id = document.querySelector('#id'),
    password = document.querySelector('#password'),
    loginBtn = document.querySelector('#button');


loginBtn.addEventListener('click',login);

function login(){
    const req = {
        id : id.value,
        password : password.value
    };
    
    fetch("/login",{
        method : "POST",
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(req), 
    })
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        if(res.succress){
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch(function(err){
        console.error(new Error("로그인중 에러 발생"));
    });
    
}
