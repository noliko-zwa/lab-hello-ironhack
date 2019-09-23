import React, { component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
const greeteing = <h1>Say Hello to ReactJS </h1>;

const style = {
  backgroundColor: "rgb(0,32,61)",
  color: "rgb(255,255,255)",
};
const buttonStyle = {
  backgroundColor: "white",
  padding: "20px",
  fontSize: "2rem",
  borderStyle: 'none',
  borderRadius: "10px"
};

const navImg = {
  logo: "/images/ironhack-logo.svg",
  menu: "/images/menu-top.svg",
  reactLogo: "/images/react-logo.svg"
};

const topicImg = {
  icon1: "/images/icon1.png",
  icon2: "/images/icon2.png",
  icon3: "/images/icon3.png",
  icon4: "/images/icon4.png"
};

const title = (
  <h1>Say hello to<br></br> ReactJS</h1>
);
const comment = (
  <h5>
    You will learn a Frontend <br></br>
    framework from scratch. to <br></br>
    become an Ninka Developer.
  </h5>
);

const topic = {
  topic1:"Declarative",
  topic2:"Components",
  topic3:"Single-Way",
  topic4:"JSX"
};

const topicText ={
    topic1:"React makes it painless to create interactive UIs.",
    topic2:"Build encapseulalated components that manage their state",
    topic3:"A set iimutable values are passed to the component's",
    topic4:"Statically-typed. designed to run on modern browsers"
}


const article = (
  <section className="topic">
    <article className="topicImg">
      <img src={topicImg.icon1} />
    </article>
    <article className="topicText">
      <h4>{topic.topic1}</h4>
      <article className="detailText">{topicText.topic1}</article>
    </article>
  </section>
);

const article2 = (
  <section className="topic">
    <article className="topicImg">
      <img src={topicImg.icon2} />
    </article>
    <article className="topicText">
      <h4>{topic.topic2}</h4>
      <article className="detailText">{topicText.topic2}</article>
    </article>
  </section>
);

const article3 = (
  <section className="topic">
    <article className="topicImg">
      <img src={topicImg.icon3} />
    </article>
    <article className="topicText">
      <h4>{topic.topic3}</h4>
      <article className="detailText">{topicText.topic3}</article>
    </article>
  </section>
);

const article4 = (
  <section className="topic">
    <article className="topicImg">
      <img src={topicImg.icon4} />
    </article>
    <article className="topicText">
      <h4>{topic.topic4}</h4>
      <article className="detailText">{topicText.topic4}</article>
    </article>
  </section>
);



const element = (
  <div>
    <nav style={style}>
      <img src={navImg.logo} />
      <img src={navImg.menu} />
    </nav>

    <main style={style}>
      <section className="title-part">
        <article className="titleText">
          {title}
          {comment}
        </article>
        <article className="button">
          <button style={buttonStyle}>Awsome!</button>
        </article>
      </section>
    </main>

    <section className="topicWrapper">
      <article className="topics"> {article}</article>
      <article className="topics"> {article2}</article>
      <article className="topics"> {article3}</article>
      <article className="topics"> {article4}</article>
    </section>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
