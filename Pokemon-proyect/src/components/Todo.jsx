/* eslint-disable react/prop-types */ 

import { Button } from "./Button.jsx"
import { useState } from "react"

export const Todo = ({name, isCompleted}) => {

    const [currentState, changeState] = useState(isCompleted)
    const todoColor = currentState ? "bg-lime-400" : "bg-red-400"
    const handleClick = () => {
        changeState(!currentState)
    }

    return(

        <article className="w-[30rem] h-16 m-3 rounded-md px-3 flex justify-between items-center bg-slate-500">

            <header className="flex justify-center items-center gap-2">
                <div className={`${todoColor} rounded-full w-4 h-4`}></div>
                <strong>{name}</strong>
            </header>

            <div>
                <Button todoState={currentState} onClick={handleClick}/>
            </div>

        </article>

    )

}