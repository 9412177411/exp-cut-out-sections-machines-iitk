//Your JavaScript goes in here
let count=0;

let  content=(id)=>{ 
    // let current = document.querySelector(`#${id}`);;
    // console.log(current);

    // let nextSibling = current.nextElementSibling;
    // console.log(nextSibling);
     valu=document.getElementById(id).previousElementSibling.value;
    //  console.log(valu);
    if(valu==0)
    {   
        document.getElementById(id).style.display='block'; 
        document.getElementById(id).previousElementSibling.value=1;}  
    else{
        document.getElementById(id).style.display='none'; 
        document.getElementById(id).previousElementSibling.value=0;
    }

}
