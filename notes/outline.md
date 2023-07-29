# OUtline
## Client Page

### home / index
This page will have a 'launch game' button initially that simply launches a local, in-browser instance of game
TODO:
- set up login/signup functions using AXIOS http post requests to server 
- game service on server will track game state, use SSE perhaps, or streamchat api
- after log in, user can either create a new game or join using a username 
EXTENSION:
- create different apps that can be launched after login to demonstrate and focus other learning objectives


### game/apps
demo shows a tic-tac-toe game with a game state local to the browser
TODO: 
- server side game-state attached to userID of room creator
- server side game-state that can trigger SSE and control flow


## Server 
### Login / Signup
TODOO:
- handle post request for signup, generate unique user ID and securely store user password (hash?) 
- handle post request for login
- use permanent server side storage for accounts
EXTENSION: 
- create a database for wins/losses / gameType etc.

### Game Service
TODO:
- move game logic to server
- ensure control flow is maintained (user turns) and updates to gamestate are pushed to all users in room. 