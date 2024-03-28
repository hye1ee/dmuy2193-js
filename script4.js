const conditional = (arg1) => {
  if (typeof arg1 == "string") {
    alert("This is a string🍉");
  } else if (typeof arg1 == "number") {
    alert("This is a number🍑");
  } else {
    alert("This is an other type!🍄");
  }
};

conditional(8);
// conditional("hi");
// conditional(true);
