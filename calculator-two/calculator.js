(function(){

    let screen=document.querySelector('.screen')
    let buttons=document.querySelectorAll('.btn')
    let clear=document.querySelector('.clear')
    let equal=document.querySelector('.equal')
    let Del=document.querySelector('.delete')
    let value=0;
    let answer=0;

    buttons.forEach( function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value +=value;   
        })
    })

    clear.addEventListener('click', function(){
        screen.value=''; 
    })

    Del.addEventListener('click', function(){
        let erse=screen.value.toString().slice(0,-1);
        screen.value=erse;
    })

    equal.addEventListener('click', function(e){
        if(screen.value ===""){
            screen.value=''
        }else{
            let answer= eval(screen.value);
            screen.value=answer;
        }
    })
})()




