import "./styles.css";
import React from "react";
function Header(props) {
  return (
    <>
      <header>
        <h1> {props.name} portfolio </h1>
      </header>
    </>
  );
}
function Main(props) {
  return (
    <section>
      <p> Here you'll find all my works. Look at what I made!</p>
      <ul style={{ textAlign: "left" }}>
        {props.works.map((work) => (
          <li key={work.id}>{work.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <>
      <p>Copyright {props.date}</p>
    </>
  );
}
const Works = ["TerraLife", "Itixana", "Beertap"];
const workObjects = Works.map((work, i) => ({ id: i, title: work }));
console.log(workObjects);
export default function App() {
  return (
    <>
      <div className="App">
        <Header name="Maëlys'" />
        <h2>
          <Main works={workObjects} />
        </h2>
        <h3>
          <Footer date={new Date().getFullYear()} />{" "}
        </h3>
      </div>
    </>
  );
}
