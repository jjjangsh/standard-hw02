import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Content />
      <Footer year={1999} />
    </div>
  );
}

export default App;
