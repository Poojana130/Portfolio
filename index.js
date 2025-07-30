let bar=document.getElementById("bar")
let nav=document.getElementById("navbar")
let close=document.getElementById("close")
if(bar)
{
    bar.addEventListener("click",()=>
        {
        nav.classList.add("active")
    })
}
if(close)
{
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
}


var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
    
function downloadResume() {

    const resumeURL = "./Poojana_CV.pdf";
    const filename = "Poojana_S.pdf";

    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = filename;
    link.click();
}

document.getElementById('downloadButton').addEventListener('click', downloadResume);
