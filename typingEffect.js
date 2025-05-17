const textArray = ["CEO DevFolio","Web Developer",
    "Web Designer","Frontend Developer","Graphic Designer"
  ];
  const typingSpeed = 150;
  const delayBetweenTexts = 2000;
  let textIndex = 0;
  let charIndex = 0;

  const typedTextElement = document.getElementById("typed-text");
  function typeText(){
    if(charIndex < textArray[textIndex].length){
      typedTextElement.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText,typingSpeed);
    } else{
      setTimeout(deleteText,delayBetweenTexts)
    }
  }

  function deleteText(){
    if(charIndex >0){
      typedTextElement.textContent = textArray[textIndex].substring(0,charIndex - 1);
      charIndex--;
      setTimeout(deleteText,typingSpeed/2);
    } else{
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText,typingSpeed);
    }
  }

  typeText()