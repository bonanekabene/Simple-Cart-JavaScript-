


//hot dog btn
let quantity = document.getElementById("quantity");
let hotbtn = document.getElementById("hotbtn");

hotbtn.addEventListener("click", function() {
    //select html tags to write the result
    let hotqu = document.getElementById("hotqu");
    let total = document.getElementById("total");
    let hotdog = document.getElementById("hotdog")

    hotdog.style.display = "table-row-group";
    hotbtn.style.background = "dodgerblue";
    hotbtn.style.color = "white";

    //calculating amount
    let hotprice = 1000;
    realquantity = quantity.value;

    let hottotal = hotprice * realquantity;
    hotqu.innerText = realquantity;
    total.innerText = hottotal;

    
    //console.log(hottotal)
    //console.log(realquantity)

    //console.log(hottotal)
    hotbtn.innerText = "Added Cart"
});

//chicken dog btn
let chickenquantity = document.getElementById("chickg");
let chickbtn = document.getElementById("chickbtn");

chickbtn.addEventListener("click", function() {
    //select html tags to write the result
    let chick = document.getElementById("chickq");
    let chicktotal = document.getElementById("chicktotal");
    let chicken = document.getElementById("chicken")

    chicken.style.display = "table-row-group"
    chickbtn.style.background = "dodgerblue"
    chickbtn.style.color = "white"

    //calculating amount
    let chickprice = 5000;
    let chickqua = chickenquantity.value;

    let chickentotal = chickprice * chickqua;
    chicktotal.innerText = chickentotal;
    chick.innerText = chickqua;

    //console.log(chickqua)
    chickbtn.innerText = "Added Cart"
});

// pizza section function 
let pizzainput = document.getElementById("pizzainput");
let pizzabtn = document.getElementById("pizzabtn");

pizzabtn.addEventListener("click", function() {
    //select html tags to write the result
    let pizzanumber = document.getElementById("pizzanumber");
    let pizzatotal = document.getElementById("pizzatotal");
    let pizza = document.getElementById("pizza")

    pizza.style.display = "table-row-group"
    pizzabtn.style.background = "dodgerblue"
    pizzabtn.style.color = "white"

    //calculating amount
    let pizzaprice = 5000;
    let pizzadata = pizzainput.value;

    let pizzatotalda = pizzaprice * pizzadata;
    pizzatotal.innerText = pizzatotalda;
    pizzanumber.innerText = pizzadata;

    //console.log(pizzadata)
    pizzabtn.innerText = "Added Cart"
});



//barger section
let bargerinput = document.getElementById("bargerinput");
let bargerbtn = document.getElementById("bargerbtn");

bargerbtn.addEventListener("click", function() {
    //select html tags to write the result
    let bargernu = document.getElementById("bargernu");
    let bargerto = document.getElementById("bargertotal");
    let barger = document.getElementById("barger")

    barger.style.display = "table-row-group";
    bargerbtn.style.background = "dodgerblue";
    bargerbtn.style.color = "white";

    //calculating amount
    let bargerprice = 1000;
    let realbarger = bargerinput.value;

    let bargertotal = bargerprice * realbarger;
    bargernu.innerText = realbarger;
    bargerto.innerText = bargertotal;

    bargerbtn.innerText = "Added Cart"
});


//barger section
let chipsinput = document.getElementById("chipsinput");
let chipsbtn = document.getElementById("chipsbtn");

chipsbtn.addEventListener("click", function() {
    //select html tags to write the result
    let chipsnu = document.getElementById("chipsnu");
    let chipstot = document.getElementById("chipstot");
    let chips = document.getElementById("chips")

    chips.style.display = "table-row-group";
    chipsbtn.style.background = "dodgerblue";
    chipsbtn.style.color = "white";

    //calculating amount
    let chipsprice = 1000;
    let realchips = chipsinput.value;

    let chipstotal = chipsprice * realchips;
    chipsnu.innerText = realchips;
    chipstot.innerText = chipstotal;

    chipsbtn.innerText = "Added Cart"
});


