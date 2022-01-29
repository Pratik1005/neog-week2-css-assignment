const links = document.querySelectorAll(".link");
const icons = document.querySelectorAll(".material-icons");
const option = document.querySelector(".options");

const changeColor = (e) => {
    icons.forEach(item => item.style.color = "rgba(0,0,0,0.6)");
    links.forEach(item => item.classList.remove('clicked'));
    links.forEach(item => item.style.backgroundColor = "");
    e.target.classList.add('clicked');
    // console.log(e.target.firstElementChild);
    let icon = e.target.firstElementChild;
    icon.style.color = "#6200eede";
    if (e.target.id === "option") {
        option.classList.toggle("show-option");
    }
}

const iconColor = (e) => {
        console.log(e.target.classList);
}

const changeBackground = (e) => {
    if (e.target.classList.contains("clicked")) {
         e.target.style.backgroundColor = "rgba(98, 0, 238, 0.2)";
    }
}

links.forEach(item => item.addEventListener("click", changeColor));
links.forEach(item =>  item.addEventListener("mouseover", changeBackground))
icons.forEach(item => item.addEventListener("click", iconColor));
