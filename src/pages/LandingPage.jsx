import React from "react";
// import avatar from "../assets/avatar.png";
import "./LandingPage.css";
import Header from "../components/Header";
import Features from "../components/Features";
import CaseStudy from "../components/CaseStudy";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Features />
      <CaseStudy />
      <Footer />
    </>

    // <form className="user-form">
    //       <div className='user-info'>
    //             {/* upper section */}
    //             <div className='firstSection'>
    //                 <div className='avatarContainer'>
    //                     <img className='avatar' src={avatar} alt="" />
    //                     <button className='cameraContainer'>
    //                         <img className='camera' src={camera} alt="" />
    //                     </button>
    //                 </div>
    //                 <div className='btnContainer'>
    //                     <button className='uploadBtn'>Upload new</button>
    //                     <button className='deleteAvatarBtn'>Delete Avatar</button>
    //                 </div>
    //             </div>
    //             {/* User Input Section */}
    //             <div className='userInputContainer'>
    //                 <div className='firstInputGrp'>
    //                     <div className='userNames'>
    //                         <div className='inputGrp'>
    //                             <h1>First Name</h1>
    //                             <input type="text" placeholder='First Name' />
    //                         </div>
    //                         <div className='inputGrp'>
    //                             <h1>Last Name</h1>
    //                             <input type="text" placeholder='Last Name' />
    //                         </div>
    //                     </div>
    //                     <div className="form-group">
    //                         <label>Phone Number</label>
    //                         <div className="phone-input">
    //                             <select
    //                             name="countryCode"
    //                             defaultValue="+234"
    //                             >
    //                             <option value="+234">+234</option>
    //                             <option value="+34">+34</option>
    //                             <option value="+24">+24</option>
    //                             <option value="+233">+233</option>
    //                             <option value="+231">+231</option>
    //                             {/* Add more country codes as needed */}
    //                             </select>
    //                             <input
    //                             type="text"
    //                             name="phoneNumber"
    //                             placeholder="9120000000"
    //                             />
    //                         </div>
    //                     </div>
    //                     <div className='inputGrp'>
    //                         <h1>Hobby 1</h1>
    //                         <input type="text" placeholder='Enter Value' />
    //                     </div>
    //                     <div className='inputGrp'>
    //                         <h1>Hobby 2</h1>
    //                         <input type="text" placeholder='Enter Value' />
    //                     </div>
    //                 </div>
    //                 <div className='secondInputGrp'>
    //                     <div className='inputGrp2'>
    //                         <h1>Email</h1>
    //                         <input type="text" placeholder='Enter Value' />
    //                     </div>
    //                     <div className='inputGrp2'>
    //                         <h1>Status</h1>
    //                         <input type="text" placeholder='Enter Value' />
    //                     </div>
    //                     <div className='inputGrp2'>
    //                         <h1>Hobby 2</h1>
    //                         <input type="text" placeholder='Enter Value' />
    //                     </div>
    //                     <div className='inputGrp2'>
    //                         <h1>Location</h1>
    //                         <input type="text" placeholder='Enter Value' />
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* Edit Button */}
    //             <button className='editBtn'>Edit</button>
    //       </div>
    // </form>
  );
}
