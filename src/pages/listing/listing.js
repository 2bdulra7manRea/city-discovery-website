
import { useEffect, useState } from 'react';
import Card from '../../components/card';
import aos from 'aos'
import 'aos/dist/aos.css';
export default function Listing(params) {
   
useEffect(()=>{

aos.init({
    duration:2000

})

},[])


const [cardInfo , setCardinfo]=useState([
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    {title:'harbor light hotel' , location:'los anglus' , phone:'098833333332', reviews:10, icon:'' , img:''},
    
    ])
    
    return(<>
    <div className='container'>
    <div className='row flex'>
<div className='header_box'>
<div className='text m'>
<h1 className='first_title'>Our Listing </h1>
</div>
<div className='search m'>
<input type='search' placeholder='what are you looking for'></input>
<input type='text' placeholder='Search loaction'></input>
<button className='Bigcolor'>search</button>
</div>

</div>

</div>


<div className='row m flex'>
<section className='row flex center'>
<div className='title flex m'>
     
    </div>


{cardInfo.map((carddata , index)=>{
return(
<Card data-aos="slide-up" key={index} info={carddata}></Card>
)
})}



</section>
</div>







    </div>
    </>)
    
    }