const container = document.querySelector(".grid2"); 

for(let i=1;i<=8;i++)
    for(let j=1;j<=8;j++){
const item=document.createElement("div");
item.style.width = "70px";
item.style.height = "70px";
item.style.margin = "0px";
if (i === 2 || i === 7) {
    const pion = document.createElement('div');
    pion.classList.add('pion');
    if(i===2){
        pion.style.backgroundImage="url('pawn.png')";
        pion.id=`negru`;
    }
    if(i===7)
        {
            pion.style.backgroundImage="url('computer.png')";
            pion.id=`alb`;

        }
    pion.dataset.x = i;
    pion.dataset.y = j;
    item.appendChild(pion);
}
if(i===1 && (j===2 || j===7)){
    const cal=document.createElement('div');
    cal.classList.add('cal');
    cal.id=`negru`;
    cal.dataset.x=i;
    cal.dataset.y=j;
    cal.style.backgroundImage="url('chess.png')"
    item.appendChild(cal);

}
if(i===8 && (j===2 || j===7)){
    const cal=document.createElement('div');
    cal.classList.add('cal');
    cal.id=`alb`;
    cal.dataset.x=i;
    cal.dataset.y=j;
    cal.style.backgroundImage="url('horse.png')"
    item.appendChild(cal);
}

if(i===1 && j===4){
    const regina=document.createElement('div');
    regina.classList.add('regina');
    regina.id=`negru`;
    regina.dataset.x=i;
    regina.dataset.y=j;
    regina.style.backgroundImage="url('black.png')"
    item.appendChild(regina);
}
if(i===8 && j===4){
    const regina=document.createElement('div');
    regina.classList.add('regina');
    regina.id=`alb`;
    regina.dataset.x=i;
    regina.dataset.y=j;
    regina.style.backgroundImage="url('wqueen.png')"
    item.appendChild(regina);
}
if(i===1 && j===5){
    const rege=document.createElement('div');
    rege.classList.add('rege');
    rege.id=`negru`;
    rege.dataset.x=i;
    rege.dataset.y=j;
    rege.style.backgroundImage="url('king.png')"
    item.appendChild(rege);
}
if(i===8 && j===5){
    const rege=document.createElement('div');
    rege.classList.add('rege');
    rege.id=`alb`;
    rege.dataset.x=i;
    rege.dataset.y=j;
    rege.style.backgroundImage="url('wking.png')"
    item.appendChild(rege);
}
function tura(color, url, k)
{
    if(i===k && (j===1 || j===8)){
        const tura=document.createElement('div');
        tura.classList.add('tura');
        tura.id= color;
        tura.dataset.x = k;
        tura.dataset.y = j;
        tura.style.backgroundImage=url;
        item.appendChild(tura);
    }
}

const color_ngr = 'negru', color_alb = 'alb';
const url_ngr = 'url(brook.png)', url_alb = 'url(wrook.png)';
const line_ngr = 1, line_alb = 8;

tura(color_ngr,url_ngr,line_ngr); tura(color_alb,url_alb,line_alb);

if(i===1 &&(j===3 || j===6)){
    const nebun=document.createElement('div');
    nebun.classList.add('nebun');
    nebun.style.backgroundImage="url('nebun.png')";
    nebun.id=`negru`;
    nebun.dataset.x = i;
    nebun.dataset.y = j;
    item.appendChild(nebun);
}
if(i===8 &&(j===3 || j===6)){
    const nebun=document.createElement('div');
    nebun.classList.add('nebun');
    nebun.style.backgroundImage="url('nebun1.png')";
    nebun.id=`alb`;
    nebun.dataset.x = i;
    nebun.dataset.y = j;
    item.appendChild(nebun);
}
item.classList.add("casuta");
item.id = `casuta${i}-${j}`;
item.dataset.x = i;
item.dataset.y = j;
if((i+j)%2===1)
    item.style.backgroundColor="brown";
container.appendChild(item);
    }

    //tabla 

    let ok=1;
    let cnt=0;
    function pion1(x, y, x1, y1, pionul, casa) {      
          if (Number(x1) === (Number(x) + 1) && (Number(y1) === (Number(y) + 1) || Number(y1) === (Number(y) - 1)) && pionul.id===`alb` && casa.hasChildNodes() ){
            if(ok===1){
                ok=0;
       return true;
        }
    
    }
        if(Number(x1) === (Number(x) - 1) && (Number(y1) === (Number(y) + 1) || Number(y1) === (Number(y) - 1) ) && pionul.id===`negru` && casa.hasChildNodes()){
        if(ok===0){
            ok=1;
            return true;
                        }
        }

            return false;
    
}
    
    function pion0(x, y,x1,y1,pionul,casa) {
       
        if(pionul.id==='alb'){
            if(Number(x1)===(Number(x)+1) && Number(y1)===Number(y) && ok===1){
                ok=0;
                return true;
            }
            const item4=document.querySelector(`#casuta${Number(x)+1}-${Number(y)}`);
            if(Number(x1)===(Number(x)+2) && Number(y1)===Number(y) && Number(x1)===7 && ok===1){
                if(!item4.querySelector('.pion'))
                    {
                        ok=0;
                        return true;}
            }
        
             }
             else{
                if(ok===0){
                if(Number(x1)===(Number(x)-1) && Number(y1)===Number(y)){
                   ok=1;
                    return true;
                }
                const item4=document.querySelector(`#casuta${Number(x)-1}-${Number(y)}`);
                if(Number(x1)===(Number(x)-2) && Number(y1)===Number(y) && Number(x1)===2){
                    if(!item4.querySelector('.pion'))
                       {
                        ok=1;
                        return true;
                       }
                }
            }
             }
            return false;
    }

    //functii pion 

