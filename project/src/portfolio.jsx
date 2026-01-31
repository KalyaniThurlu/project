
import FlowerImage from "./assets/flower.jpg";

const Portfolio = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{

          width: "100%",
          backgroundColor: "pink",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              src={FlowerImage}
              alt="flower"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "20px",
              }}
              className="img-fluid"
            />
          </div>

          <div className="col-6">
            <h2>Hi, I’m Kalyani</h2>
            <p>
              A React learner and aspiring web developer. I’m enthusiastic about
              creating responsive websites and continuously learning new skills
              to grow as a developer.
            </p>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
    
    {/* PROJECTS SECTION */}
<section id="projects" style={sectionStyle}>
  <h1 style={{ textAlign: "center" }}>Projects</h1>

  <div style={cardsContainer}>
    <h2 style={cardStyle}>Todo List</h2>
    <h2 style={cardStyle}>Portfolio</h2>
    <h2 style={cardStyle}>Weather App</h2>
    <h2 style={cardStyle}>Calculator</h2>
  </div>
</section>
    </>
  );
};




const linkStyle = {
  textDecoration: "none",
  color: "blue",
  fontSize: "16px",
  fontWeight: "500",
};

const sectionStyle = {
  width: "100%",
  backgroundColor: "blue",
  height:"70px",
  marginTop: "20px",
  color: "pink",
  padding: "10px",
};


const cardsContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px",
  marginTop: "30px",
  padding: "0 40px",
};

const cardStyle = {
  backgroundColor: "pink",
  color: "black",
  padding: "20px",
  width:"60%",
  borderRadius: "12px",
  textAlign: "center",
  justifyContent:"center",

  fontWeight: "600",
  cursor: "pointer",
  height:"250%",
  transition: "0.3s ease",
};
const h2={
  justifyContent:"center",
  textAlign:"center",
  
}

export default Portfolio;


