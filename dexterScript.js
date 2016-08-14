window.onload = initLinks;

function initLinks() {
  var href;
  var as = document.getElementsByTagName("a");
  var butts = document.getElementsByClassName("button");
  for (var i = 0; i < as.length; i++ ) {
     href = as[i].getAttribute("href");
     clickLink(butts[i], href);

  }
  function clickLink(elm, url) {
    elm.onclick = function () {location.assign(url);};
  }
}
