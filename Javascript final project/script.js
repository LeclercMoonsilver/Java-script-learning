function Insert(PreviewImage) {
    document.getElementById('ImageView').style.backgroundImage = "url('" + PreviewImage.src + "')";
    document.getElementById('ImageView').innerHTML = "";
    document.getElementById('desc').innerHTML = PreviewImage.alt;
}

function Undo() {
    document.getElementById('ImageView').style.backgroundImage = "none";
    document.getElementById('ImageView').innerHTML = "Hover over an image to view a cat breed"
    document.getElementById('desc').innerHTML = "Hover an image to view description"
}

window.onload = addTabIndexs;

function addTabIndexs() {
    console.log("tabindex triggered");

    const previews = document.querySelectorAll('.Preview');
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', '0');
    }
}
