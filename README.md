Response Format

Module which provides HTTP-friendly error objects

Author: [Gaurav Joshi](https://github.com/GJ2511)

- [Response-format](#start)
  - [Methods](#methods)
    - [`create(statusCode, [error, message, data])`](#createstatuscode-message-data)
    - [`success([message, data])`](#success)
    - [`badRequest([message, data])`](#badRequest)
    - [`unAuth­orized([message, data])`](#unAuth­orized)
    - [`forbidden([message, data])`](#forbidden)
    - [`notFound([message, data])`](#notFound)
    - [`notAllowed([message, data])`](#notAllowed)
  	- [`requestTimeout([message, data])`](#requestTimeout)
    - [`internalError([message, data])`](#internalError)
    - [`badGateway([message, data])`](#badGateway)
    - [`unavailable([message, data])`](#unavailable)
    - [`gatewayTimeout([message, data])`](#gatewayTimeout)

## Start

Each utility returns an Object which includes the following properties:
	- `error` - true, false or null (if not specified).
	- `statusCode` - the HTTP status code.
	- `message` - string containing message (if not specified will return a pre-defined set of messages according to status code )
	- `data` - response payload (null in case of blank or error)

## Methods

### `create(statusCode, [error, message, data])`

Generates a decorated response object where:
- `statusCode` - an HTTP error code number.
- `message` - optional message string.
- `data` - response payload.
- `error` - true, false or null (if not specified).

### `success([message, data])`

Returns a 200 Success where:
- `statusCode` - 200
- `error` - false
- `message` - optional message.
- `data` - optional payload.

```js
Format.success();
```

Generates the following response payload:

```json
{
    "statusCode": 200,
    "error": false,
    "message": "OK",
    "data": null
}
