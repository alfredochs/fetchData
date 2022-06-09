const someTimeWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Naaa!");
        }
    });
};

someTimeWillHappen()
    .then(Response => console.log(Response))
    .catch(err => console.error(err));

const someTimeWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('TRUE');
            }, 2000);
        } else {
            const error = new Error('Naaaa!');
            reject(error);
        }
    });
};

someTimeWillHappen2()
    .then(Response => console.log(Response))
    .catch(err => console.error(err));

Promise.all([someTimeWillHappen(), someTimeWillHappen2()])
    .then(Response => {
        console.log('Array of results', Response);
    })
    .catch(err => {
        console.error(err);
    });