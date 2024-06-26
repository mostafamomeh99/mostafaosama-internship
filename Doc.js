import { useEffect, useState } from "react"
import axios from "axios"

function Doc(){
    let [data,setdata]=useState([])
useEffect(()=>{
axios.get('http://localhost:4000/basic_syntax')
.then((response)=> setdata(response.data))
.catch((err)=> setdata([{id:1,name:"mostafa",description:"ok"},{id:2,name:"alaa",description:"okay"}]))
},[])

return(
    <>
  
        {data.map((el)=>{
            return(
            <div key={el.id}>     
<h1>{el.name}</h1>
<p>Description : {el.description}</p>
<div>{el.examples.map((c,i)=>{
    return(<>
    <h1 key={c.markdown}>example{i+1} :</h1>
    <h2>-markdown</h2>
    <div>{c.markdown}</div>
    <h2>-html</h2>
    <div>{c.html}</div>
    </>)
})  }</div>
<div>{el.additional_examples.map((x)=>{
    return(<>
    <h1 key={x.name} >{x.name}</h1>
    <p>Description : {x.description}</p>
    <h2>-markdown</h2>
    <div>{x.markdown}</div>
    <h2>-html</h2>
    <div>{x.html}</div>
    </>)
})  }</div>


            </div>) })}
           
    </>
)
}

export default Doc


