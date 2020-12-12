
// elements to manipulate
const c2 = document.querySelector('.c-2');
const c3 = document.querySelector('.c-3');
const c6 = document.querySelector('.c-6');
const c8 = document.querySelector('.c-8');
const c9 = document.querySelector('.c-9');

//counter for clicks
// we have 4 types of blocks positions and 1 default type 3*3
let count = 1;


//listening the clicks on document 
document.addEventListener("click", () => {
  const content = document.querySelector('.content');
  
  switch (count) {
    case 1:
      count++;

      //there we hide unnecessary blocks
      c2.hidden = true;
      c9.hidden = true;
      //we are changing the grid template areras of content container
      content.style.gridTemplateAreas = '"c1 c1 c3" "c4 c5 c6" "c7 c8 c6"';
      break;

    case 2:
      count++;
      // show/hide necessary blocks
      c2.hidden = false;
      c3.hidden = true;
      c6.hidden = true;

      content.style.gridTemplateAreas = '"c1 c2 c2" "c4 c5 c5" "c7 c8 c8"';
      break;

    case 3:
      count++;
      c3.hidden = false;

      content.style.gridTemplateAreas = '"c1 c2 c3" "c4 c5 c5" "c7 c8 c8"';
      break;

    case 4:
      count++;
      c6.hidden = false;
      c8.hidden = true;

      content.style.gridTemplateAreas = '"c1 c2 c3" "c4 c5 c6" "c7 c5 c6"';
      break;

    default: 
      count = 1;
      c8.hidden = false;
      c9.hidden = false;

      content.style.gridTemplateAreas = '"c1 c2 c3" "c4 c5 c6" "c7 c8 c9"';
  }
 })
