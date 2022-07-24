
const btns = document.querySelectorAll('.button')
const rateService = function(){
    const para = document.getElementById('para')

     var count = '';

    btns.forEach((btns) =>{
        btns.addEventListener('click', () =>{
            if(+btns.textContent === 1) {
               btns.style.backgroundColor = 'hsl(25, 97%, 53%)';
            }else if (+btns.textContent ===2){
                btns.style.backgroundColor = 'hsl(25, 97%, 53%)';
            }else if(+btns.textContent === 3){
                btns.style.backgroundColor = 'hsl(25, 97%, 53%)';

            }else if (+btns.textContent === 4){
                btns.style.backgroundColor = 'hsl(25, 97%, 53%)';

            }else{
                btns.style.backgroundColor = 'hsl(25, 97%, 53%)';

            }
            count++;
            para.innerHTML = 'You selected' + ' ' +  count + ' ' +  ' ' + 'out of 5'

            

            
        })
    })


    
}

rateService()

const btn = document.getElementById("btn")
btn.addEventListener("click", submitRatings)

function submitRatings(){
    const main = document.querySelector('main')
    const popUp = document.getElementById('popUp').style.display = 'block'
    if(main.style.display === 'block'){
        main.style.display = 'none';
    }else {
         main.style.display = "none"
    }
    
}


   

