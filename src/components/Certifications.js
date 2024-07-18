import React from "react";

import "./Certifications.css";

const certificates = [
  {
    name: "Udemy Full-Stack Web Development",
    link: "https://www.udemy.com/certificate/UC-5d9b1d47-65fa-4bed-8c8b-ec6f4a6b6825",
    imgSrc: "/assets/images/certificates/udemy-full-stack-cc.jpg",
  },
  {
    name: "SheCodes Front-end",
    link: "https://www.shecodes.io/diplomas/e0ed9183783e936851cf10fad8413f13",
    imgSrc: "/assets/images/certificates/shecodes-frontend.png",
  },
  {
    name: "SheCodes React",
    link: "https://www.shecodes.io/certificates/a6204df3b647cb48f2b9c115944308b9",
    imgSrc: "/assets/images/certificates/shecodes-react-ao.png",
  },
  {
    name: "SheCodes Responsive",
    link: "https://www.shecodes.io/certificates/c087932c553fbc77d9843b25065370e9",
    imgSrc: "/assets/images/certificates/shecodes-responsive-ao.png",
  },
  {
    name: "SheCodes AI",
    link: "https://www.shecodes.io/certificates/d898f74954cdd00c4867e54932dff15e?_gl=1*1qju3h7*_gcl_au*MTcxOTMzMDg5OC4xNzE1MzE3MzM0",
    imgSrc: "/assets/images/certificates/shecodes-ai.png",
  },
  {
    name: "SheCodes Plus",
    link: "https://www.shecodes.io/certificates/c3e76188733b5cec3f8294114f524734",
    imgSrc: "/assets/images/certificates/shecodes-plus-ao.png",
  },
  {
    name: "SheCodes Basics",
    link: "https://www.shecodes.io/certificates/ebadef848e6d1719fe233ab31ea678a3",
    imgSrc: "/assets/images/certificates/shecodes-basics-ao.png",
  },
];

function Certifications() {
  return (
    <div className="Certifications row m-auto">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className="certificate col-6 col-sm-4 mt-1 mt-md-4 p-1 p-sm-2"
        >
          <a href={certificate.link} target="_blank" rel="noreferrer">
            <img src={certificate.imgSrc} alt={certificate.name} width="100%" />
          </a>
          <h3 className="text-center mt-2">{certificate.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
