import React from "react";
import Square from "./Square"

function Board(){
    return (
        <div className="Board">
            <p>
                Game Board
            </p>
            <div className="row">
                <Square val={0}/>
                <Square val={1}/>
                <Square val={2}/>
            </div>
            <div className="row">
                <Square val={3}/>
                <Square val={4}/>
                <Square val={5}/>
            </div>
            <div className="row">
                <Square val={6}/>
                <Square val={7}/>
                <Square val={8}/>
            </div>

        </div>
    );
}

export default Board;