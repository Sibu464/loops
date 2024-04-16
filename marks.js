const prompt=require('prompt-sync')();
var mark1=0;
var mark2=0;
var mark3=0;
var sum=0;
var average=0;
var status="Fail";
var name="";
people={};
console.log(people.Jake[0]);

for(let index=0;index<3;index++){
name=prompt("Enter name of person: ");
mark1=parseFloat(prompt("enter mark 1: "));         
mark2=parseFloat(prompt("Enter mark 2: "));
mark3=parseFloat(prompt("Enter mark 3: "));
people[name]=[mark1,mark2,mark3];

// sum=mark1+mark2+mark3;
// average=sum/3;
// console.log(`Average: ${average}`);

// if(average>-1&&average<50){
//     status="Fail";
// }
// else if(average>=50&&average<75){
//     status="Pass";
// }
// else if(average>=75){
//     status="Pass with Distinction";
// }
// else if(average>100){

// }
// console.log("{name} final mark is: ${average} your result is: ${status}\n#######################");

}
for(let i=0;i<3;i++){
    console.log(people[0])
}


