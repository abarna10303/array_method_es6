//Map methods
let numbers=[1,2,3,4,5];
let number_map=numbers.map(function(value){
    return value*5;
});
console.log("Numbers Array",numbers,"Using Value Modify Array",number_map);
let index_map=numbers.map(function(value,index){
    return index+5;
});
//Filter Methoods
console.log("Numbers Array",numbers,"Using Index Modify Array",index_map);

let filterArray=[72,87,50,43,45,79];
let filter_modify=filterArray.filter(function(Value,index){  
    return  Value<50;
});
//Every Methods
console.log("Filter Array",filterArray,"Modifyed Filter Array",filter_modify);
let everyArray=[20,27,60,87,23];
let every_modify=everyArray.every(function(value){
    return value>19});
console.log("Every Array",everyArray,"Result of Every Array",every_modify);
//some Methods

let someArraay=[12,23,45,67,88];
let some_result=someArraay.some(result=>result%2==0);
console.log("Some Array",someArraay,"Result of Some Array",some_result);

//find Methods

let findArray=[20,30,30,50,60];
let find_result=findArray.find(f_result=>f_result>30);
console.log("Find Array",findArray,"Result of Find Array",find_result);

//ForEach Method
let foreachArray=[1,2,3,4,5];
let foreach_result=foreachArray.forEach(element=>foreachArray.push(element*5));
console.log("ForEach Array",foreachArray);

//reduce Methods

let reduceArrayy=[10,9,8,7,6];
let reduce_result=reduceArrayy.reduce(function(p,c){
    return p+c;
},20);
console.log("Reduce Array",reduceArrayy,"Result of Reduce Array",reduce_result);
