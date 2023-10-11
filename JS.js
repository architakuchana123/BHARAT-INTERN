const blogText = document.getElementById("blog-text");
const addImage = document.getElementById("add-image");
const imageUpload = document.getElementById("image-upload");
const addVideo = document.getElementById("add-video");
const videoUrl = document.getElementById("video-url");
const blogPreview = document.getElementById("blog-preview");
const publishButton = document.getElementById("publish-blog");

addImage.addEventListener("click", () => {
    imageUpload.click();
});

imageUpload.addEventListener("change", () => {

});

addVideo.addEventListener("click", () => {

});

publishButton.addEventListener("click", () => {
    const blogContent = blogText.value;
    blogPreview.innerHTML = blogContent;
});
