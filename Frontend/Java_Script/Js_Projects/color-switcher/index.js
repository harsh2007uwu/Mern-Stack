
let color1 = document.querySelector('.red') 
        let color2 = document.querySelector('.yellow') 
        let color3 = document.querySelector('.blue') 
        let color4 = document.querySelector('.pink') 

        color1.addEventListener('click' , ()=>{
        document.body.style.backgroundColor= 'red'
        })
        color2.addEventListener('click' , ()=>{
        document.body.style.backgroundColor= 'yellow'
        })
        color3.addEventListener('click' , ()=>{
        document.body.style.backgroundColor= 'rgb(0, 191, 255)'
        })
        color4.addEventListener('click' , ()=>{
        document.body.style.backgroundColor= 'pink'
        })