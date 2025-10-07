document.addEventListener("DOMContentLoaded", function() {
  const draggableElements = document.querySelectorAll(".draggable");

  draggableElements.forEach((element) => {
    element.addEventListener("mousedown", onMouseDown);
  });

  let offsetX, offsetY;
  let draggedElement = null;

  function onMouseDown(e) {
    if (e.target.classList.contains("header")) {
      draggedElement = e.currentTarget;
      const rect = draggedElement.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      draggedElement.classList.add("dragging");
      bringToFront(draggedElement);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
  }

  function onMouseMove(e) {
    if (draggedElement) {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      draggedElement.style.left = `${newX}px`;
      draggedElement.style.top = `${newY}px`;
    }
  }

  function onMouseUp() {
    if (draggedElement) {
      draggedElement.classList.remove("dragging");
      draggedElement = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
  }

    function bringToFront(element) {
    const divs = document.querySelectorAll(".draggable");
    let highestZIndex = 0;

    divs.forEach((div) => {
      const zIndex = parseInt(window.getComputedStyle(div).zIndex, 10);
      if (!isNaN(zIndex) && zIndex > highestZIndex) {
        highestZIndex = zIndex;
      }
    });

    element.style.zIndex = highestZIndex + 1;
  }
});

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

const iconButtons = document.querySelectorAll(".opennew");

iconButtons.forEach(button => {
  button.addEventListener("click", function() {
    const targetURL = button.getAttribute("data-target");
    if (targetURL) {
      window.open(targetURL, '_blank').focus();
    }
  });
});

function toggleDropUp() {
  var dropUpContent = document.getElementById("dropUpContent");
  dropUpContent.classList.toggle("show");
}

document.addEventListener("click", function(event) {
  var dropUpContent = document.getElementById("dropUpContent");
  var dropUpButton = document.querySelector(".box");

  if (!event.target.closest(".drop-up") && event.target !== dropUpButton) {
    dropUpContent.classList.remove("show");
  }
});

function openTab(divNumber) {
  var divToOpen = document.getElementById("window" + divNumber);
  divToOpen.style.display = "block";
  var tabToOpen = document.getElementById("tab" + divNumber);
  tabToOpen.style.display = "inline-block";
}

function closeTab(divNumber) {
  var divToClose = document.getElementById("window" + divNumber);
  divToClose.style.display = "none";
  var tabToClose = document.getElementById("tab" + divNumber);
  tabToClose.style.display = "none";
}

function loadWindow (elm){
	var frame1 = document.getElementById('frame1');
  var searchBar = document.getElementById('SearchBar');
  searchBar.textContent = 'https://ctrlaltsam.github.io/' + elm.dataset.src.slice(5,-5);
	frame1.src = elm.dataset.src;
}

function copyEmail(){
  navigator.clipboard.writeText("spencersama0@gmail.com");
  alert("Email copied to clipboard");
}