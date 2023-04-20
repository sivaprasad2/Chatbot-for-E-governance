import React from 'react'
import './AboutUs.css'
function AboutUs() {
  return (
    <div className='container'>
      <h1>About us</h1>
      <p>With pieces of information scattered all over and no proper medium to reach the citizens, most of the government schemes go unheard off. With the advancement in the IT industry things have become a lot simpler, especially with the development of interactive chatbots and AI. This project is to make the chatbot a reliable medium between government schemes and citizens who want that information.</p>
      <p>To increase the effectiveness and efficiency of service delivery, chatbots are being utilized more and more frequently in a variety of industries, including government aid programs. In the context of government assistance, chatbots are virtual assistants or conversational interfaces that communicate with users and provide information, direction, and help pertaining to government aid programs using artificial intelligence (AI) and natural language processing (NLP) technology.</p>
      <h1>Our Team</h1>
      <div className="cards">
        <div className="card">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
          <div className="details">
            <span> <b>Siva Prasad L</b></span>
            <span> 20191EEE0045</span>
            <span> dept. of EEE</span>
            <span> Presidency University</span>
          </div>
        </div>
        <div className="card">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
          <div className="details">
            <span> <b>Sharan S Nair</b> </span>
            <span> 20191ECE0395</span>
            <span> dept. of ECE</span>
            <span> Presidency University</span>
          </div>
        </div>
        <div className="card">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
          <div className="details">
            <span><b> Siddarth R</b></span>
            <span> 20191CSE0571</span>
            <span> dept. of CSE</span>
            <span> Presidency University</span>
          </div>
        </div>
        <div className="card">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
          <div className="details">
            <span><b> Shivam Kumar</b></span>
            <span> 20191CSE0809</span>
            <span> dept. of CSE</span>
            <span> Presidency University</span>
          </div>
        </div>
        <div className="card">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
          <div className="details">
            <span><b> SUBBARA RAHUL </b></span>
            <span> 20191COM0197</span>
            <span> dept. of COM</span>
            <span> Presidency University</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs