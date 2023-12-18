1. In package.json all the dependencies are stored
2. Agar 2-3 elements ko ek saath daalne hota hai toh uske liye <></> *react fragment* use karte hai 
3. Props allow you to pass dynamic data into react components , props are just arguemnts that you pass into react comp, they are passed via attributes...
4. Every component has a built-in *props* arguement
5. State is a plain JS object used by react to represent a piece of info about the components current situation.
6. for this we have to import {useState} hook from react.
7. Whenever you call something as a function and it starts with *use* we call it a *Hook*
8. first part is the name that you give and the second part is the *setter* function which starts with *set*variableName 
9. An *Event* is an action which can be triggered as a result of the action by the user. For Ex: A mouse click or a button press is an event.
10. Calling of every hook is different, useState is called in this way:
  const[*anyname*, *setAnyname*]=useState(*as a function*);
useEffect is called in this way:
  useEffect(*a function is passed inside this as a parameter*)  
11. useEffect allows us to something on an effect.Whenever we will load the page, this will run!
12. Important Rule: *Never mutate or alter the State manually* , State varibales can only be changes using a setter function!
13. We have a second param to the useEffect which is the dependency array, yahan pe jo bhi pass karenge vo ye baat ka dhyaan rakh ke karenge ki har baar window load hoga toh vo wala variable baar baar reinitialize hoga..we only use the dependency array *if we only want to call it in the start* 
14. while making the api fetch, we use useEffect as jab jab window reload hoga, tab tab API fetching karna hoga.
15. Is block mein await aur async ka use karte hain taki hum ek asynchronous (async) kaam ko handle kar sakein. Yeh kaam kisi bhi waqt par execute ho sakta hai, lekin hum chahte hain ki jab tak yeh complete nahi hota, tab tak humara code ruke nahi.

async Function:

async likhne se, hum bata rahe hain ki yeh function asynchronous hai. Matlab, ismein kuch kaam hone wala hai jo time lagega.
await Operator:

await likhne se, hum bata rahe hain ki yeh line execute hogi jab tak jo bhi kaam await ke saath likha hua complete nahi hota.
Yahaan ek example hai:

javascript
Copy code
router.get("/create", async function (req, res) {
  // async function start
  const createdUser = await userModel.create({
    username: "Adi",
    age: 19,
    name: "Aditya",
  });
  // async function end

  res.send("createdUser");
});

Yahaan, userModel.create ek asynchronous kaam hai, kyunki yeh database mein kuch add kar raha hai jo thoda time le sakta hai. Hum chahte hain ki jab tak yeh complete nahi hota, tab tak const createdUser mein kuch nahi store kare.

Agar hum await nahi likhte, toh const createdUser mein promise milta, jo ki ek tarah ka placeholder hota hai jo future mein resolve hoga. Lekin await likhne se, jab tak woh kaam complete nahi hota, tab tak yeh line execute nahi hoti.

Fir hum res.send("createdUser") likh kar response bhejte hain ki kaam ho gaya aur createdUser variable ka value bhi dikha sakte hain.

Toh, async aur await ka use karke hum ek aisa environment create karte hain jisme hum asynchronous kaam ko synchronous taur par likh sakte hain, jo ki code ko padhne aur samajhne mein madad karta hai.
16. <input/> is a self closing tab that has it's own properties.
