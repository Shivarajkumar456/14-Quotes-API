let quoteText ;
var textPosition = 0; 
var flag = true;

const loadQuote = async () => {
    const url = 'https://api.quotable.io/random';
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data.content;
    } catch (error) {
      console.log(error);
    }
  };

  const typewriter = async () => {
    if (flag) {
      quoteText = await loadQuote();
      flag = false;
    }
    
    const typeTextElement = document.querySelector("#typeText");
    typeTextElement.innerHTML = quoteText.substring(0,textPosition) + '<span>\u25AE</span>';
  
    if (textPosition++ !== quoteText.length) {
      setTimeout(typewriter, 100);
    } else {
      quoteArray = ' ';
      setTimeout(typewriter, 4000);
      textPosition = 0;
      flag = true;
    }
  };

window.addEventListener('load', typewriter);