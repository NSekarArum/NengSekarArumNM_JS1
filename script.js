//If, Else, nested If
let nilai = 60;

if (nilai > 70) {
    console.log("nilaimu aman")//if else;
} else {
    console.log("nilaimu harus segera diperbaiki")//if else;
}

if (nilai >= 90) {
    console.log('Nilai Kamu Sangat Bagus')//nested if
} else {
    if (nilai >= 80) {
        console.log('Nilai Kamu Bagus')//nested if
    } else {
        if (nilai >= 70) {
            console.log('Nilai Kamu Cukup Bagus')//nested if
        } else {
            if (nilai >= 60) {
                console.log('Nilai Kamu Kurang Bagus')//nested if
            } else {
                console.log('Kamu masih harus banyak belajar')//nested if
            }
        }
    }
}

//Switch Case
let grade = "B";

switch (grade) {
    case "A":
        console.log("Sangat Bagus!");
        break;
    case "B":
        console.log("Baik!");
        break;
    case "C":
        console.log("Cukup");
        break;
    default:
        console.log("Kurang");
}

//For Statement
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

//while do
let i=5;
while (i>0)
{
   console.log("Anak Ayam Turun "+i)//While
   i--;
}

let i=1;
do
{
   console.log("Belajar Javascript seru!")//DoWhile
   i++;
}
while (i<=10)
        

// function
function panggilan(name) {
    console.log("Hello, " + name + "! //function");
}