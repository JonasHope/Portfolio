const modal = document.getElementById('my_modal');
const images = document.getElementsByClassName('my_images')
const modalImg = document.getElementById("img");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
  }
};

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}