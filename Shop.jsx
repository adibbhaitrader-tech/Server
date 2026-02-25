import { useState } from "react";

export default function Shop(){
  const [visible,setVisible]=useState(20);

  const products = Array.from({length:5000},(_,i)=>({
    id:i+1,
    title:`Luxury Designer Set ${i+1}`,
    price:10000 + i
  }));

  return(
    <div style={{padding:"40px"}}>
      <h2>Premium Collection</h2>
      {products.slice(0,visible).map(p=>(
        <div key={p.id} style={{marginBottom:"10px"}}>
          {p.title} - {p.price} ৳
        </div>
      ))}
      <button onClick={()=>setVisible(v=>v+20)}>Load More</button>
    </div>
  )
}
