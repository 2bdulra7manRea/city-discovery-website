import { Link } from "react-router-dom";
import './header.css'
export default function HeaderComponent() {
    
    return(<>
    <nav className='nav'>
        <div className='tite'>
            <h1 className='brand'>DISCOVERY</h1>
        </div>
<ul>
<li><Link to='/' className='selected'>Home</Link></li>
<li><Link to='/listing'>Listing</Link></li>
<li><Link to='/blogs'>Blogs</Link></li>
<li><Link to='/contact'>Contact</Link></li>
</ul>

<div className='btn-box'>
    <button className='Bigcolor'>Add listing</button>
</div>
    </nav>
    </>)
    
    }