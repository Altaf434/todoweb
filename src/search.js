import React ,{useState}from "react";
import Note from './note';
function Search()
{    
     var[text,settext]=useState('');
     var[arr,setarr]=useState(["altaf","youth"]);
     function changetext(event)
     { 
          
         
         settext(event.target.value);

     }
     function enteraddtext(event)

     { 
        
        if(event.code==="Enter")
        {
            addtext();
        }
     }
     function addtext()
     {    
        
         if(text!=="")
          { 
           setarr((prevarr)=>{
              return [...prevarr,text];
          });
         
          settext("");
         }
         
     }
     function deletetext(valu)
     { 
      
         setarr(arr.filter((value)=>{if(value===valu)
       {
          return false;
       }
    else{
       return true;
    }}));
     }
     return <div >
     <div className="header">
     <img  className="logo" alt="todolist" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"/>
     <img  className="logo1" alt="todolist" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPBvYORubgWf5gfRdlLQ7vB6YXcQ4_1mF7icRwGSR81_rWXiXiyDgyafn_hIDHv40fOM&usqp=CAU"/>
            <div className="search">
            <input onKeyDown={enteraddtext} placeholder='enter any value' className="input" onChange={changetext} value={text}></input>
            <button    onClick={addtext} className="createbutton">create</button>
            </div>
     </div>
            {arr.map((val,index)=>{ return <Note value={val} delfunc={deletetext} key={index} />})}
            </div>
}
export default Search;