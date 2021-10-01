const meniu=document.querySelector('.meniu');
const span=meniu.querySelectorAll('span');
const ul=document.querySelector('nav ul');

export default function meniu_animation(){
    meniu.addEventListener('click',(e)=>{
        if (window.matchMedia("(max-width: 1200px)").matches) {
            if(span[1].style.opacity!=='0'){
                span[1].style.opacity="0";
                meniu.style.setProperty('--first-span', '-35deg');
                meniu.style.setProperty('--second-span', '35deg');
                meniu.style.setProperty('--opacity-after','1');
                meniu.style.setProperty('--rotate','360deg');
                ul.style.transform="translateX(0)";
                ul.style.opacity="1";
                ul.style.zIndex="1";
                meniu.style.setProperty('--opacity-after','1');
            }else{
                meniu.style.setProperty('--opacity-after','0');
                span[1].style.opacity = "1";
                meniu.style.setProperty('--first-span', '0deg');
                meniu.style.setProperty('--second-span', '0deg');
                meniu.style.setProperty('--opacity-after','0');
                meniu.style.setProperty('--rotate','0deg');
                ul.style.transform="translateX(-100%)";
                ul.style.opacity="0";
                ul.style.zIndex="-1";
            }
        }
    })
}