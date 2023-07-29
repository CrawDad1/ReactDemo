import React, { useEffect, useState } from "react";
import Square from "./Square";
import { Patterns } from "../RowPatterns";

function Board({Result, setResult}){
    const [Board, setBoard] = useState(["","","","","","","","",""]);
    const [Turn, setTurn] = useState('X');

    useEffect(
        (
            ()=>{
                    if( checkWins()){return;}
                    checkTie();
            }
        ),[Board]
    )
    
    const chooseSquare = (boardIndex)=>{
        // checks if move is valid first
        if (Board[boardIndex]===""){
            let newBoard = [...Board];
            newBoard[boardIndex]= Turn;
            setBoard(newBoard);

            //then change player state
            setTurn(
                (Turn === 'X' ? 'O':'X')
            );
        }
        return;
    }

    const checkWins = () => {
        let winReturn = false;
        //.some method breaks the loop as soon as it returns true, continues otherwise
        Patterns.forEach(( pattern ) => {
            // save first player seen in pattern
            const currPlayer = Board[pattern[0]];
            if (currPlayer === ''){return;}
            let foundWinner = true;
            if (Board[pattern[1]] != currPlayer ||  Board[pattern[2]] != currPlayer){
                //first square is blank, not a winner
                // some square doesn't match first player, not winner
                foundWinner=false;
            }

            if (foundWinner){
                //winner found. update result state
                setResult({ winner:Board[pattern[0]], winState:"won" });
                winReturn = true;
            }
        });
        return winReturn;
    };

    const checkTie = () =>{
        const isNotFull = Board.some((square)=>{
            return square === '';
        })

        if(!isNotFull){
            //then board is full
            // set win state to tie
            setResult({winner: 'none', winState: "Tie"});
        }
        return;
    }

    return (
        <div className="Board">
            <div>
                <span>
                    <div> Game Board </div>
                    {/* debug values */}
                    {/* <div>Current Turn: {Turn}</div>
                    <div>Winner: {Result.winner}</div>
                    <div>Win state: {Result.winState}</div> */}
                </span>
            </div>
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