import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./Hello";

const root = document.getElementById("app");
const hi = <Hello compiler="TypeScript" framework="React" />;

ReactDOM.render(hi, root);
