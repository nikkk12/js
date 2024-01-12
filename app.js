// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer: 

let input = Number(prompt("enter number"))
if(input > 0) {
    alert("დადებითი რიცხვი")
} else if(input===0){
    alert("არცერთი")
}
else{
    alert("უარყოფითი რიცხვი")
}


//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//asnwer: 

let a=+prompt("enter first:")
let x = prompt("enter operator:")
let b=+prompt("enter second:")
switch(x){
    case "+":
        console.log(a+b)
        break;
        case "-":
        console.log(a-b)
        break;
        case "*":
        console.log(a*b)
        break;
        case "/":
        console.log(a/b)    
        break;

// 3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

// asnwer: 

let a=+prompt("enter first:")
let x = prompt("enter operator:")
let b=+prompt("enter second:")
if("+"){
    console.log(a+b);
    if("-"){
        console.log(a-b);
        if("*")
        console.log(a*b);
    if("/"){
        console.log(a/b);
    }
    } else{"error"}
}


//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer: 


let firstName
let lastName
let email
let password
let phoneNumber

if (firstName!=="" && lastName!=="" && email!==""
&& password!=="" && phoneNumber!=="" )
{
    console.log("შენ დარეგისტრირდი წარმატებით")
}else{"input is required"}