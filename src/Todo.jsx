export default function Todo({task , isDone})
{
    // props.task = "ami ghumabo";
    // return (
    //     <h1>task : {task}</h1>
    // )
    if(isDone === true){
        return (
            <h1>Finished : {task}</h1>
        )
    }
    else{
        return (
            <h1>Work on : {task}</h1>
        )
    }
}