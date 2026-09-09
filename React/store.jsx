import React,{UseState} from "react";
function Store(){
    const [msg,setMsg]=useState("");
    const products=[
        {id:1,category:"jeans",brand:"Levis",price:2000},
        {id:2,category:"jeans",brand:"Levis",price:2500},
        {id:3,category:"jeans",brand:"pepe",price:2100},
        {id:4,category:"jeans",brand:"pepe",price:4000},
        {id:5,category:"jeans",brand:"Wrangler",price:1000},
    ];
}
function handleClick(){
    localStorage.setItem("products",JSON.stringify(products));
    setMsg("Updated");
}
return(
    <div className="box1">
        <h3>We have got data of products</h3><br />

{msg==="" && <button onClick={handleClick>Update Inventory</button>} 
{msg==="Updated"&&<p className=bg}   </div>
)