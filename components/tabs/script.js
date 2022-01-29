const buttons = document.querySelectorAll(".btn");

const changeColor = (e) => {
    // console.log(e.target.classList);
    buttons.forEach(item => {item.classList.remove('active')});
    if (e.target.classList.contains("material-icons")){
        // console.log(e.target);
        // console.log(e.target.parentNode);
        e.target.parentNode.classList.add("active");
    }else {
        e.target.classList.add('active');
    }
}

buttons.forEach(item => {item.addEventListener("click", changeColor)});