class Logger {
    log(id, message, result) {
        console.log(`[Calculator:${id}] ${message} => ${result}`);
    }
}

module.exports = Logger;
