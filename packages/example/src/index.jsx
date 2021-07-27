import _ from "lodash";
import module from "./module";

console.log("hello");
console.log(_.map([1, 2, 3, 4, 5], (value) => value * 2));
console.log(module());
