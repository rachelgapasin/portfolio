const certificates = [
  {
    name: "SheCodes Max",
    link: "https://www.shecodes.io/certificates/95316-rachel-gapasin/max",
    imgSrc: "/images/certificates/shecodes-max.png",
  },
  {
    name: "SheCodes React Add-On",
    link: "https://www.shecodes.io/certificates/a6204df3b647cb48f2b9c115944308b9",
    imgSrc: "/images/certificates/shecodes-react-ao.png",
  },
  {
    name: "SheCodes React",
    link: "https://www.shecodes.io/certificates/9ee364a70a8ab36ff07bccd17829fd54",
    imgSrc: "/images/certificates/shecodes-react.png",
  },
  {
    name: "SheCodes Responsive Add-On",
    link: "https://www.shecodes.io/certificates/c087932c553fbc77d9843b25065370e9",
    imgSrc: "/images/certificates/shecodes-responsive-ao.png",
  },
  {
    name: "SheCodes Responsive",
    link: "https://www.shecodes.io/certificates/ad7da545886f9f76814368ce50c100cf",
    imgSrc: "/images/certificates/shecodes-responsive.png",
  },
  {
    name: "SheCodes Plus Add-On",
    link: "https://www.shecodes.io/certificates/c3e76188733b5cec3f8294114f524734",
    imgSrc: "/images/certificates/shecodes-plus-ao.png",
  },
  {
    name: "SheCodes Plus",
    link: "https://www.shecodes.io/certificates/a96d1d071654fec784e2d179bde97800",
    imgSrc: "/images/certificates/shecodes-plus.png",
  },
  {
    name: "SheCodes Basics Add-On",
    link: "https://www.shecodes.io/certificates/ebadef848e6d1719fe233ab31ea678a3",
    imgSrc: "/images/certificates/shecodes-basics-ao.png",
  },
  {
    name: "SheCodes Basics",
    link: "https://www.shecodes.io/certificates/1f6a00d8cbae34875c89e50c76d2e290",
    imgSrc: "/images/certificates/shecodes-basics.png",
  },
];

function displayCertificates() {
  const certificateContainer = document.getElementById("certificate-container");

  certificates.forEach((certificate) => {
    const certificateDiv = document.createElement("div");

    certificateDiv.className = "certificate col-sm-4 mt-4";
    certificateDiv.innerHTML = `
      <a
        href="${certificate.link}"
        target="_blank"
      >
        <img
          src="${certificate.imgSrc}"
          alt="${certificate.name} Certificate"
          width="100%"
        />
      </a>
      <h3 class="text-center mt-2">${certificate.name}</h3>
    `;

    certificateContainer.appendChild(certificateDiv);
  });
}

window.onload = displayCertificates;
