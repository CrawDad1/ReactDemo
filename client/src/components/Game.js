import React, { useState } from "react";
import Board from "./Board";

function Game(){
    const [Result, setResult] = useState({winner:"none", winState : "none"});
    return (
        <>
        <div className="Game">
                <Board Result={ Result } setResult={setResult}/>
        {Result.winState==="none"?(
            <></>
        ):(
            <div className="Board game-over" >
                <h1>Game Over!</h1>
                {Result.winState === "Tie"?(
                    <h2>This game was a {Result.winState}</h2>
                ):(
                    <h2>The winner of this game is... {Result.winner}</h2>
                )}
            </div>
        )}
        </div>
        </>
    );
}

export default Game;