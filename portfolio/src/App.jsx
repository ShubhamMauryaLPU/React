import Header from './components/Header';
import About from "./components/About";
import './App.css';
import Table from './Table';
function App() {
  return (
    <>
      <Table f="box" a="left" b={2} w="20px"/>
      <Table f="below" a="left" b={2} w="20px"/>
      <Table f="above" a="left" b={2} w="20px"/>
      <Table f="hsides" a="left" b={2} w="20px"/>
      <Table f="lhs" a="left" b={2} w="20px"/>
      <Table f="rhs" a="left" b={2} w="20px"/>
    </>
  )
}

export default App;
