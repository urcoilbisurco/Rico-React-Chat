
## Rico
A firebase-backed chat created in React.

![Rico Demo](./demo.png)

## Installation

create an "app/_env.js" file with inside:

```javascript
var env={
  firebase:{//your firebase config}
}
module.exports=env;
```
Then run

```
  npm install
  npm run start
```

Then visit localhost:8080


## Todo
[] use draft.js for messageBox element
[] add Images and emoji/stickers (draft.js plugins)
[] see how many people are online (firebase cloud messaging?)
