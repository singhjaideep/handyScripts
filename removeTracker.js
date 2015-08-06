javascript: (function() {
  thisurl = document.getElementsByClassName("what code")[0].innerHTML;
  alert(thisurl);
  if (thisurl.search("http://www.shareasale.com/r.cfm?") != -1) {
    substring = thisurl.search("ink=");
  }
  else {
    substring = thisurl.search("url=");
  }
  sliced = thisurl.slice([substring + 4], thisurl.length);
  decoded = decodeURIComponent(sliced);
  alert(decoded);
  window.location.href = decoded
})();
