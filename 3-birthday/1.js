'use strict';

function validation(dateOfBirth){
    const now = new Date();
    const user = new Date(dateOfBirth);
    return (now.getTime() - user.getTime()) >= 441806400000;
};

console.log(validation('2000-01-01'));
console.log(validation('2020-01-01'));