let space = document.getElementById('space');
 buttons = document.querySelectorAll('button');
let spaceValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
     buttonText = e.target.innerText;
        console.log('button text is' , buttonText);
                                                                                                                                                                                                                                                                                                                                                          
        if(buttonText == 'x'){
            buttonText = '*';
            space.value += buttonText ;
        }
        else if(buttonText == 'C'){
            space.value = '';
            document. location. reload()
        }
        else if(buttonText == '='){
            space.value = eval(spaceValue);
        }
        else{
            spaceValue += buttonText ;
            space.value = spaceValue ;
        }
    })
}