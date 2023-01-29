const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const DELAY = 5500;
const DELAY1 = 7500;
const $target1 = $(".recipe_text2");
const $target2 = $(".sentence");

setInterval(() => {
  $target1.addClass(CLASSNAME);
  setTimeout(() => {
    $target2.addClass(CLASSNAME);
  }, DELAY);

  setTimeout(() => {
    $target1.removeClass(CLASSNAME);
    setTimeout(() => {
      $target2.removeClass(CLASSNAME);
    }, DELAY1);
  }, TIMEOUT * 3);
}, TIMEOUT * 3);