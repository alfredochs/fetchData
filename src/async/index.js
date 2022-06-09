/**
 ** with these functions async & await, we are making a "sync" function
 ** because the second function wait the first to be executed.
 */
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() =>  resolve('Do something Async!') , 2000)
            : reject(new Error('Test Error'));
    });
};

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
};
console.log('prima');
doSomething();
console.log('dopo');