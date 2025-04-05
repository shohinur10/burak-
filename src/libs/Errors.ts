export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "SOMETHING WENT WRONG!",
    NO_DATA_FOUND = "NO DATA FOUND!",
    CREATION_FAILED = "CREATION FAILED!",
    UPDATE_FAILED = "UPDATE FAILED!",

    USED_NICK_PHONE = "You are inserting an already used nickname or phone number.",
    NO_MEMBER_NICK = "No member with that nickname or number.",
    WRONG_PASSWORD = "Wrong password",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;
    
static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG
};

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    
    }
}

export default Errors;
