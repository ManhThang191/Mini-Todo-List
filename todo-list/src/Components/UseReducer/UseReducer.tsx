import { useReducer, useState  } from "react";

type Todo ={
    id: number,
    content : string,
    complete : boolean
}

type Action = |{type : "ADD_todo"; payload : string} | {type : "TOGGLE_todo" ; payload : number} | {type : "DELE_todo"; payload : number}

const InitialState : Todo[] = [];

function reducer_Todo (state : Todo[], action: Action) : Todo[]{
    switch(action.type){
        case "ADD_todo":
            return [...state,{id : Date.now(), content: action.payload, complete: false}];
        case "TOGGLE_todo":
            return state.map(todo => 
                todo.id === action.payload ? {...todo, complete : !todo.complete} : todo
            );
        case "DELE_todo":
            return state.filter( todo => todo.id !== action.payload);
        default:
            return state;
    }
}

// export default reducer_Todo