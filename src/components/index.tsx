import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./Hello";
import { Header } from "./header/Header";

const root = document.getElementById("app");
const hi = <Hello compiler="TypeScript" framework="React" />;


ReactDOM.render(
    <div>
        <Header title="React" />
        <Header title="2nd Title" />
        <Header title="3rd Title" />
        <Header title="4th Title" />
    </div>
    
    , root);
