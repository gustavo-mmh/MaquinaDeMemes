async function mapImageList() {
    let urlflags = "assets/js/flags.json"
    let json = await fetch(urlflags)
        .then(response => response.json())
        .then(json => loadJson(json));
    return json;
}
async function loadJson(json) {
    const flags = json;
    let memesObj = [];
    for (let flag of flags) {
        memesObj.push(flag)
    }
    return memesObj
}
async function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function () {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploadImage = reader.result
            changeMemePicture(uploadImage)
        })
        reader.readAsDataURL(this.files[0])
    })
}
async function createGallery(imageList) {
    const memeSelector = document.querySelector("#memes-list")
    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)

    });
}
async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}
async function changeTextColor(color) {
    let textBox = document.querySelectorAll(".text-box")
    textBox.forEach(div => {
        div.style.color = `${color}`
    })
}
async function changeBgColor(color) {
    let textBox = document.querySelectorAll(".text-box")
    textBox.forEach(div => {
        div.style.backgroundColor = `${color}`
    })
}
function downloadPrint() {
    const btnDownload = document.querySelector("#btn-download")
    btnDownload.addEventListener("click", () => {
        const screenshotPnnt = document.querySelector("#downlabled")
        html2canvas(screenshotPnnt).then((canvas) => {
            const base64Image = canvas.toDataURL("image/png")
            let anchor = document.createElement("a")
            anchor.setAttribute("href", base64Image)
            anchor.setAttribute("download", "my-meme.png")
            anchor.click()
            anchor.remove()
        })
    })
}

async function main() {
    try {
        const memesImageList = await mapImageList()
        await enablePhotoUpload()
        downloadPrint()
        await createGallery(memesImageList)
        await changeMemePicture(memesImageList[0].path)
    } catch (error) {
        console.log('error:', error)
    }
};
main();