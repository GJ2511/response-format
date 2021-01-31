// Inspired from 'word-wrap'

declare interface ResponseData {
  /**
   * Defined status code in response object
   */
  statusCode: number;

  /**
   * Tell that response success or error
   */
  error: boolean;

  /**
   * The string to description result
   */
  message: Message;

  /**
   * Object contrain result if exist
   */
  data: any;
}

declare type Message = string | null | undefined;

declare class ResFormatter {
  static create(statusCode: number, error: boolean, message: Message, data: any): ResponseData;
  static success(message: Message, data: any): ResponseData;
  static badRequest(message: Message, data: any): ResponseData;
  static unAuthorized(message: Message, data: any): ResponseData;
  static forbidden(message: Message, data: any): ResponseData;
  static notFound(message: Message, data: any): ResponseData;
  static notAllowed(message: Message, data: any): ResponseData;
  static requestTimeout(message: Message, data: any): ResponseData;
  static internalError(message: Message, data: any): ResponseData;
  static badGateway(message: Message, data: any): ResponseData;
  static unavailable(message: Message, data: any): ResponseData;
  static gatewayTimeout(message: Message, data: any): ResponseData;
}

export = ResFormatter;
