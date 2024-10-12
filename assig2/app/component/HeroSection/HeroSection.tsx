import React from 'react';
import cssStyle from './HeroSection.module.css'

const Hero= () => {
 

  return (
    <div className={cssStyle.hero}>
      <h1>This is Hero Section</h1>
      <p>
        Artificial Intelligence (AI) is rapidly gaining traction in Pakistan, as the country recognizes the transformative potential of this technology across various sectors.
        <br/> With increasing access to data and computing power, AI is being integrated into industries like healthcare, agriculture, education, and finance. In healthcare,
         AI is used for diagnostic<br/> tools, medical imaging, and predicting disease outbreaks,
        <br/> contributing to better health outcomes. Pakistan's agricultural sector, which is critical to its economy, is adopting AI for precision farming, optimizing resource use, and improving crop yields through predictive analytics.
        <br/> The government and private sector are actively working to create frameworks and initiatives that promote AI adoption across these key areas.
      </p>
      <p>
        The educational sector in Pakistan is also experiencing a shift due to AI integration. Universities and technical institutes are increasingly offering AI-focused courses
        <br/> and degrees to meet the growing demand for skilled professionals in this field.
        <br/> Institutions like the National Center of Artificial Intelligence (NCAI) are at the forefront of AI research, focusing on innovative solutions tailored to Pakistan's unique challenges. AI-powered educational tools are helping to personalize learning,
        <br/> making education more accessible and effective, especially in rural areas where traditional educational resources are limited.
      </p>

      
    
               <p>
            In the financial sector, AI is revolutionizing services through automation, fraud detection, and personalized customer experiences. Pakistani banks and fintech companies are adopting AI-driven solutions to streamline processes,
            <br/> enhance security, and improve customer satisfaction. Machine learning algorithms are being utilized to detect anomalies in transactions,
            <br/> thus reducing the risk of financial fraud. Additionally, AI-driven chatbots are becoming commonplace, providing round-the-clock customer support and helping to manage high volumes of inquiries more efficiently.
          </p>
          <p>
            However, the rise of AI in Pakistan is not without its challenges. The country faces issues related to infrastructure, data privacy, and a shortage of skilled professionals. To fully harness the benefits of AI,
            <br/> Pakistan needs to invest in improving digital infrastructure, ensuring internet access in remote areas, and fostering a culture of innovation. Additionally, regulatory frameworks need to be strengthened to address concerns regarding data security and ethical AI use. 
            <br/>With strategic planning and investment, Pakistan has the potential to become a key player in the global AI landscape.
          </p>
          
          <button >Subscribe</button>   
    </div>
  );
};

export default Hero;






