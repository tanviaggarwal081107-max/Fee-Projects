import React,{useEffect,useState}from "react";
function ShowList(props){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        let data=localStorage.getItem("products");
        data=JSON.parse(data);
        setProducts(data);
        if(props.brand){
            setProducts(data.filter((item)=> item.brand===props.brand));
        }
    },[]);
    return(
        <section className="fyc">
            <div className="b1" style={{padding:"1rem"}}></div>
            </section>
            
    )
}