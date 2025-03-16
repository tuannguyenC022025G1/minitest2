let ketqua =""
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        ketqua += "FizzBuzz";
    } else if (i % 3 === 0) {
        ketqua += "Fizz";
    } else if (i % 5 === 0) {
        ketqua += "Buzz";
    } else {
        ketqua += i;
    }
    ketqua += "<br/>"
}
document.getElementById("ketqua").innerHTML = ketqua