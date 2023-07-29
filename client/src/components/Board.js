import React, { useState } from "react";
import Square from "./Square"

function Board(){
    const [Board, setBoard] = useState(["","","","","","","","",""])
    
    const chooseSquare = (boardIndex)=>{
        // dummy function to confirm action
        let newBoard = [...Board];
        newBoard[boardIndex]='X';
        setBoard(newBoard);
        return;
    }
    return (
        <div className="Board">
            <p>
                Game Board
            </p>
            <div className="row">
                <Square chooseSquare={()=>{chooseSquare(0);}} val={Board[0]}/>
                <Square chooseSquare={()=>{chooseSquare(1);}} val={Board[1]}/>
                <Square chooseSquare={()=>{chooseSquare(2);}} val={Board[2]}/>
            </div>
            <div className="row">
                <Square chooseSquare={()=>{chooseSquare(3);}}  val={Board[3]}/>
                <Square chooseSquare={()=>{chooseSquare(4);}}  val={Board[4]}/>
                <Square chooseSquare={()=>{chooseSquare(5);}}  val={Board[5]}/>
            </div>
            <div className="row">
                <Square chooseSquare={()=>{chooseSquare(6);}}  val={Board[6]}/>
                <Square chooseSquare={()=>{chooseSquare(7);}}  val={Board[7]}/>
                <Square chooseSquare={()=>{chooseSquare(8);}}  val={Board[8]}/>
            </div>

        </div>
    );
}

export default Board;