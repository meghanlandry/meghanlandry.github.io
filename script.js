  var close = document.getElementById("close");
  var modalsCollection = document.getElementsByClassName("modal");
  var thumbsCollection = document.getElementsByClassName("flexItem");
  var charCollection = document.getElementsByClassName("char");
  var modals = Array.from(modalsCollection);
  var thumbs = Array.from(thumbsCollection);
  var chars = Array.from(charCollection);

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  // NavBar
  window.onscroll = function() {
    stickyNav();
  };

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

// modals
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", select);
    thumbs[i].addEventListener("mouseover", playPreview);
    thumbs[i].addEventListener("mouseout", pausePreview);
  }

  close.addEventListener("click", back);

  function select(i) {
    var x = getKey(this);
    if (x == (chars.length + 1)) {
      //Virulence
      window.open("175/5/index.html")
    } else if (x == (chars.length + 3)) {
      //R'eden
      window.open("https://mmmegh.itch.io/reden")
    } else if (x == (chars.length + 5)) {
      //Balance
      window.open("balance/balance.html")
    } else if (x == (chars.length + 6)) {
      //Valley
      window.open("https://hub.link/QuVbfyT")
    } else if (x == (chars.length + 8)) {
      //Fragments
      window.open("https://julsjacobson.itch.io/fragments")
    } else if (x == (chars.length + 9)) {
      //Hide and Sniff
      window.open("https://julsjacobson.itch.io/hide-and-sniff")
    } else {
      modals[x].style.display = "block";
      close.style.display = "block";
      navbar.style.display = "none";
    }
  }

  function playPreview(i) {
    var x = getKey(this);
    if (x >= chars.length) {
      thumbs[x].play();
    }
  }

  function pausePreview(i) {
    var x = getKey(this);
    if (x >= chars.length) {
      thumbs[x].pause();
    }
  }

  function getKey(val) {
    return Object.keys(thumbs).find(key => thumbs[key] === val);
  }

  function back() {
    for (i = 0; i < thumbs.length; i++) {
      modals[i].style.display = "none";
      close.style.display = "none";
      navbar.style.display = "block";
    }
  }
