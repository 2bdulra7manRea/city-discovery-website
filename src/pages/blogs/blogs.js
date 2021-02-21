import { useEffect, useState } from "react"
import ItemBlog from '../../components/itemBlog'
import aos from 'aos';
export default function Blog(params) {
    
useEffect(()=>{
aos.init({duration:1000})

},[])
const [cardInfo , setCardinfo]=useState([

{title:'Explore The Best Restaurant in New York' 
,content:'A small river named Duden flows by their place and supplies it with the necessary regelialia',comments:4 , img:'https://images.unsplash.com/photo-1519044444158-d7b0e8452004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'},
{title:'Explore The Best Restaurant in New York' 
,content:'A small river named Duden flows by their place and supplies it with the necessary regelialia',comments:4 , img:'https://images.unsplash.com/photo-1505456810080-29df4e7077a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'},
{title:'Explore The Best Restaurant in New York' 
,content:'A small river named Duden flows by their place and supplies it with the necessary regelialia',comments:4 , img:'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
{title:'Explore The Best Restaurant in New York' 
,content:'A small river named Duden flows by their place and supplies it with the necessary regelialia',comments:4 , img:'https://images.unsplash.com/photo-1536408341742-d7591635db3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}



])

    return(<>


<div className='container'>
    <div className='row flex'>
<div className='header_box'>
<div className='text m'>
<h1 className='first_title'>BLOGS</h1>
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
return(<>
<ItemBlog data-aos='slide-up' key={index} blog={carddata}></ItemBlog>

</>)
})}



</section>
</div>




<div className='row m'>
<div className='col-2'></div>
<div className='col-10 ads'>
<div className='ads_img'>
<img src='https://images.unsplash.com/photo-1607675641274-fbac1def9d94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'></img>
</div>
<div className='ads_body flex'>

<h1>we have speical offer now and then </h1>

</div>



</div>


</div>





</div>
    </>)
    
    }