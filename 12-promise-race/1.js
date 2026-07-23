'use strict';

async function getActivity() {
    const response = await fetch('https://bored.api.lewagon.com/api/activity');
    return response.json();
}

function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise
            .then(resolve, reject);
        });
    });
};

async function main() {
    const res = await race([getActivity(), getActivity()]);
    console.log(res);
}
main();