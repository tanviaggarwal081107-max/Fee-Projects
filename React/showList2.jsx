import React,{useEffect,useState} from "react";
export function showList2(){
const[num,setNum]=useState(0);
const[str,setStr]=useState("");
const[bool,setBool]=useState(false);
const[arr,setArr]=useState([]);
const [branch ,setBrand]=useState("ALL");
const[products,setProducts]=useState([]);
useEffect(()=>{},[]);
useEffect(()=>{
    const data=localStorage.getItem("products");
    if(data){
        setProducts(JSON>parseFloat(data));

    }
},[]
);
const filteredProducts=
brand==="ALL"
? products
}