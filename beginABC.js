var track = 0;

let currentDroppable = null;

    ball.onmousedown = function(event) {

      let shiftX = event.clientX - ball.getBoundingClientRect().left;
      let shiftY = event.clientY - ball.getBoundingClientRect().top;

      ball.style.position = 'absolute';
      ball.style.zIndex = 1000;
      document.body.append(ball);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppableB');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        bb.onmouseup = null;
      };

    };
    // END
    bee.onmousedown = function(event) {

      let shiftX = event.clientX - bee.getBoundingClientRect().left;
      let shiftY = event.clientY - bee.getBoundingClientRect().top;

      bee.style.position = 'absolute';
      bee.style.zIndex = 1000;
      document.body.append(bee);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        bee.style.left = pageX - shiftX + 'px';
        bee.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        bee.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        bee.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppableB');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      bee.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        bee.onmouseup = null;
      };

    };
  // END
    dog.onmousedown = function(event) {

    let shiftX = event.clientX - dog.getBoundingClientRect().left;
    let shiftY = event.clientY - dog.getBoundingClientRect().top;

    dog.style.position = 'absolute';
    dog.style.zIndex = 1000;
    document.body.append(dog);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      dog.style.left = pageX - shiftX + 'px';
      dog.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      dog.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      dog.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppableD');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) { // null when we were not over a droppable before this event
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) { // null if we're not coming over a droppable now
          // (maybe just left the droppable)
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    dog.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      dog.onmouseup = null;
    };

  };
// END
    dolphin.onmousedown = function(event) {

let shiftX = event.clientX - dolphin.getBoundingClientRect().left;
let shiftY = event.clientY - dolphin.getBoundingClientRect().top;

dolphin.style.position = 'absolute';
dolphin.style.zIndex = 1000;
document.body.append(dolphin);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
dolphin.style.left = pageX - shiftX + 'px';
dolphin.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  dolphin.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  dolphin.hidden = false;

  if (!elemBelow) return;

  let droppableBelow = elemBelow.closest('.droppableD');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppable(currentDroppable);
    }
  }
}

document.addEventListener('mousemove', onMouseMove);

dolphin.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  dolphin.onmouseup = null;
};

};
//END

  var dCollect = $('.dCollect');
  var bCollect = $('.bCollect');
  var word = $('.word');

    function enterDroppable(elem) {
      elem.style.background = 'pink';
      if (track == 0){
      track++;
      ball.style.visibility = 'hidden';
      bee.style.visibility = 'visible';
      word.append(`<h2 class = "words"> It's a <p class = "blue">BALL </p> </h2>`);
      bCollect.append(`<img style = "width: 50px; height: 50px; margin-top: 20px;" src = "https://en.js.cx/clipart/ball.svg">`);
    }else if (track == 1){
      track++;
      bee.style.visibility = 'hidden';
      dog.style.visibility = 'visible';
      word.empty();
      word.append(`<h2 class = "words"> It's a <p class = "blue">BEE </p> </h2>`);
      bCollect.append(`<img style = "width: 50px; height: 50px; margin-left: 20px;margin-top: 20px;" src = "bee.png">`);
    }else if (track == 2){
      track++;
      dog.style.visibility = 'hidden';
      dolphin.style.visibility = 'visible';
      word.empty();
      word.append(`<h2 class = "words"> It's a <p class = "blue">DOG </p> </h2>`);
      dCollect.append(`<img style = "width: 110px; height: 50px; margin-left: 20px; margin-top: 20px;" src = "dog.png">`);
    }
    // else if (track == 3){
    //   track++;
    //   dolphin.style.visibility = 'hidden';
    //   // phone.style.visibility = "visible";
    //   dCollect.append(`<img style = "width: 90px; height: 50px; margin-left: 20px; margin-top: 20px;" src = "https://i.pinimg.com/originals/c8/42/6e/c8426e10f0ffcb5b285d3eba7d9bce1a.png">`);
    // }
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ball.ondragstart = function() {
      return false;
    };

    bee.ondragstart = function() {
      return false;
    };

    dog.ondragstart = function() {
      return false;
    };

    dolphin.ondragstart = function() {
      return false;
    };
