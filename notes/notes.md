# setup
## troubleshooting
error: Failed to load config "react" to extend from
solution: run `yarn add eslint-config-react-app -D`
## project setup

1. ensure npm and yarn are installed before begining project
2. within client folder, run the command
    `yarn create react-app .`
3. within server folder
    - run shell command `yarn init`
    - create a folder server/src
    - create a blank file server/src/index.js
    - open the file server/package.json and add the value 
        `"main": "index.js"`

4. verify installation
    - once yarn has finished installing the reafct project...
    - in /client/, run command `yarn start`
    - if the react template webpage loads, the project has been initialized successfully
## packages
use package manager to add the following packages: 
client
- axios
- universal-cookie
- stream-chat
- stream-chat-react 


# client 
create components folder in client and the files
- component/Login.js
- component/SignUp.js

inside each file, create the basic component structure like this:
```
import React from "react";

function <COMPONENT NAME HERE>(){
    return <div><COMPONENT NAME HERE></div>;
}

export default <COMPONENT NAME HERE>;
```

## auth
### SignUp
### Login

