
import { useState,useEffect } from "react";
function Uselocalstorage(key,intialvalue){
let [data,setdata]=useState(intialvalue)
// عشان اما اجى اعمل داونلود للصفحة تحمل المتخزن فالوكال ستورج فيها
useEffect(()=>{
let current =window.localStorage.getItem(key)
if(current)
    {setdata(JSON.parse(current))}
else {window.localStorage.setItem(key,JSON.stringify(intialvalue))
}
},[])
// اما اجى ادى قيمة جديدة بالسيت داتا هناك فال ابب هتبقي كانها الفنكشن بتاعت الابديت
let update=(newvalue)=>{
    setdata(newvalue)
    window.localStorage.setItem(key,JSON.stringify(newvalue))
}

return [data,update]
}




export default Uselocalstorage
