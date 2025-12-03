//your JS code here. If required. 3
document.getElementById('btn').onclick = function() {
    const inputValue = parseFloat(document.getElementById('ip').value);
    let outputDiv = document.getElementById('output');

    // Initial Promise
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    // Second Promise: Multiply by 2
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result * 2;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 2000);
        });
    })
    // Third Promise: Subtract 3
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result - 3;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    // Fourth Promise: Divide by 2
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result / 2;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    // Fifth Promise: Add 10
    .then(result => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = result + 10;
                outputDiv.innerHTML = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    });
};