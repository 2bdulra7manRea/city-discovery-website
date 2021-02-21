import { useState } from 'react';
import './card.css';
export default function Card({info}) {
    
    let url='https://images.unsplash.com/photo-1613724131628-a20a5b0a4b91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'
    
    
    let [color , setcolor]=useState('red')
    let [flag , setflag]=useState(false)

function changeColor() {
    setflag(!flag)
}

    return(<>
<section className='card col-2 col-lg-12'>

<div className='card_img'>
<img className='pic' src={url}></img>

</div>


<div className='card_body'>
    <h1>{info.title}</h1>
    <p>{info.location}</p>
    <p>{info.phone}</p>
</div>

<div className='card_footer'>

<p> review <span style={{color:'red'}}>({info.reviews})</span></p>
<span onClick={changeColor} className='icon' style={{backgroundColor:flag?'red':'white'}}    ><i style={{color:flag?'white':'red'}}  class="far fa-heart"></i></span>

</div>



    </section>
    </>)
    
    }