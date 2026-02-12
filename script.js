const newButton = document.querySelector("#newButton")
const image = document.querySelector("#img")
let pic = ""


async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  const data = await response.json();
  pic = data[0].url
}



newButton.addEventListener('click', async function() {
    await getCat()
    image.src = pic
})