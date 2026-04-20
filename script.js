const generateBtn=document.getElementById("generateBtn");
const memeImage=document.getElementById("memeImage");
const topText=document.getElementById("topText");
const bottomText=document.getElementById("bottomText");
const topCaption=document.getElementById("topCaption");
const bottomCaption=document.getElementById("bottomCaption");
let memes=[];
//FETCH MEMES FROM API
async function fetchMemes(){
    const res=await fetch("https://api.imgflip.com/get_memes");
    const data=await res.json()
     memes=data.data.memes;
}
//GENERATE RANDOM MEMES
function generateMemes(){
const randomIndex=Math.floor(Math.random()*memes.length);
const meme=memes[randomIndex];
memeImage.src=meme.url;
topCaption.textContent=topText.value;
bottomCaption.textContent=bottomText.value;
}
generateBtn.addEventListener("click", generateMemes);
fetchMemes();