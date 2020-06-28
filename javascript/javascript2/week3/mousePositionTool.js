/**Mouse position online tool
  Say we want to create an online tool where businesses can see where their users' mouse is most of the time. Businesses can now figure out if they have designed their website correctly.
  
  Lets create some js that will get the average x and y position of a user after 30 seconds.
  
  Before starting with this exercise, create a plan for how you will implement this! Maybe together with your mentor. */

let array = [{ sumX: 0 }, { sumY: 0 }, { count: 0 }];
let res = [];
/*let sumX = 0;
let sumY = 0;
let count = 0;*/

function onmousemove(e) {
  console.log('click at x: ' + e.pageX + ' y: ' + e.pageY);
  res = array.map((element) => {
    element.sumX += e.pageX;
    element.sumY += e.pageY;
    element.count++;
  });

  // console.log('sumX: ' + sumX + 'sumY: ' + sumY + 'count: ' + count);
}
console.log(res);
document.addEventListener('mouseclick', onmousemove);
setTimeout(console.log(res), 30000);
