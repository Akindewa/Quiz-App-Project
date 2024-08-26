let questions = [
    {
    numb: 1,
    question: "What is the output of typeof undefined?",
    answer: "undefined",
    options: [
      "object",
      "null",
      "undefined",
      "boolean"
    ]
  },
    {
    numb: 2,
    question: "Which method converts a JSON string into a JavaScript object?",
    answer: "JSON.parse()",
    options: [
      "JSON.stringify()",
      "JSON.objectify()",
      "JSON.parse()",
      "JSON.toObject()"
    ]
  },
    {
    numb: 3,
    question: "Which of the following is not a JavaScript data type?",
    answer: "Character",
    options: [
      "Character",
      "Boolean",
      "String",
      "Number"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },

  {
    numb: 6,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 7,
    question: "How do you create a function in JavaScript?",
    answer: "function myFunction() {}",
    options: [
      "function:myFunction() {}",
      "create myFunction() {}",
      "function myFunction() {}",
      "function = myFunction() {}"
    ]
  },

  {
    numb: 8,
    question: "Which operator is used to assign a value to a variable?",
    answer: "=",
    options: [
      "=",
      "==",
      "===",
      "!="
    ]
  },

  {
    numb: 9,
    question: "How can you add a comment in JavaScript?",
    answer: "// This is a comment",
    options: [
      "<-- This is a comment -->",
      "# This is a comment",
      "// This is a comment",
      "/ This is a comment"
    ]
  },

  {
    numb: 10,
    question: "What is the output of Boolean(0)?",
    answer: "false",
    options: [
      "false",
      "0",
      "undefined",
      "true"
    ]
  },

  {
    numb: 11,
    question: "Which built-in method combines the text of two strings and returns a new string?",
    answer: "concat()",
    options: [
      "add()",
      "append()",
      "attach()",
      "concat()"
    ]
  },

  {
    numb: 12,
    question: "How do you declare a variable that cannot be reassigned?",
    answer: "const",
    options: [
      "let",
      "var",
      "const",
      "immutable"
    ]
  },

  {
    numb: 13,
    question: "Which method is used to remove the last element from an array?",
    answer: "pop()",
    options: [
      "pop()",
      "shift()",
      "splice()",
      "remove()"
    ]
  },

  {
    numb: 14,
    question: "What does Array.prototype.map() return?",
    answer: "A new array with the results of calling a function on every element",
    options: [
      "The original array modified in place",
      "A new array with the results of calling a function on every element",
      "A string concatenation of array elements",
      "A new object with mapped values"
    ]
  },

  {
    numb: 15,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 16,
    question: "What is the purpose of setTimeout()?",
    answer: "Calls a function after a specified delay",
    options: [
      "Calls a function after a specified delay",
      "Calls a function repeatedly after a delay",
      "Stops the execution of a function",
      "Clears a timeout"
    ]
  },

  {
    numb: 17,
    question: "What is the value of null in JavaScript?",
    answer: "An object ",
    options: [
      "An object",
      "A number",
      " A string",
      " Undefined"
    ]
  },

  {
    numb: 18,
    question: "What will console.log('2' + 2) output?",
    answer: "'22'",
    options: [
      "'22'",
      "4",
      "'4'",
      "NaN"
    ]
  },

  {
    numb: 19,
    question: "Which keyword is used to define an asynchronous function in JavaScript?",
    answer: "async",
    options: [
      "async",
      "await",
      "defer",
      "setTimeout"
    ]
  },

  {
    numb: 20,
    question: "How do you write a conditional statement in JavaScript?",
    answer: "if (x > y) { }",
    options: [
      "if x > y then { }",
      "if x > y { }",
      "if (x > y) { }",
      "if x > y do { }"
    ]
  },

  {
    numb: 21,
    question: "What is the purpose of the reduce() method?",
    answer: "Reduces the elements of an array into a single value",
    options: [
      "Reduces the elements of an array into a single value",
      "Maps elements to new values",
      "Assigns a value",
      "Reverses the order of elements"
    ]
  },

  {
    numb: 22,
    question: "Which of the following is not a looping structure in JavaScript?",
    answer: "foreach",
    options: [
      "for",
      "while",
      "foreach",
      "do-while"
    ]
  },

  {
    numb: 23,
    question: "What does typeof [] return in JavaScript?",
    answer: "'object'",
    options: [
      "'object'",
      "'null'",
      "'undefined'",
      "'array'"
    ]
  },

  {
    numb: 24,
    question: "Which statement is used to stop a loop?",
    answer: "break",
    options: [
      "break",
      "stop",
      "exit",
      "return"
    ]
  },

  {
    numb: 25,
    question: "How can you convert a string to a number in JavaScript?",
    answer: "parseInt()",
    options: [
      "parseInt()",
      "toString()",
      "toNumber()",
      "change()"
    ]
  },

  {
    numb: 26,
    question: "What is the output of typeof NaN?",
    answer: "'number'",
    options: [
      "'number'",
      "'NaN'",
      "'undefined'",
      "'object'"
    ]
  },

  {
    numb: 27,
    question: "What is JSX in React?",
    answer: "A JavaScript syntax extension that looks similar to XML or HTML",
    options: [
      "A CSS extension",
      "A type of component",
      "A function in React",
      "A JavaScript syntax extension that looks similar to XML or HTML"
    ]
  },

  {
    numb: 28,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 29,
    question: "Which method in React is used to render a component to the DOM?",
    answer: "ReactDOM.render()",
    options: [
      "ReactDOM.render()",
      "React.render()",
      "React.create()",
      "ReactDOM.create()"
    ]
  },

  {
    numb: 30,
    question: "What is the purpose of the useState hook in React?",
    answer: "To add state to functional components",
    options: [
      "To create a new component",
      "To add state to functional components",
      "To handle side effects",
      "To render a component"
    ]
  },

  {
    numb: 31,
    question: "How do you pass data to a child component in React?",
    answer: "Using props",
    options: [
      "Using context",
      "Using state",
      "Using props",
      " Using a function"
    ]
  },

  {
    numb: 32,
    question: "What is the significance of the key prop in React?",
    answer: "Helps identify elements in the DOM and improves performance ",
    options: [
      "Adds a unique identifier to components",
      "Allows components to update dynamically",
      "Assigns a value",
      "Links components to external resources"
    ]
  },

  {
    numb: 33,
    question: "Which hook is used for side effects in React components?",
    answer: "useEffect",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer"
    ]
  },

  {
    numb: 34,
    question: "What does React.Fragment do?",
    answer: "Groups multiple elements without adding extra nodes to the DOM",
    options: [
      "Wraps a single element in a div",
      "Groups multiple elements without adding extra nodes to the DOM",
      "Creates a new component",
      "Splits a component into smaller fragments"
    ]
  },

  {
    numb: 35,
    question: "How do you handle events in React?",
    answer: "By using camelCase syntax for event handlers, e.g., onClick",
    options: [
      "By using HTML-style event attributes",
      "By using lowercase syntax for event handlers",
      "By using camelCase syntax for event handlers, e.g., onClick",
      "By adding event listeners directly to the DOM"
    ]
  },

  {
    numb: 36,
    question: "What is the purpose of React.memo?",
    answer: " To memoize the result of a component's render to prevent unnecessary re-renders",
    options: [
      "To bind functions to components",
      "To enhance performance by caching state",
      "To create a new instance of a component",
      "To memoize the result of a component's render to prevent unnecessary re-renders"
    ]
  },

  {
    numb: 37,
    question: "Which of the following is true about React components?",
    answer: "Components can be stateful or stateless",
    options: [
      "Components can be stateful or stateless",
      "Components must be class-based",
      "Components can only be defined using functions",
      "Components cannot manage their own state"
    ]
  },

  {
    numb: 38,
    question: "What does the useReducer hook do?",
    answer: "Manages more complex state logic by reducing actions ",
    options: [
      "Updates the state based on previous state",
      "Manages more complex state logic by reducing actions ",
      "Replaces useState for simple state management",
      "Handles side effects"
    ]
  },

  {
    numb: 39,
    question: "What is the correct command to create a new React project?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 40,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 41,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 42,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 43,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 44,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 45,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 46,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 47,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 48,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 49,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  },

  {
    numb: 50,
    question: "What does === do in JavaScript?",
    answer: "Compares values and types",
    options: [
      "Compares only values",
      "Compares values and types",
      "Assigns a value",
      "Check out for value only"
    ]
  }

  
];