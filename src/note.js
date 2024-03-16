import React from "react";
function note(props)
{
     function deletetext()
     {
       props.delfunc(props.value);
     }
       return <div className="note"> <h1 className="notetext">{props.value}</h1>
       <div className="deletediv"><button onClick={deletetext}  className="deletebutton">delete</button></div> </div>
}
export default note;