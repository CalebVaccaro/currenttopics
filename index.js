/*
    In this file are several tasks for you to complete (they are each marked
    with "--- TASK ---"). The goal here is to take a moment to gauge your understanding
    of the material, so we both know where you are with things. 

    My expectations:
    - If something is unclear or you don't understand the concept, ask me to explain
      it again. This is what I'm looking for here, what you're uncomfortable with.
    - Complete each exercise.
    - Submit a link to your fork of this file to the mycourses dropbox, and copy the
      text out of here into the text submission as well (just for redundancy).
    - This will be due before your next class period.
    - It will be graded for correctness, so hound me with questions until you understand
      it well enough to complete.

    Fork this file, and simply write your answers into the text here, below each
    task's prompt. Make sure to test everything with console.log's and by using
    the REPL to the right (after you hit the Run button above).
*/

// CALEB VACCARO
// Current Topics

// It's dangerous to go alone, take this.
// Use it where I ask you to compose functions.
//TODO COMPOSE WHEN NEEDED
const compose = (f, g) => (
    (x) => f(g(x))
  );
  
  /* --- TASK ---
  
    Write 4 arrow functions to:
    1. Take two numbers as parameters, and return their sum
    2: get the last element of an array, or null if its empty
    3: Take no parameter, but return your first and last names in an array 
       like ["Travis", "Stodter"]
    4. Copy whatever object is passed in, and return the copy
    5. Accept two numbers, and return an arrow function that will accept 
       no parameters, but itself return the sum.
    
    The first has been written for you; please copy its style in writing the 
    other 4. Make sure to test each function by logging its output, and 
    hitting play above.
  */

  // Task Answers
  const sum = (a, b) => a + b;
  const lastElement = (arr) => arr.pop(); 
  const name = () => ["Caleb", "Vaccaro"];
  const copy = (obj) => Object.assign({}, obj);
  const retSum = (a, b) => function() {return a + b;}
  
  /* --- TASK ---
  
    Write curried versions of the following 4 functions. The first is completed for you.
  */
 const add_uncurried = (a, b) => a + b;

  const length_uncurried = (arr) => arr.length;
  
  const defaultTo_uncurried = (defaultValue, thing) => {
    if (thing === undefined || thing === null) {
      return defaultValue;
    }
    return thing;
  };
  
  const checkCondition_uncurried = (condition, ifTrue, ifFalse, value) => {
    const check = condition(value);
  
    if (check) return ifTrue;
    else return ifFalse;
  };
  
  // ---

  // Curried Answers
  const caleb_curried = a => b => a + b; // my style of curry 
  const add_curried = (a) => (b) => a + b;

  const length_curried = a => b => b.length;
  const default_curied = (a,b) => function(a){
    return a == null || a == undefined ? a : b; 
  }
  const condition_curried = (a) => function(a) {
    return condition(a);
  }
  
  
  /* --- TASK ---
  
    Using only the functions I've defined below and compose, write 3 new functions to:
    1. Add 2 to a number
    2. Add 2 to a number, then convert it to a string.
    3. Accept an array of strings, and return the number of strings that are shorter
       than 4 characters.
  */
  const add1 = (n) => n + 1;
  const numToString = (n) => "" + n;
  const filter = (filteringFunc) => (array) => array.filter(filteringFunc);
  const length = (array) => array.length;

  // Created Functions
  function add2(d){
    return add1(add1(d));
  }

  // Answers to 1-3
  let x = add2(x);
  let y = numToString(add2(y));
  let z = (s) => filter(s => s.length < 3)(s);
  
  /*
    Consider the monoid append method, which we spoke about last week. Remember
    that its purpose is to "add" or "combine" two different things of the same type.
    For exampe, shapes, or integers. This combination must be associative, meaning we
    can combine multiple things in any order we like, as long as we don't shift things
    around (for instance, append(a, append(b, c)) == append(append(a, b), c), but 
    append(a, append(b, c)) !== append(b, append(a, c)))
    
    Can you identify and define an "append" function for each of the following types? 
    The first is defined for you.
  
    1. integers
    2. strings
    3. functions
    4. arrays
  */

  // Answers
  const integerAppend = (a) => (b) => a + b;
  const stringAppend = (a) => (b) => a.concat(b);
  const funcAppend = (a) => (b) => ""+a.append(""+b);
  // const funcAppend = (a) => (b) => a.addEventListener(b);
  const arrayAppend = (a) => (b) => a.concat(b);
  
  
  /* --- TASK ---
  
    Each function below is impure in some way. Your task is to identify the side effect
    in each, and explain your thoughts oh why it might or might not be problematic.
  */

  //TODO ANSWER:
  /*
  - We can get the random index outside the function to make it more clean 
  - We then can take in the randomint as a param and return the array
  - (array, r) => {return array[r];}
  */
  const getRandomElement = (array) => {
    const randomIdx = Math.floor(array.length * Math.random());
    return array[randomIdx];
  };
  
  //TODO ANSWER:
  /*
  - The index of the array can be ArgumentOutofIndex
  - We are trying to index a single array index, but want to return the array
  - We can append a better slimmer option
  */
  const updateElement = (idx, value, array) => {
    array[idx] = value;
    return array;
  };
  
  /* --- TASK ---
  
    Decompose the following function into a series of functions.
    Update the code so that blowUpBadGuys is the composition of 
    two or more functions, each doing one thing. 
  */

  function CheckStateStatus(s) {
    s.status = 'fallen';
    if (s.hp <= 0) {
      s.hp = 0;
      s.status = 'dead';
    }
  }

  function takeDmg(p) {
    p.hp - 10;
  }

  function movePosition(p) {
    p.hp + 5;
  }

  function CheckGameStats(p) {
    compose(takeDmg(movePosition(p)));
  }

  // My Attempt
  const blowUpBadGuys = (badGuysArray) => {
    for (let i = 0; i < badGuysArray.length; i++) {
      CheckGameStats(badGuysArray[i]);
      CheckStateStatus(badGuysArray[i]);
    }

    return badGuysArray;
  };
  
  const someGuys = [{
    hp: 40,
    positionX: 20,
    status: 'standing'
  }, {
    hp: 13,
    positionX: 25,
    status: 'standing'
  }, {
    hp: 2,
    positionX: 22,
    status: 'standing'
  }];
  
  console.log('/// Bad guys result: \n', blowUpBadGuys(someGuys));