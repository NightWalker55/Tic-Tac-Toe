
const block=document.querySelectorAll('.block');
const display=document.querySelector('.display');

let game=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let message=['Boo Hoo Computer Wins','Winner winner chicken dinner','Draw!! No one wins']

  let a=[];
  let cnt=0;
  let row=0,col=0;

    function computerChoice(pos){

       if(cnt===block.length){
           Win();
           return;
       }
        
        let i=0;
        let random=Math.floor(Math.random()*8);
        if(pos===random||a.indexOf(random)!==-1){
            while(1){
                random=Math.floor(Math.random()*8);
                if(pos!==random&&a.indexOf(random)===-1){
                    break;
                }
            }
        }

       
      
        const elem2=document.createElement('i');
        elem2.classList.add('fas');
        elem2.classList.add('fa-times')
        block[random].appendChild(elem2);
        a.push(random);
        cnt++;
        if(cnt===block.length){
            Win();
           
        }
      
       
       
    
}


   function userChoice(){

        for(let i=0;i<block.length;i++){
            block[i].addEventListener('click',()=>{
               const elem1=document.createElement('div');
               elem1.classList.add('circle')
               block[i].appendChild(elem1);
               a.push(i);
               Change(i); 
               cnt++;
               computerChoice(i);
            })
        }

       

    }

    userChoice();


    function Change(pos){
    
    row=Math.floor(pos/3);    
    col=pos%3;
    game[row][col]=1;
  
    }

 

    function Win(){

        console.log(game);
    if(game[0][0]===1&&game[0][1]===1&&game[0][2]===1||game[1][0]===1&&game[1][1]===1&&game[1][2]===1||game[2][0]===1&&game[2][1]===1&&game[2][2]===1){
        display.innerHTML=message[1];
    }

   else if(game[0][0]===1&&game[1][0]===1&&game[2][0]===1||game[0][1]===1&&game[1][1]===1&&game[2][1]===1||game[0][2]===1&&game[1][2]===1&&game[2][2]===1){
    display.innerHTML=message[1];
    }

    else if(game[0][0]===1&&game[1][1]===1&&game[2][2]===1||game[2][0]===1&&game[1][1]===1&&game[0][2]===1){
        display.innerHTML=message[1];
    }

   else if(game[0][0]===0&&game[0][1]===0&&game[0][2]===0||game[1][0]===0&&game[1][1]===0&&game[1][2]===0||game[2][0]===0&&game[2][1]===0&&game[2][2]===0){
        display.innerHTML=message[0];
    }

   else if(game[0][0]===0&&game[1][0]===0&&game[2][0]===0||game[0][1]===0&&game[1][1]===0&&game[2][1]===0||game[0][2]===0&&game[1][2]===0&&game[2][2]===0){
    display.innerHTML=message[0];
    }

    else {
        display.innerHTML=message[2];
    }

    }



   
    