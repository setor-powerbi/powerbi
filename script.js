window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const message = this.document.getElementById("message")
    
    loader.classList.add("hidden");
    message.classList.remove("hidden");
  });