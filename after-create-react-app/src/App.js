import "./styles/App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  // for Header
  const bigTitleContent = <h1>Getting Started React</h1>;
  const subTitleContent = <h2>JavaScript Library</h2>;
  const learner = {
    firstName: "Andrew",
    lastName: "Le Nguyen",
  };
  const date = {
    weekDay: "Thu",
    monthDay: "28th",
    month: "Oct",
    year: "2021",
  };
  const learnerContent = (
    <p>
      Learner: {learner.firstName} {learner.lastName}
    </p>
  );
  const dateContent = <p>Date: {Object.values(date).join(" ")}</p>;

  // for main
  const prequisitesListItems = ["HTML", "CSS", "JavaScript"];
  const itemsWithLiTags = prequisitesListItems.map((item) => (
    <li key={item}>{item}</li>
  ));
  const operand1 = 20;
  const operand2 = 2;

  // for Footer
  const footerContent = <p>Copyright &copy; 2021</p>;

  return (
    <div className="app">
      <Header
        bigTitle={bigTitleContent}
        subTitle={subTitleContent}
        learner={learnerContent}
        date={dateContent}
      />
      <Main techList={itemsWithLiTags} op1={operand1} op2={operand2} />
      <Footer copy={footerContent} />
    </div>
  );
};

export default App;
