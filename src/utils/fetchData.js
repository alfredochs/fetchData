let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        //third argument -> set async on true, default is true
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            //the numbers represent the states of the request -> see Documentation
            //4 means success
            if (xhttp.readyState === 4) {
                //completed request ? 200,400,500
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api));
            }
        });
        xhttp.send();
    });
};
module.exports = fetchData; 