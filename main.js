menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza"];

function getmenu(){
    
    var htmldata;
    htmldata = "<ol class ='menulist'>";
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata = htmldata + '<div class="cards">'+'<img src ="images/PizzaMan.gif"/>'+ menu_list_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
//Complete the code
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}
function DeliverPizza(){

    window.alert("Pizza Has Been Delivered.");
    document.getElementById("PizzaMan").style.overflow="hidden";

}

function Pizza(){
    var h = 1;
    window.alert("Order has Succesfully Been Saved")
    h = h++;
}


