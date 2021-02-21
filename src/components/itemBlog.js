export default function ItemBlog({blog}) {
    

return(<>

<div className='card col-2 col-lg-12'>
<div className='card_img'>
<img src={blog.img} className='pic'></img>
</div>
<div className='card_body'>
<p style={{color:'red'}}><span style={{padding:'3px'}}>{blog.comments}</span>Comments</p>
<h3>{blog.title}</h3>
<p>{blog.content}</p>
</div>
</div>
</>)
}