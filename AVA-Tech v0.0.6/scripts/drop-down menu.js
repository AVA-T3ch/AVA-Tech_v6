const menu = document.getElementById("Header_menu")

function menu_open(){
    if (menu.style.display == "flex"){
        menu.style.display = "none"
    } 
    else {
        menu.style.display = "flex"
    }
}

function menu_close() {
    menu.style.display = "none"
}