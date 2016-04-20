Response Format

Module which provides HTTP-friendly error objects

Author: [Gaurav Joshi](https://github.com/GJ2511)

<!-- toc -->

- [Response-format](#Response-format)
  - [Methods](#methods)
    - [`create(statusCode, [error, message, data])`](#createstatuscode-message-data)
  	

<!-- tocstop -->

# Response Format

**boom** provides a set of utilities for returning HTTP errors. Each utility returns a `Boom` error response
object (instance of `Error`) which includes the following properties:
- `isBoom` - if `true`, indicates this is a `Boom` object instance.
- `isServer` - convenience bool indicating status code >= 500.
- `message` - the error message.
- `output` - the formatted response. Can be directly manipulated after object construction to return a custom
  error response. Allowed root keys:
    - `statusCode` - the HTTP status code (typically 4xx or 5xx).
    - `headers` - an object containing any HTTP headers where each key is a header name and value is the header content.
    - `payload` - the formatted object used as the response payload (stringified). Can be directly manipulated but any
      changes will be lost
      if `reformat()` is called. Any content allowed and by default includes the following content:
        - `statusCode` - the HTTP status code, derived from `error.output.statusCode`.
        - `error` - the HTTP status message (e.g. 'Bad Request', 'Internal Server Error') derived from `statusCode`.
        - `message` - the error message derived from `error.message`.
- inherited `Error` properties.

The `Boom` object also supports the following method:
- `reformat()` - rebuilds `error.output` using the other object properties.


## Helper Methods

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
