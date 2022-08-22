var dob = document.querySelector("#DOB");
var luckyNo = document.querySelector("#luckyNo")
var submit = document.querySelector("#submit");
var message = document.querySelector("#message");

submit.addEventListener("click", function submit() {

    message.style.display = "none";
    var input = dob.value.replace(/[^0-9]/g, "")
    let sum = 0;
    while (input > 0) {
        n = input % 10;
        sum += n;
        input = Math.trunc(input / 10);

        // console.log(n + " " + sum + " " + input)
    }
    if (input == 0 || luckyNo.value == 0) {
        alert("Enter all neccessary values")
        return
    }
    if (sum % luckyNo.value == 0) {

        showMessage("YAYYY.. Your bithday is luckyyyy 🥳 🥳")
    } else {

        showMessage("Sorry . Not very lucky number 😕")
    }
});

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}