function nebunul1(x,y,x1,y1,nebul,casa){
let i=1;

if((nebul.id==='alb' && ok===1)|| (nebul.id==='negru' && ok===0)){
if(Number(casa.dataset.x)>Number(nebul.dataset.x)){
    if(Number(casa.dataset.y)>Number(nebul.dataset.y))
    {
        if(Number(nebul.dataset.x)+Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))!==Number(casa.dataset.x))
            return false;
        for(i;i<=Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))-1;i++){
            const item4=document.querySelector(`#casuta${Number(x1)+i}-${Number(y1)+i}`);
            if(item4.querySelector('div')!=null)
                return false;
        }
    }
    if(Number(casa.dataset.y)<Number(nebul.dataset.y)){
        if(Number(nebul.dataset.x)+Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))!==Number(casa.dataset.x))
            return false;
        for(i;i<=Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))-1;i++){
            const item4=document.querySelector(`#casuta${Number(x1)+i}-${Number(y1)-i}`);
            if(item4.querySelector('div')!=null)
             return false;
        }
    }
}
if(Number(casa.dataset.x)<Number(nebul.dataset.x)){
    if(Number(casa.dataset.y)>Number(nebul.dataset.y))
    {
        if(Number(nebul.dataset.x)-Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))!==Number(casa.dataset.x))
            return false;
        for(i=1;i<=Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))-1;i++){
            const item4=document.querySelector(`#casuta${Number(x1)-i}-${Number(y1)+i}`);
            if(item4.querySelector('div')!=null)
           return false;
        }

    }
    if(Number(casa.dataset.y)<Number(nebul.dataset.y)){
        if(Number(nebul.dataset.x)-Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))!==Number(casa.dataset.x))
            return false;
        for(i;i<=Math.abs(Number(casa.dataset.y)-Number(nebul.dataset.y))-1;i++){
            const item4=document.querySelector(`#casuta${Number(x1)-i}-${Number(y1)-i}`);
            if(item4.querySelector('div')!=null){
           return false;
        }
    }
   
}
}
if((Number(casa.dataset.x)===Number(nebul.dataset.x)) ||(Number(casa.dataset.y)===Number(nebul.dataset.y))  )
    return false;
const item4=document.querySelector(`#casuta${Number(x)}-${Number(y)}`);
if(item4.querySelector('div')!=null){
if((item4.id==='alb' && nebul.id==='alb')||(item4.id==='negru' && nebul.id==='negru'))
    return false;
}

