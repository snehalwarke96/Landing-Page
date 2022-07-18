let hamClick = document.querySelector('.hamBurger');
let crossClick = document.querySelector('.cross');
 
hamClick.addEventListener('click', (element => {
    console.log(element) ;
    document.querySelector('.fulldisplay').classList.toggle('navbar');
    
    // if(document.querySelector('.fulldisplay').classList.contains('navbar')){
       
    //     document.querySelector('.list').style.display='none';
    //     hamClick.style.display='block';
    //     crossClick.style.display='none';
    // }
    // else{
     
        document.querySelector('.list').style.display='block';
        hamClick.style.display='none';
        crossClick.style.display='block';
    
}));

crossClick.addEventListener('click', (element => {
    console.log(element) ;
    document.querySelector('.fulldisplay').classList.toggle('navbar');
    
    // if(document.querySelector('.fulldisplay').classList.contains('navbar')){
       
        document.querySelector('.list').style.display='none';
        hamClick.style.display='block';
        crossClick.style.display='none';
    // }
    // else{
     
    //     document.querySelector('.list').style.display='block';
    //     hamClick.style.display='none';
    //     crossClick.style.display='block';
    // }
}));

















// crossClick.addEventListener('click', (element1 => {
//     console.log('sne') ;
//     document.querySelector('.navbar').classList.toggle('fulldisplay');
//     document.querySelector('.list').style.display='none';
 
//     hamClick.style.display='block';
//     crossClick.style.display='none';
    
    
    
//     // document.querySelector('.hamBurger').style.display='none';
// }),500);
