
# Setting up Fetch Requests for a Rails API backend


TLDR;
```js
const mainBody = {
  //information to send to the server
};
const content = {
  method: "METHOD",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(mainBody)
};
fetch(URL, content)
  .then(res => res.json())
  .then(e => //Code here!);
```

## mainBody

`mainBody` sends information to the rails server that you can parse in the backend using `params[:info]`

## content

`method:` sends the method request you want to send the server, ex. `GET`, `POST`, `PATCH`...

`headers:` sends metadata on the type of request you are sending, and the type of request you expect to retrieve.

`'content-type': 'application/json'` will tell the server you are sending json.

`'accept': 'application.json'` will tell the server you want to receive json.

`body: JSON.stringify(mainBody)` will send the server a JSON object as a string.

## fetch

`fetch(URL,content)` will attempt to connect to the URL server and then give it content.

`then(res=>res.json())` will attempt to convert the response into a json object.

`then(e => ...)` will give you access to a json object `e`.

## All Together Now!

```js
const mainBody = {
  //information to send to the server
};
const content = {
  method: "METHOD",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(mainBody)
};
fetch(URL, content)
  .then(res => res.json())
  .then(e => //Code here!);
```
