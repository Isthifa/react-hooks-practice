import React, { useEffect, useRef, useState } from "react";

//what is react hooks?
//Hooks are functions that let you “hook into” React state and lifecycle features from function components.
//Hooks don’t work inside classes — they let you use React without classes.
//Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class.
//useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

export default function App() {
   // const [counter,setCounter]=useState(0); //useState is used to set the state of the variable, useState(0) is used to set the initial value of the variable
   // const [name,setName]=useState("");

   //using object
    const [state,setState]=useState({
        counter:0,
        name:""
    });

    const count=useRef(0);

    const inputelement=useRef(); //useRef is used to get the reference of the element
    console.log(inputelement);


    //whenever we work with object we need to use spread operator and prevState to update the state of the object

    useEffect(()=>{
        document.title=`${state.name} has clicked ${state.counter} times`;
    },[state.counter,state.name]);

    //here we have passed the second argument as an array, so useEffect will run only when the value of counter changes
    //on every render of the component useEffect will run, but if we pass the second argument as an array then useEffect will run only when the value of the variable in the array changes
    //if we pass an empty array as the second argument then useEffect will run only once, on mount and unmount of the component
    
    //useRef
    useEffect(()=>{
        count.current=count.current+1;
    });


   const handleChange=(e)=>{
        setState({
            ...state,
            name:e.target.value});
    }
    const increment=()=>{
        setState((prevState)=>({
            ...state,
            counter:prevState.counter+1
        }));
    }
    const decrement=()=>{
        setState((prevState)=>({
            ...state,
            counter:prevState.counter-1
        }));
    }
    const show=()=>{
        console.log(inputelement.current);
        inputelement.current.style.color="red";
        inputelement.current.focus();
        inputelement.current.style.border="2px solid red";
        inputelement.current.style.borderRadius="5px";
        inputelement.current.style.backgroundColor="yellow";

    }

    console.log(state);
    return (
        <div>
            <input type="text" ref={inputelement} value={state.name} onChange={handleChange}/>
            <h1>{state.name} Counter value {state.counter}</h1>
            <h1>Count value {count.current}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={show}>show</button>
        </div>
    )
}
const initialState = {count: 0};

function reducer(state, action) {
 switch (action.type) {
     case 'increment':
       return {count: state.count + 1};
       break;
     case 'decrement':
       return {count: state.count - 1};
       break;
     default:
       throw new Error();
   }
 }


//useEffect in react hooks
//useEffect is a hook that allows you to perform side effects in function components.
//It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount.
//useEffect is a function that takes two arguments, a function and an array. The function argument is the effect function and the array argument is an optional array of dependencies.
//useEffect is called after every render of the component. If you want to run the effect only once (on mount and unmount), you can pass an empty array ([]) as the second argument.
//it is optional to pass the second argument in useEffect, if you don't pass the second argument then useEffect will run after every render of the component.
//eg: useEffect(()=>{console.log("useEffect")},[]); //useEffect will run only once
//variation of useEffect
//useEffect with empty array as second argument
//useEffect with array as second argument
//useEffect with no second argument
//useEffect with cleanup function
//useEffect with cleanup function and array as second argument
//useEffect without dependency



//useContext in react hooks
//useContext is a hook that allows you to inject values into the component without the need to pass those values through each component down the tree.
//useContext is a function that takes a context object (the value returned from React.createContext) and returns the current context value for that context.
//The useContext hook is used to access the context values.
//useContext is a hook that accepts a context object and returns the current value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
//When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.
//eg: const value = useContext(MyContext);
//useContext(MyContext) only lets you read the context and subscribe to its changes. You still need a <MyContext.Provider> above in the tree to provide the value for this context.

//useReducer in react hooks
//useReducer is a hook that is used for state management. It is an alternative to useState.
//useReducer is a hook that accepts a reducer function and an initial state and returns the current state paired with a dispatch method.
//useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
//useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
//eg: const [state, dispatch] = useReducer(reducer, initialArg, init);
//useReducer is related to useReducer in JavaScript. It accepts a reducer function with the application initial state, returns the current application state, then dispatches a function.
//useReducer is a hook that accepts a reducer function and an initial state and returns the current state paired with a dispatch method.


//useRef in react hooks
//useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
//The returned object will persist for the full lifetime of the component.

//useReducer example
//eg 1: 
// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//       break;
//     case 'decrement':
//       return {count: state.count - 1};
//       break;
//     default:
//       throw new Error();
//   }
// }
