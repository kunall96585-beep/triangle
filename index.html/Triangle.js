// for(i=1; i<=5; i++)
// {
//     if(i<=1) {document.write(i), document.write("<br>")} else
//         if(i<=0) {document.write(i) , document.write("<br>")} 
//             if(i>=3) {document.write(i)} else
//                 if(i>=2){document.write(i) , document.write("<br>")} else
//                  {document.write(i)}
// };


// for(a=1; a<=20; a++)
// {
//     document.write("<br>"+a++)
// }

// document.write("<br>")

// for(a=2; a<=20; a++)
// {
//     document.write("<br>"+a++)
// }


// for(a=2; a<=50; a++)
// {
//     if(a%2==0)
//        document.write(" "+a)
// };
// document.write("<hr>")
// document.write("Odd")
// document.write("<hr>")
// for(b=3; b<=50; b++)
// {
//     if(b%2==0)
//         document.write(" "+b)
// }



// var a=0;
// for(b=1; b<=10; b++){

//     if(b%2==0){
//         document.write("+"+b)
//         a=a+b;}
//         else
//          {document.write("-"+b)
//         a=a-b;}
//     }

//     document.write("=");
//     document.write(a);


// var total=0;

// for(b=1; b<=10; b++){
//     var k=1/b
//     k=b+k
//     document.write("+ 1/"+b);
// }
// document.write("=",b)



// let UserName = "kunal";
// let likh = prompt("Enter name");
// while (likh != UserName) {
//     likh = prompt("What the !!!");
// }
// console.log("wow");


//1
document.write("Q1")
document.write("<br>");
document.write("<br>");
for (a = 1; a <= 5; a++) {
    for (b = 1; b <= a; b++) {
        document.write(b + " ")
    }
    document.write("<br>");
};

document.write("<br>");

//2
document.write("Q2")
document.write("<br>");
document.write("<br>");
for (a = 1; a <= 5; a++) {
    for (b = 5; b >= 6 - a; b--) {
        document.write(b + " ")
    }
    document.write("<br>");
};

document.write("<br>");
//3
document.write("Q3")
document.write("<br>");
document.write("<br>");
let num = 1;

for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= a; b++) {
        document.write(num + " ");
        num++;
    }
    document.write("<br>");
};

document.write("<br>");
//4
document.write("Q4")
document.write("<br>");
document.write("<br>");
for (let a = 5; a >= 1; a--) {
    for (let b = 1; b <= a; b++) {
        document.write(b + " ");
    }
    document.write("<br>");
};

document.write("<br>");
//5
document.write("Q5")
document.write("<br>");
document.write("<br>");
for (let a = 5; a >= 1; a--) {
    for (let b = 5; b >= a; b--) {
        document.write(b + " ");
    }
    document.write("<br>");
};

document.write("<br>");
//6
document.write("Q6")
document.write("<br>");
document.write("<br>");
for (let a = 0; a < 5; a++) {

    for (let s = 0; s < a; s++) {
        document.write("&nbsp;", "&nbsp;", "&nbsp;");
    }

    for (let b = 5 - a; b >= 1; b--) {
        document.write(b + " ");
    }

    document.write("<br>");
};
//7
document.write("Q7")
document.write("<br>");
document.write("<br>");
for (var a = 1; a <= 5; a++) {
    for (var b = a; b >= 1; b--) {
        document.write("&nbsp" + "&nbsp" + " ");
    }
    for (var c = a; c <= 5; c++) {
        document.write(c + " ")
    }
    document.write("<br>")
};
//8
document.write("Q8")
document.write("<br>");
document.write("<br>");
for (var a = 1; a <= 5; a++) {
    for (var b = a; b <= 5; b++) {
        document.write("&nbsp" + "&nbsp" + " ");
    }
    for (var c = a; c >= 1; c--) {
        document.write(c + " ")
    }
    document.write("<br>")
};
document.write("<br>")
//9
document.write("Q9")
document.write("<br>");
document.write("<br>");
for (let a = 5; a >= 1; a--) {
    for (let b = a; b >= 1; b--) {
        document.write("&nbsp" + "&nbsp" + " ");
    }
    for (let c = a; c <= 5; c++) {
        document.write(c + " ")
    }
    document.write("<br>")
};
document.write("<br>")
//10
document.write("Q10")
document.write("<br>");
document.write("<br>");
for (let a = 1; a <= 5; a++) {
    for (let b = a; b <= 5; b++) {
        document.write("&nbsp" + "&nbsp"+" ");
    }
    for (let c = a; c >= 1; c--) {
        document.write(c+" ")
    }
    for (let d = 2; d <= a; d++) {
        document.write(d+" ")
    }
    document.write("<br>")
};
document.write("<br>")
//11
document.write("Q11")
document.write("<br>");
document.write("<br>");
for (let a = 1; a <= 6; a++) {
    for (let b = a; b <= 6; b++) {
        document.write("&nbsp" + "&nbsp"+" ");
    }
    for (let c = a; c >= 1; c--) {
        document.write(c+" ")
    }
    for (let d = 2; d <= a; d++) {
        document.write(d+" ")
    }
    document.write("<br>")
};
for (let a = 5; a >= 1; a--) {
    for (let b = a; b <= 6; b++) {
        document.write("&nbsp" + "&nbsp"+" ");
    }
    for (let c = a; c >= 2; c--) {
        document.write(c +" ")
    }
    for (let d = 1; d <= a; d++) {
        document.write(d +" ")
    }
    document.write("<br>")
};
