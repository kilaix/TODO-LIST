let a=document.getElementById('add');
let b=document.getElementById('todocontainer');
let c=document.getElementById('inputField');

a.addEventListener('click',function(){
    var paragraph=document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText=c.value;
    b.append(paragraph);
    c.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        b.removeChild(paragraph);
    })
})