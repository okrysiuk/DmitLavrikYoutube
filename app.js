window.onload = function () {
  var items = document.querySelectorAll('.items .item');
  for (var i = 0; i < items.length; i++) {
    items[i].onclick = activeItem;
  }
  
  function activeItem(e) {
    console.log(e);
    this.classList.toggle('item-active');
  }

  setInterval(function() {
    var rand = mtRand(0, items.length - 1);
    activeItem.call(items[rand]);
  }, 500);

};

function mtRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}