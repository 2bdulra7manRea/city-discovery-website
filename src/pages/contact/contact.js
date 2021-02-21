import { useEffect } from "react";
import FooterComponenet from "../../components/footer";
import "./contact.css";
import aos from 'aos';
export default function Contact() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row flex">
          <div className="header_box">
            <div className="text m">
              <h1 className="first_title">CONTACT US </h1>
            </div>
            <div className="search">
              <input
                type="search"
                placeholder="what are you looking for"
              ></input>
              <input type="text" placeholder="Search loaction"></input>
              <button className="Bigcolor">search</button>
            </div>
          </div>
        </div>
<div style={{height:'200px'}}></div>
        <div className="row m about">
          <div className="col-7 contact flex col-lg-12" data-aos='slide-up' >
            <h1>contact us</h1>

            <form>
              <div className="flex list row">
                <div className="col-6">
                  <h3>Address:</h3>
                  <ul>
                    <li>198 West 21th Street,</li>
                    <li>Suite 721 Egypt NY</li>
                    <li>10016</li>
                  </ul>
                </div>

                <div className="col-6">
                  <h3>Email:</h3>
                  <ul>
                   
                    <li>Company@company.eg</li>

                  </ul>
                </div>

              </div>
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="E-mail"></input>
              <input type="text" placeholder="Subject"></input>
              <textarea cols="10" rows="4"></textarea>
            </form>
            <button className="Bigcolor">Send Message</button>
          </div>
          <div className="col-5 col-lg-12" >
            <img
              src="https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
              style={{ width: "100%", height: "600px" }}
              data-aos='fade-up'
            ></img>
          </div>
        </div>

        <FooterComponenet></FooterComponenet>
      </div>
    </>
  );
}
