import React from "react";
import ReactDOM from "react-dom";

import { Button, Header } from "@may-i/components";

const App: React.FC = () => (
  <div>
    <Header
      onCreateAccount={() => console.log("create account")}
      onLogin={() => console.log("on login")}
      onLogout={() => console.log("on logout")}
    />
    <h1>Hello World!!</h1>
    <Button label="wow" backgroundColor="red" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
