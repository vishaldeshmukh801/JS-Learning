const titleElement=document.querySelector("#mainTitle");
titleElement.addEventListener("mouseover",()=>{
    titleElement.style.color="Green";
    titleElement.style.backgroundColor="Pink";
    



    

})
const stackElement=document.querySelector("#stack");
stackElement.style.color="Red";
stackElement.style.fontStyle="Italic";
const listStack=document.querySelector("#list")
const jira=document.querySelector("#jira");
listStack.removeChild(jira);
const heading=document.querySelector("#heading");
heading.addEventListener("click",()=>{
    heading.style.backgroundColor="black";
heading.style.color="white";
heading.style.fontStyle="italic";
})
const bodyElement=document.querySelector("#body");
bodyElement.style.backgroundColor="blanchedalmond"
