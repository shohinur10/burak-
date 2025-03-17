export enum HttpCode {
    Ok =200,
    CREATED =201,
    NOT_MODIFIED =304,
    BAD_REQUEST =400,
    UNAUTHORIZED = 401,
    FORBIDDEN =403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}


export enum Message{
    SOMETHING_WENT_WORNG = "SOMETHUING WENT WRONG!",
    NO_DATA_FOUND = "NO DATA IS FOUND!",
    CREATED_FAILED = "CREATED IS FAILDE!",
    UPDATED_FAILED = "UPDATED IS FAILED!",
}
 class Errors extends Error{
    public code : HttpCode;
    public message : Message;

    constructor(statusCode: HttpCode, statusMessage: Message){
        super();
         this.code = statusCode;
         this.message =statusMessage;

    }
 }

 export default Errors;