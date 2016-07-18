Response Format

Module which provides HTTP-friendly error objects

Author: [Gaurav Joshi](https://github.com/GJ2511)

- [Response-format](#start)
  - [Methods](#methods)
    - [`create(statusCode, [error, message, data])`](#user-content-createstatuscode-error-message-data)
    - [`success([message, data])`](#user-content-successmessage-data)
    - [`badRequest([message, data])`](#user-content-badrequestmessage-data)
    - [`unAuth­orized([message, data])`](#user-content-unauthorizedmessage-data)
    - [`forbidden([message, data])`](#user-content-forbiddenmessage-data)
    - [`notFound([message, data])`](#user-content-notfoundmessage-data)
    - [`notAllowed([message, data])`](#user-content-notallowedmessage-data)
  	- [`requestTimeout([message, data])`](#user-content-requesttimeoutmessage-data)
    - [`internalError([message, data])`](#user-content-internalerrormessage-data)
    - [`badGateway([message, data])`](#user-content-badgatewaymessage-data)
    - [`unavailable([message, data])`](#user-content-unavailablemessage-data)
    - [`gatewayTimeout([message, data])`](#user-content-gatewaytimeoutmessage-data)

## Start
```js
const Format = require('response-format');
```

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
```
### `badRequest([message, data])`

Returns a 400 Error where:
- `statusCode` - 400
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.badRequest();
```

Generates the following response payload:

```json
{
    "statusCode": 400,
    "error": true,
    "message": "Bad Request",
    "data": null
}
```
### `unAuth­orized([message, data])`

Returns a 402 Error where:
- `statusCode` - 402
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.unAuth­orized();
```

Generates the following response payload:

```json
{
    "statusCode": 402,
    "error": true,
    "message": "Unauth­orized",
    "data": null
}
```
### `forbidden([message, data])`

Returns a 403 Error where:
- `statusCode` - 403
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.forbidden();
```

Generates the following response payload:

```json
{
    "statusCode": 403,
    "error": true,
    "message": "Forbidden",
    "data": null
}
```
### `notFound([message, data])`

Returns a 404 Error where:
- `statusCode` - 404
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.notFound();
```

Generates the following response payload:

```json
{
    "statusCode": 404,
    "error": true,
    "message": "Not Found",
    "data": null
}
```
### `notAllowed([message, data])`

Returns a 405 Error where:
- `statusCode` - 405
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.notAllowed();
```

Generates the following response payload:

```json
{
    "statusCode": 405,
    "error": true,
    "message": "Method Not Allowed",
    "data": null
}
```
### `requestTimeout([message, data])`

Returns a 408 Error where:
- `statusCode` - 408
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.requestTimeout();
```

Generates the following response payload:

```json
{
    "statusCode": 408,
    "error": true,
    "message": "Request Timeout",
    "data": null
}
```
### `internalError([message, data])`

Returns a 500 Error where:
- `statusCode` - 500
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.internalError();
```

Generates the following response payload:

```json
{
    "statusCode": 500,
    "error": true,
    "message": "Internal Server Error",
    "data": null
}
```
### `badGateway([message, data])`

Returns a 502 Error where:
- `statusCode` - 502
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.badGateway();
```

Generates the following response payload:

```json
{
    "statusCode": 502,
    "error": true,
    "message": "Bad Gateway",
    "data": null
}
```
### `unavailable([message, data])`

Returns a 503 Error where:
- `statusCode` - 503
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.unavailable();
```

Generates the following response payload:

```json
{
    "statusCode": 503,
    "error": true,
    "message": "Service Unavai­lable",
    "data": null
}
```
### `gatewayTimeout([message, data])`

Returns a 504 Error where:
- `statusCode` - 504
- `error` - true
- `message` - optional message.
- `data` - optional payload.

```js
Format.gatewayTimeout();
```

Generates the following response payload:

```json
{
    "statusCode": 504,
    "error": true,
    "message": "Gateway Timeout",
    "data": null
}
```