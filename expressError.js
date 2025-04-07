class ExpressError extends Error {
    constructor(statusCode, statusMessage) {
        super()
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;

    }
}
export default ExpressError;