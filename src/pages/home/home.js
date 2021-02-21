
import { useEffect, useState } from 'react';
import Card from '../../components/card';
import'./home.css';
import FooterComponenet from "../../components/footer";
import aos from 'aos'

export default function Home(params) {


useEffect(()=>{
aos.init({
    duration:2000,
    easing:'ease-in-out',
    delay:200,
    offset:200
})

},[])


const [items , setitems]=useState([
{title:'food&drink' , list:100 , icon:'fas fa-dungeon'},
{title:'Shopping' , list:100 , icon:'fas fa-store-alt'},
{title:'food&drink' , list:100 , icon:'fas fa-glass-cheers'},
{title:'Theater' , list:100 , icon:'fas fa-theater-masks'},
{title:'food&drink' , list:100 , icon:'fas fa-gifts'},
{title:'Sport' , list:100 , icon:'fas fa-store-alt'},
{title:'Gifts' , list:100 , icon:'fas fa-gifts'},
{title:'food&drink' , list:100 , icon:'fas fa-dungeon'},
{title:'Bar& club' , list:100 , icon:'fas fa-glass-cheers'},
{title:'Places' , list:100 , icon:'fas fa-map-marked-alt'},

])


const [cardInfo , setCardinfo]=useState([
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
<h1 className='first_title'>Let explore your awesome city </h1>
</div>
<div className='search'>
<input type='search' placeholder='what are you looking for'></input>
<input type='text' placeholder='Search loaction'></input>
<button className='Bigcolor'>search</button>
</div>

</div>

</div>





<div className='row m flex'>
<section className='box flex col-8'>

{items.map((itm , index)=>{
return(

<section data-aos='slide-up' key={index} className='flex item_box col-2 col-lg-12'>
<div className='item_box_content'>
<span className='item_box_content_icon'> <i className={itm.icon}></i></span>    
   
<h2>{itm.title}</h2>
<h3> <span>{itm.list}</span>listing</h3>
</div>
</section>
)
})}
</section>
</div>



<div className='row m flex'>
<section className='col-11 flex center'>
<div className='title flex m'>
     <h2>Popular Listing</h2>   
    </div>


{cardInfo.slice(0,4).map((carddata ,index)=>{
return(
<Card data-aos='slide-up' key={index} info={carddata}></Card>
)
})}



</section>
</div>


<div className='row m'>
<div className='col-2'></div>
<div className='col-10 ads' data-aos='slide-left'>
<div className='ads_img'>
<img src='https://images.unsplash.com/photo-1607675641274-fbac1def9d94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'></img>
</div>
<div className='ads_body flex'>

<h1>we have speical offer now and then </h1>

</div>



</div>


</div>






<div className='row m flex'>
<section className='row flex center'>
<div className='title flex m'>
     <h2>Our Listing</h2>   
    </div>


{cardInfo.map((carddata , index)=>{
return(
<Card data-aos='slide-up' key={index} info={carddata}></Card>
)
})}



</section>
</div>







<div className='row m about'>

<div className='col-4 about_img col-lg-12' data-aos='slide-right'>
<img src='https://images.unsplash.com/photo-1524282592407-25bf4101ac81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'></img>
</div>
<div className='col-8 flex col-lg-12' data-aos='slide-left'>
<div className='about_body'>
    <h1>Directone A Directory & Listing</h1>
    <p>Far far away, behind the word mountains, far from the
         countries Vokalia and Consonantia, there live the
          blind texts. Separated they live in Bookmarksgrove 
          right at the coast of the Semantics, a large language ocean.
A small river named Duden flows by their place and supplies it 
with the necessary regelialia. It is a paradisematic country, 
in which roasted parts of sentences fly into your mouth.</p>
</div>
</div>



</div>







<FooterComponenet></FooterComponenet>
</div>






</>)

}