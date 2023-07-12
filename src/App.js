import Navbar from "./components/Navbar";
import classes from "./App.module.css";

import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={classes.body}>
        <Form />
      </div>
    </>
  );
};

export default App;
