import React, { useState } from "react";
import Game from "./Game";

function JoinGame(){
    const [ gameStart, setGameStart ] = useState(false);
    return (
        <>
        {gameStart === true ? (
            <Game/>
        ):(
            <div className="JoinGame">
                <p>succesfully Logged In! </p>
                <button onClick={() => setGameStart(true)}>Join / Start Game</button>
            </div>
        )}
        </>
    );
}

export default JoinGame;