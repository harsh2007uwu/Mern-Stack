


    const inputField = document.querySelector('.input-field');
    const outputField = document.querySelector('.output-field');

    const firstuppercase = document.querySelector('.firstuppercase');
    const uppercase = document.querySelector('.uppercase');
    const lowercase = document.querySelector('.lowercase');

    const bold = document.querySelector('.Bold');
    const italic = document.querySelector('.italic');
    const underline = document.querySelector('.underline');

    
    inputField.addEventListener('input', () => {
      outputField.textContent = inputField.value ? inputField.value : 'Output';
    });

   
    function setActiveTransform(clickedBtn) {
      [firstuppercase, uppercase, lowercase].forEach(btn => {
        if (btn === clickedBtn) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

  
    firstuppercase.addEventListener('click', () => {
      
      outputField.style.textTransform = 'capitalize';
      setActiveTransform(firstuppercase);
    });

    uppercase.addEventListener('click', () => {
      outputField.style.textTransform = 'uppercase';
      setActiveTransform(uppercase);
    });

    lowercase.addEventListener('click', () => {
      outputField.style.textTransform = 'lowercase';
      setActiveTransform(lowercase);
    });

    function toggleStyle(button, styleProp, onValue, offValue) {
 
      if (outputField.style[styleProp] === onValue) {
        outputField.style[styleProp] = offValue;
        button.classList.remove('active');
      } else {
        outputField.style[styleProp] = onValue;
        button.classList.add('active');
      }
    }

    bold.addEventListener('click', () => {
      toggleStyle(bold, 'fontWeight', 'bolder', 'normal');
    });

    italic.addEventListener('click', () => {
      toggleStyle(italic, 'fontStyle', 'italic', 'normal');
    });

    underline.addEventListener('click', () => {
      
      toggleStyle(underline, 'textDecoration', 'underline', 'none');
    });