const container = document.querySelector(".grid2"); 
for(let i=1;i<=8;i++)
    for(let j=1;j<=8;j++){
const item=document.createElement("div");
item.style.width = "70px";
item.style.height = "70px";
item.style.margin = "0px";
if (i === 1 || i === 8) {
    item.classList.add("casuta"); 
    item.id = `casuta${i}-${j}`;  
 
    const pion = document.createElement('div');
    pion.classList.add("pion");
    if(i===1){
        pion.style.backgroundImage="url('pawn.png')";
        pion.id=`negru`;
    }
    if(i===8)
        {
            pion.style.backgroundImage="url('computer.png')";
            pion.id=`alb`;

        }
    pion.dataset.x = i;
    pion.dataset.y = j;
    item.appendChild(pion);
}
else
item.classList.add("casuta");
item.id = `casuta${i}-${j}`;
item.dataset.x = i;
item.dataset.y = j;
if((i+j)%2===0)
    item.style.backgroundColor="brown";
container.appendChild(item);
    }


    function pion0(x, y,x1,y1,pionul,casa) {
       
        if(pionul.id==='alb'){
            if(Number(x1)===(Number(x)+1) && Number(y1)===Number(y))
                return true;
            const item2=document.querySelector(`#casuta${Number(x)+1}-${Number(y)+1}`);
            const item3=document.querySelector(`#casuta${Number(x)+1}-${Number(y)-1}`);
            if((Number(x1)===(Number(x)+1) && Number(y1)===(Number(y)+1) && !item2.querySelector('.pion')) || (Number(x1)===(Number(x)+1) && Number(y1)===(Number(y)-1) && !item3.querySelector('.pion'))){
                return true;
            }
            const item4=document.querySelector(`#casuta${Number(x)+1}-${Number(y)}`);
            if(Number(x1)===(Number(x)+2) && Number(y1)===Number(y) && Number(x1)===8){
                if(!item4.querySelector('.pion'))
                    return true;
            }
             }
            return false;
     
    }
    const pioni = document.querySelectorAll('.pion'); 
    const casute = document.querySelectorAll('.casuta'); 
    
    let pionSelectat = null; 
    
    pioni.forEach(pion => {
        pion.addEventListener('click', function () {
            pionSelectat = pion; 
        });
    });
    
    casute.forEach(casuta => {
        casuta.addEventListener('click', function () {

            if (pionSelectat &&!casuta.querySelector('.pion')) { 
              
                if (!casuta.querySelector('.pion') && pion0(casuta.dataset.x, casuta.dataset.y,pionSelectat.dataset.x,pionSelectat.dataset.y,pionSelectat,casuta)) {
                casuta.appendChild(pionSelectat);
                pionSelectat.dataset.x=casuta.dataset.x;
                pionSelectat.dataset.y=casuta.dataset.y;
                    pionSelectat = null;
                } 
            }
        });
    }); 

