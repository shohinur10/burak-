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
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data found!",
    CREATION_FAILED = "Creation failed!",
    UPDATE_FAILED = "Update failed!",
    USED_NICK_PHONE = "You are inserting an already used nickname or phone number.",
    NO_MEMBER_NICK = "No member found with that nickname.",
    WRONG_PASSWORD = "Wrong password!",
    NOT_AUTHENTICATED = "You are not authenticated!,Please login first ",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super(statusMessage);
        this.code = statusCode;
        this.message = statusMessage;
    }
}

export default Errors;
