import { useContext } from "react";
import Students from "./Students";
import { SubjectContext } from "./Context";

export default function Subjects(){

    const subject = useContext(SubjectContext)

        return (
        <div style={{backgroundColor:'purple', padding:10}}>
            <h1>Subjects is: {subject}</h1>
        </div>
    )
}