return true;
}
}



//functii nebun
function calMovment(x,y,x1,y1,calul,casa){
    if((Number(x1)===Number(x)+2 || Number(x1)===Number(x)-2) && (Number(y1)===Number(y)+1 || Number(y1)===Number(y)-1) && ((calul.id==='negru' && ok===0) || (calul.id==='alb' && ok===1)))
        return true;
    if((Number(x1)===Number(x)+1 || Number(x1)===Number(x)-1) && (Number(y1)===Number(y)+2 || Number(y1)===Number(y)-2) && ((calul.id==='negru' && ok===0) || (calul.id==='alb' && ok===1)))
        return true;
    return false;
}
//functii cal 
function turaMovment(x,y,x1,y1,tura,casa){
    if((Number(x)===Number(x1)) && (Number(y1)===Number(y)))
        return false;
    if(Number(x1)===Number(x) && ((tura.id==='alb' && ok===1)||(tura.id==='negru' && ok===0))){
        if(Number(y1)>Number(y)){
            for(let i=1;i<Math.abs(Number(y1)-Number(y));i++)
            {
                const item4=document.querySelector(`#casuta${Number(x1)}-${Number(y1)-i}`);
                if(item4.querySelector('div')!=null){
                        return false;
                    }
            }
        }
        if(Number(y1)<Number(y)){
            for(let i=1;i<Math.abs(Number(y1)-Number(y));i++)
                {
                    const item4=document.querySelector(`#casuta${Number(x1)}-${Number(y1)+i}`);
                    if(item4.querySelector('div')!=null){
                            return false;
                        }
                }
        }
        return true;
    }
    if(Number(y1)===Number(y) && ((tura.id==='alb' && ok===1)||(tura.id==='negru' && ok===0))){
        if(Number(x1)>Number(x)){
            for(let i=1;i<Math.abs(Number(x1)-Number(x));i++)
            {
                const item4=document.querySelector(`#casuta${Number(x1)-i}-${Number(y1)}`);
                if(item4.querySelector('div')!=null){
                  
                        return false;
                    }
            }
        }
        if(Number(x1)<Number(x)){
            for(let i=1;i<Math.abs(Number(x1)-Number(x));i++)
                {
                    const item4=document.querySelector(`#casuta${Number(x1)+i}-${Number(y1)}`);
                    if(item4.querySelector('div')!=null){
                            return false;
                        }
                }
        }
        return true;
    }
    

}

//functii tura
function reginaMovment(x,y,x1,y1,regina1,casa){
if(turaMovment(x,y,x1,y1,regina1,casa)===true)
    return true;
if(nebunul1(x,y,x1,y1,regina1,casa)===true)
    return true;
return false;
}

