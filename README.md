Response Format

Module which provides HTTP-friendly error objects

Author: [Gaurav Joshi](https://github.com/GJ2511)

- [Response-format](#Response-format)
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

# Response Format

Each utility returns an Object which includes the following properties:
	- `error` - true, false or null (if not specified).
	- `statusCode` - the HTTP status code.
	- `message` - string containing message (if not specified will return a pre-defined set of messages according to status code )
	- `data` - response payload (null in case of blank or error)

## Methods

### `create(statusCode, [message], [data])`

Generates an `Error` object with the **boom** decorations where:
- `statusCode` - an HTTP error code number. Must be greater or equal 400.
- `message` - optional message string.
- `data` - additional error data set to `error.data` property.

```js
var error = Boom.create(400, 'Bad request', { timestamp: Date.now() });
```

## HTTP 4xx Errors

### `Boom.badRequest([message], [data])`

Returns a 400 Bad Request error where:
- `message` - optional message.
- `data` - optional additional error data.

```js
Boom.badRequest('invalid query');
```

Generates the following response payload:

```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "invalid query"
}
