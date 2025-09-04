import LinkedList from "./list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log(list.toString());
// console.log(list.size());
// console.log(list.contains("dog"));
// console.log(list.contains("monkey"));
// console.log(list.find("dog"));
// console.log(list.find("monkey"));
// list.pop();
// console.log(list.toString());
// console.log(list.size());
console.log(list.at(100))