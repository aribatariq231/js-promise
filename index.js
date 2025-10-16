// alert("file linked");

// promises
const calculatepromise = new Promise((resolve, reject)=>{
    if(5==5){
        resolve({message: "5 was equal 5"});
    }
    else{
        reject({message: "5 was not equal 6"});
    }
});
console.log(calculatepromise);

// API'S 
calculatepromise
.then((res)=>{
    console.log("I'm then");
    console.log(res.message);
})
.catch((error)=>{
    console.log("I'm catch");
    console.log(erroe.message);
});

// chatbot promise
const chatbotpromsie = new Promise((resolve, reject) => {
    resolve({message: "5 was equal 5"});
})
chatbotpromsie
.then((res)=>{
    console.log("i am done");
    console.log(res.message);
})
.catch((error)=>{
    console.log("i am catch");
    console.log(error.message);
});

// JSON
const person = {
    Name: "Noor",
    Age: 21,
    FavClr: "Black",   
};
console.log(person);
const data = JSON.stringify(person);
console.log(data);
console.log(JSON.parse(data));
