import React,{useState} from "react";
const Area=()=>{
    const [currentUser,setCurrentUser]=useState([])
    const [usersData,setUsersData]=useState([
        {
            title: "",
            notes: "",
        }
    ])
    function ch(e){
        setUsersData({...usersData,[e.target.name]:e.target.value})

    }
    let Title=usersData.title;
    let Notes=usersData.notes;
    function HandleNew(e){
        e.preventDefault();
        setCurrentUser([...currentUser,{Title,Notes}])
        setUsersData({title:"",notes:""})
    }
    const Handledelete=(ind)=>{
        const setCurrentUser1=[...currentUser];
        setCurrentUser1.splice(ind,1)
        setCurrentUser(setCurrentUser1)
    }
    return(
        <div>
            <style>
{ 'body {background-color:rgb(229,228,226);}'}
            </style>
            <div className="topnav"><p>Keeper</p></div>
            <form className="form">
                <input className="title" name="title" value={Title} onChange={ch} placeholder="Title"/><br/>
                <textarea className="textarea" name="notes" value={Notes} onChange={ch} placeholder="Take a notes.."/>
                <button onClick={HandleNew}>Add</button>
            </form>
            {
                currentUser.map((info,ind)=>{
                    return(
                        <div className="Header">
                            <div key={ind}>
                                <p><b>{info.Title}</b></p>
                                <p>{info.Notes}</p>
                            </div>
                            <button className="b1" onClick={Handledelete} >Delete</button>
                            </div>

                    )
                }
                )
            }
           </div>
    )
}
export default Area