      function closure()
      {
                    for(let i=1;i<=10;i++)
                    {
                    function x(i){setTimeout(() => {console.log("hello");},i*1000);}
                    x(i);
                   }
              }
                     console.log("hi jay");
                     closure();
//closure is a function along with its lexical environment







// const data='{"name":"John", "age":30, "city":"New York"}';
// parseddata=JSON.parse(data);
// console.log(typeof(data));
// console.log(typeof(parseddata));
// console.log(parseddata);
// console.log(parseddata.name);
// obj=JSON.stringify(parseddata);
// console.log(obj);




// function show(){
//     const a=1000;
//     console.log(a);
// }
// show();

// const promise = new Promise ((resolve, reject)=> 
// {
//   for(i=0;i<5;i++){
//                               setTimeout(() => {
//                               let value =20;
//                               if (value === 20) 
//                               {
//                                 resolve("Successfully got value "+value);
//                               }
//                                     else 
//                               {
//                                       reject("didnot got correct value and value obtained is "+value);
//                                     }
//                                       },i* 1000); 
//                                     }
// });
// promise.then((x)=>console.log(x),(error)=>console.log(error));



// p2=100;
// const p1 = new Promise ((resolve, reject)=> {
//  setTimeout(() => {
//   let value =1000;
//   if (value === 1000) 
//    {
//    resolve("Successfully got value "+value);
//     }
//    else {
//    reject("did not got value and value obtained is "+value);
//     }
//    }, 200);
//  });

// p1.then((x)=>{console.log(x)},
//             (err)=> {console.log(err)});
// Promise.all([p2,p1]).then((values)=>console.log("values obtained are"+values));



