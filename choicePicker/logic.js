const textContent=document.getElementById('text');
const choices=document.getElementById('tags');

textContent.addEventListener('keyup',(e) => {
    createTags(e.target.value);

    if(e.key==='Enter'&&e.target.value!==" "){
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomChoice();
    }
});


function createTags(input){
    const tags=input.split(',').filter(tag => tag.trim()!=='')
    .map(tag => tag.trim());

    choices.innerHTML='';

    tags.forEach(function(tag){
        const tagEl=document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText=tag;
        choices.appendChild(tagEl);
    })
}

function randomChoice(){
    const times=30;

    const interval=setInterval(()=>{
        const randomTag=selectRandom();

        highlightTag(randomTag);
        setTimeout(() => {
            unHighlight(randomTag);
        },100)

    },100)
    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(() => {
            const randomTag=selectRandom();
            highlightTag(randomTag);
        },100)
    },times*100)
}

function selectRandom(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}
function highlightTag(tag){
    tag.classList.add('highlight');
}
function unHighlight(tag){
    tag.classList.remove('highlight');
}
 

