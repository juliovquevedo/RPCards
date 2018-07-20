function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true));
    //var title = ev.target(document.getElementById(data).textContent);
//    document.getElementById(data).innerHTML = "Hello there";
//    document.getElementsByClassName("top-left")[0].innerHTML = 
//        "<h1>Best Sellers</h1>" +
//        "#3 Monster Veggie: ";
//    document.getElementsByClassName("hide-show")[0].style.display = "contents";
    populate(data, "div1");
}

function populate(d) {
    if (d == "drag1"){
        document.getElementById("div1").innerHTML = 
            "<h1 style='text-align:center;'>Best Sellers</h1>" +
            "<span style='color:green';>GREEN:</span> <span style='font-size: 1.2rem'>#3 Monster Veggie:</span> " +
            "Lettuce, tomatoes, carrots, cucumbers, " +
            "green peppers, mushrooms, spinach, sprouts, " +
            "swiss &amp; monterrey jack cheeses, dill " +
            "dressing.</br>" +
            "<span style='color:blue';>BLUE</span>: <span style='font-size: 1.2rem'>#10 California Turkey:</span> " +
            "Turkey Breast, cheddar cheese, ranch dressing " + 
            "Lettuce, tomatoes, bacon, avocado, " +
            "mango chutney, alfalfa sprouts. </br>" +
            "<span style='color:yellow; text-shadow:black 1px 1px'>YELLOW</span>: <span style='font-size: 1.2rem'>#12 Smokehouse Turkey:</span> " +
            "Smoked Turkey Breast, monterrey jack cheese, honey " +
            "mustard dressing Lettuce, tomatoes, bacon, avocado, </br>" +
            "<span style='color:red';>RED</span>: <span style='font-size: 1.2rem'>#15 Ranch Roast:</span> " +
            "Roast Beef, cream cheese, ranch dressing, sundried " + 
            "tomatoes, lettuce, tomatoes, bacon. </br>" +
            "<span>DOUBLE</span>: <span style='font-size: 1.2rem'>#30 Basil Cashew Chicken:</span> " +
            "Chicken Salad, basil mayo, lettuce, tomatoes, " +
            "avocado, cashews, alfalfa sprouts. </br>"
    }
}