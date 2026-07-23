'use strict';

function getLocation(){
    const prom = new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return prom;
};

getLocation()
  .then(pos => console.log(pos))
  .catch(err => console.error(err));