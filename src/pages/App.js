import HeaderComponent from "../components/header";
import {Switch , BrowserRouter , Route} from 'react-router-dom'
import Home from "./home/home";
import Blog from "./blogs/blogs";
import Contact from "./contact/contact";
import Listing from "./listing/listing";
import './App.css'
import aos from 'aos'
export default function App() {
    

return(<>
<BrowserRouter>
<div className='header'>
    <div className='overlay'>
<HeaderComponent></HeaderComponent>

</div>
</div>




<Switch>
<Route path='/' exact component={Home}></Route>
<Route path='/listing' exact component={Listing} ></Route>
<Route path='/blogs' exact component={Blog}></Route>
<Route path='/contact' exact component={Contact}></Route>
</Switch>








</BrowserRouter>
</>)
}