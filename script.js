const fill = document.querySelector(".fill");
const emptyBoxes = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", startDrag);
fill.addEventListener("dragend", endDrag);

emptyBoxes.forEach((box) => {});

for (const box of emptyBoxes) {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dropDrag);
}

function startDrag() {
  this.className += " dragging";
  setTimeout(() => (this.className = "invisible"), 0);
}

function endDrag() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered"
}

function dragLeave() {
    this.className = "empty"}

function dropDrag() {
  this.className = "empty";
  this.append(fill);
}


//JQUERY

// const $fill = $(".fill");
// const $emptyBoxes = $(".empty");

// $fill.on("dragstart", function () {
//   $(this).addClass("dragging");
// });

// $fill.on("dragend", function () {
//   $(this).removeClass("dragging");
// });

// $emptyBoxes.on("dragover", function (e) {
//   e.preventDefault(); // Allows drop
// });

// $emptyBoxes.on("dragenter", function () {
//   $(this).addClass("hovered");
// });

// $emptyBoxes.on("dragleave", function () {
//   $(this).removeClass("hovered");
// });

// $emptyBoxes.on("drop", function () {
//   $(this).removeClass("hovered");
//   $(this).append($fill);
// });



//ANOTHER VANILLA JS METHOD

// const fill = document.querySelector(".fill");
// const emptyBoxes = document.querySelectorAll(".empty");

// fill.addEventListener("dragstart", startDrag);
// fill.addEventListener("dragend", endDrag);

// emptyBoxes.forEach((box) => {
//   box.addEventListener("dragover", dragOver);
//   box.addEventListener("dragenter", dragEnter);
//   box.addEventListener("dragleave", dragLeave);
//   box.addEventListener("drop", drop);
// });

// function startDrag() {
//   this.classList.add("dragging");
// }

// function endDrag() {
//   this.classList.remove("dragging");
// }

// function dragOver(e) {
//   e.preventDefault();
// }

// function dragEnter() {
//   this.classList.add("hovered");
// }

// function dragLeave() {
//   this.classList.remove("hovered");
// }

// function drop() {
//   this.classList.remove("hovered");
//   this.append(fill);
// }


// Mobile Touch Events
// fill.addEventListener("touchstart", startTouch, { passive: true });
// fill.addEventListener("touchmove", moveTouch);
// fill.addEventListener("touchend", endTouch);

// function startTouch(e) {
//     this.classList.add("dragging");
//     setTimeout(() => this.classList.add("invisible"), 0);
  
//     const touch = e.touches[0];
//     this.startX = touch.clientX;
//     this.startY = touch.clientY;
//   }
  
//   function moveTouch(e) {
//     const touch = e.touches[0];
//     const target = document.elementFromPoint(touch.clientX, touch.clientY);
  
//     if (target && target.classList.contains("empty")) {
//       target.classList.add("hovered");
//     }
//   }
  
//   function endTouch(e) {
//     const touch = e.changedTouches[0];
//     const target = document.elementFromPoint(touch.clientX, touch.clientY);
  
//     this.classList.remove("dragging", "invisible");
  
//     if (target && target.classList.contains("empty")) {
//       target.classList.remove("hovered");
//       target.append(fill);
//     }
//   }