//functie regina
function regeMovment(x,y,x1,y1,regele,casa){
    if((regele.id==='negru' && ok===0) || (regele.id==='alb' && ok===1)){
    if((Number(x)===Number(x1)+1 || Number(x)===Number(x1)-1) && (Number(y)===Number(y1)+1 || Number(y)===Number(y1)-1))
        return true;
    if((Number(x)===Number(x1)+1 || Number(x)===Number(x1)- 1)&& Number(y)===Number(y1))
        return true;
    if((Number(y)===Number(y1)+1 || Number(y)===Number(y1)- 1)&& Number(x)===Number(x1))
        return true;
    if(Number(y1)<Number(y) && Number(y)-Number(y1)===2 && Number(x)===Number(x1)){
        const item10=document.getElementById(`casuta${Number(x)}-${Number(y)-1}`);
        const item11=document.getElementById(`casuta${Number(x)}-${Number(y)+1}`);
        console.log(item11);
        if(!item10.hasChildNodes() && item11.querySelector('.tura'))
            return true;
    }
    if(Number(y1)>Number(y) && Number(y1)-Number(y)===2 && Number(x)===Number(x1)){
        const item10=document.getElementById(`casuta${Number(x)}-${Number(y)+1}`);
        const item11=document.getElementById(`casuta${Number(x)}-${Number(y)-1}`);
        const item12=document.getElementById(`casuta${Number(x)}-${Number(y)-2}`);
        if(!item10.hasChildNodes() && item12.querySelector('.tura') && !item11.hasChildNodes())
            return true;
    }


}
    return false;
}
//functie rege
function casutevalabiletura(x,y,piesa){
    const circle=document.createElement('div');
    circle.classList.add('cerc');
    circle.style.backgroundImage="url('circle.png')";
   for(const i=y+1;i<=8;i++){
    const item2=document.getElementById(`casuta${x}-${i}`);
    if(!item2.hasChildNodes())
        item2.appendChild(circle);
    else
    {
        item2.appendChild(circle);
        break;
    }
   } 
   for(const i=y-1;i>=1;i--){
    const item2=document.getElementById(`casuta${x}-${i}`);
    if(!item2.hasChildNodes())
        item2.appendChild(circle);
    else
    {
        item2.appendChild(circle);
        break;
    }
   } 
   for(const i=x+1;i<=8;i++){
    const item2=document.getElementById(`casuta${i}-${y}`);
    if(!item2.hasChildNodes())
        item2.appendChild(circle);
    else
    {
        item2.appendChild(circle);
        break;
    }
   }
   for(const i=x-1;i>=1;i--){
    const item2=document.getElementById(`casuta${i}-${y}`);
    if(!item2.hasChildNodes())
        item2.appendChild(circle);
    else
    {
        item2.appendChild(circle);
        break;
    }
   }
}
function mat(x1,y1,regele){ 

}
//functie verificare mat

    const regine=document.querySelectorAll('.regina');
    const cai=document.querySelectorAll('.cal');
    const pioni = document.querySelectorAll('.pion'); 
    const casute = document.querySelectorAll('.casuta'); 
    const nebuni = document.querySelectorAll('.nebun');
    const ture=document.querySelectorAll('.tura');
    const regi=document.querySelectorAll('.rege');
    let pionSelectat = null; 
    let nebunSelectat = null; 
    let turaSelectat = null;
    let calSelectat = null;
    let reginaSelectat = null;
    let regeSelectat = null;

    regi.forEach(rege => {
        rege.addEventListener('click', function () {
        regeSelectat = rege; 

        });
    });

    regine.forEach(regina => {
        regina.addEventListener('click', function () {
            reginaSelectat = regina; 
        });
    });

    cai.forEach(cal => {
        cal.addEventListener('click', function () {
           
            calSelectat = cal; 
        });
    });

    ture.forEach(tura => {
        tura.addEventListener('click', function () {       
            turaSelectat = tura; 
            casutevalabiletura(Number(turaSelectat.dataset.x),Number(turaSelectat.dataset.y),tura);
        });
    });

    pioni.forEach(pion => {
        pion.addEventListener('click', function () {
           
            pionSelectat = pion; 
        });
    });

    nebuni.forEach(nebun => {
        nebun.addEventListener('click', function () {
           
            nebunSelectat = nebun; 

        });
    });
    
    casute.forEach(casuta => {
        casuta.addEventListener('click', function () {
                  
            if(regeSelectat){
                if(regeMovment(casuta.dataset.x, casuta.dataset.y,regeSelectat.dataset.x,regeSelectat.dataset.y,regeSelectat,casuta) && casuta.querySelector('div'))
                {
                   
                    if(regeSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(regeSelectat.id==='negru' && ok===0)
                        ok=1;
                    const regedeinlocuit=casuta.querySelector('div');
                    casuta.replaceChild(regeSelectat, regedeinlocuit);
                   regeSelectat.dataset.x=casuta.dataset.x;
                    regeSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;
                    
                }
              }
              if (regeSelectat && casuta.children.length === 0) { 
                if (regeMovment(casuta.dataset.x, casuta.dataset.y,regeSelectat.dataset.x,regeSelectat.dataset.y,regeSelectat,casuta)){
                    
                    if(regeSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(regeSelectat.id==='negru' && ok===0)
                        ok=1;
                    if(Math.abs(Number(regeSelectat.dataset.y)-Number(casuta.dataset.y))===2 && Number(casuta.dataset.x)===Number(regeSelectat.dataset.x) ){
                            if(Number(regeSelectat.dataset.y)<Number(casuta.dataset.y))
                            {
                                const item15=document.getElementById(`casuta${Number(casuta.dataset.x)}-${Number(casuta.dataset.y)+1}`);
                                const item16=document.getElementById(`casuta${Number(casuta.dataset.x)}-${Number(casuta.dataset.y)-1}`);
                                const tura1=item15.querySelector('.tura');
                                item16.appendChild(tura1);
                                tura1.dataset.y=casuta.dataset.y-1;
                            }
                            if(Number(regeSelectat.dataset.y)>Number(casuta.dataset.y))
                                {
                                    const item15=document.getElementById(`casuta${Number(casuta.dataset.x)}-${Number(casuta.dataset.y)+1}`);
                                    const item16=document.getElementById(`casuta${Number(casuta.dataset.x)}-${Number(casuta.dataset.y)-2}`);
                                    const tura1=item16.querySelector('.tura');
                                    item15.appendChild(tura1);
                                    tura1.dataset.y=casuta.dataset.y+3;
                                }
                    }
                    casuta.appendChild(regeSelectat);
                    regeSelectat.dataset.x=casuta.dataset.x;
                    regeSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;
                }
        
            }
            
            if(reginaSelectat){
                if(reginaMovment(casuta.dataset.x, casuta.dataset.y,reginaSelectat.dataset.x,reginaSelectat.dataset.y,reginaSelectat,casuta) && casuta.querySelector('div'))
                {
                    if(reginaSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(reginaSelectat.id==='negru' && ok===0)
                        ok=1;
                    const reginadeinlocuit=casuta.querySelector('div');
                    casuta.replaceChild(reginaSelectat, reginadeinlocuit);
                    reginaSelectat.dataset.x=casuta.dataset.x;
                    reginaSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;

                    
                }
              }
              if (reginaSelectat && casuta.children.length === 0) { 
                if (reginaMovment(casuta.dataset.x, casuta.dataset.y,reginaSelectat.dataset.x,reginaSelectat.dataset.y,reginaSelectat,casuta)){
                  
                    console.log('da frate ');
                    if(reginaSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(reginaSelectat.id==='negru' && ok===0)
                        ok=1;
                    casuta.appendChild(reginaSelectat);
                    reginaSelectat.dataset.x=casuta.dataset.x;
                    reginaSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                pionSelectat=null;
                turaSelectat=null;
                calSelectat=null;
                reginaSelectat = null;
                regeSelectat=null;
                }
        
            }      
            if(calSelectat){
                if(calMovment(casuta.dataset.x, casuta.dataset.y,calSelectat.dataset.x,calSelectat.dataset.y,calSelectat,casuta) && casuta.querySelector('div'))
                {
                   
                    if(calSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(calSelectat.id==='negru' && ok===0)
                        ok=1;
                    const caldeinlocuit=casuta.querySelector('div');
                    casuta.replaceChild(calSelectat, caldeinlocuit);
                    calSelectat.dataset.x=casuta.dataset.x;
                    calSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;
                    
                }
              }
              if (calSelectat && casuta.children.length === 0) { 
                if (calMovment(casuta.dataset.x, casuta.dataset.y,calSelectat.dataset.x,calSelectat.dataset.y,calSelectat,casuta)){
                    
                    if(calSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(calSelectat.id==='negru' && ok===0)
                        ok=1;
                    casuta.appendChild(calSelectat);
                    calSelectat.dataset.x=casuta.dataset.x;
                    calSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;
                }
        
            }
         
            if(turaSelectat){
                if(turaMovment(casuta.dataset.x, casuta.dataset.y,turaSelectat.dataset.x,turaSelectat.dataset.y,turaSelectat,casuta) && casuta.querySelector('div'))
                {
                   
                    if(turaSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(turaSelectat.id==='negru' && ok===0)
                        ok=1;
                    const turadeinlocuit=casuta.querySelector('div');
                    casuta.replaceChild(turaSelectat, turadeinlocuit);
                    turaSelectat.dataset.x=casuta.dataset.x;
                    turaSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;

                }
              }
              if (turaSelectat && casuta.children.length === 0) { 
                if (turaMovment(casuta.dataset.x, casuta.dataset.y,turaSelectat.dataset.x,turaSelectat.dataset.y,turaSelectat,casuta)){
                    
                    if(turaSelectat.id==='alb' && ok===1)
                        ok=0;
                    if(turaSelectat.id==='negru' && ok===0)
                        ok=1;
                    casuta.appendChild(turaSelectat);
                    turaSelectat.dataset.x=casuta.dataset.x;
                    turaSelectat.dataset.y=casuta.dataset.y;
                    nebunSelectat = null;
                    pionSelectat=null;
                    turaSelectat=null;
                    calSelectat=null;
                    reginaSelectat = null;
                    regeSelectat=null;
                }
        
            }
         
          if(nebunSelectat){
            if(nebunul1(casuta.dataset.x, casuta.dataset.y,nebunSelectat.dataset.x,nebunSelectat.dataset.y,nebunSelectat,casuta) && casuta.querySelector('div'))
            {
                if(nebunSelectat.id==='alb' && ok===1)
                    ok=0;
                if(nebunSelectat.id==='negru' && ok===0)
                    ok=1;
                if(casuta.children.length !== 0){
                const nebundeinlocuit=casuta.querySelector('div');
                casuta.replaceChild(nebunSelectat, nebundeinlocuit);
                nebunSelectat.dataset.x=casuta.dataset.x;
                nebunSelectat.dataset.y=casuta.dataset.y;
                nebunSelectat = null;
                pionSelectat=null;
                turaSelectat=null;
                calSelectat=null;
                reginaSelectat = null;
                regeSelectat=null;

               }
            }
          }

          if (nebunSelectat && casuta.children.length === 0) { 
            if (nebunul1(casuta.dataset.x, casuta.dataset.y,nebunSelectat.dataset.x,nebunSelectat.dataset.y,nebunSelectat,casuta)){
                if(nebunSelectat.id==='alb' && ok===1)
                    ok=0;
                if(nebunSelectat.id==='negru' && ok===0)
                    ok=1;
                casuta.appendChild(nebunSelectat);
                nebunSelectat.dataset.x=casuta.dataset.x;
                nebunSelectat.dataset.y=casuta.dataset.y;
                nebunSelectat = null;
                pionSelectat=null;
                turaSelectat=null;
                calSelectat=null;
                reginaSelectat = null;
                regeSelectat=null;
                    
            }
    
        }

            if(pionSelectat){
            if(pion1(casuta.dataset.x, casuta.dataset.y,pionSelectat.dataset.x,pionSelectat.dataset.y,pionSelectat,casuta) && casuta.querySelector('div')){
                if(casuta.children.length !== 0){
                    const pionDeInlocuit=casuta.querySelector('div');
                    casuta.replaceChild(pionSelectat, pionDeInlocuit);
                pionSelectat.dataset.x=casuta.dataset.x;
                pionSelectat.dataset.y=casuta.dataset.y;
                pionSelectat = null;
                nebunSelectat=null;
                turaSelectat=null;
                calSelectat=null;
                reginaSelectat = null;
                regeSelectat=null;

                    }
            }
        }

            if (pionSelectat && casuta.children.length === 0) { 
                if (pion0(casuta.dataset.x, casuta.dataset.y,pionSelectat.dataset.x,pionSelectat.dataset.y,pionSelectat,casuta)){
                    casuta.appendChild(pionSelectat);
                pionSelectat.dataset.x=casuta.dataset.x;
                pionSelectat.dataset.y=casuta.dataset.y;
                nebunSelectat = null;
                pionSelectat=null;
                turaSelectat=null;
                calSelectat=null;
                reginaSelectat = null;
                regeSelectat=null;
                }
        
            }
        
       
            console.log(ok);
        });
    }); 

