import React from "react";
import "./about.css";
import Image5 from "../../assets/5.jpg";

function About() {
  return (
    <div>
      <div class="w-80">
    
        <br />
        <h2 style={{ marginLeft: 10 }}>
          Tech Advancement in Futute
        </h2>
        <div class="about-box">
          <div class="bottomText">
            <p>
            The future of technological evaluation is likely to be characterized by a greater emphasis on ethical considerations and human-centered design. As technology becomes increasingly intertwined with our lives, it is important to ensure that it serves human needs and values, rather than simply optimizing for efficiency or profit. Evaluations of new technologies will need to take into account factors such as privacy, security, bias, and inclusivity, and involve diverse stakeholders in the decision-making process. In addition, the rapid pace of technological development and the emergence of new and complex technologies will require evaluators to be adaptable and flexible, and to use a range of methods and tools to assess the impacts and implications of these technologies.


            </p>
            <br />
            <p>
            Another important trend in the future of technological evaluation is the increasing role of artificial intelligence (AI) and machine learning (ML) in the evaluation process. AI and ML algorithms can be used to automate certain aspects of evaluation, such as data collection and analysis, and to identify patterns and insights that might not be apparent through traditional evaluation methods. However, there are also concerns around the potential biases and limitations of AI and ML algorithms, and the need to ensure that they are transparent, accountable, and trustworthy. As such, the future of technological evaluation will require a balance between leveraging the power of AI and ML, while also ensuring that these technologies are subject to rigorous evaluation and oversight.
            </p>
          </div>
          <div className="bottomImage">
            <img
              src={Image5}
              alt="Logo"
              style={{ width: '100%', height: 300 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
