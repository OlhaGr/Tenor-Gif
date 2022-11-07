 "use strict"
     const divResult = document.getElementById('Box');
     const randomImage = document.getElementById("cat");
     const CatBox = document.getElementById("CatBox");
   
    CatBox.innerText = ''; 
    
     randomImage.addEventListener('click',function() {    
     let urlAPI = new XMLHttpRequest();
         urlAPI.open('GET', 'https://api.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=12' );
         urlAPI.responseType ='json';
         urlAPI.onreadystatechange  =  function ()  {
            if(urlAPI.readyState === 4 && urlAPI.status=== 200) {
               let newImage = document.createElement('img');
               newImage.setAttribute('src', urlAPI.response.url)
               newImage.setAttribute ('class', 'cat');
               
            CatBox.appendChild(newImage);
          }
          console.log(urlAPI.response)
        };
         urlAPI.send();
         
      });
     
            
                
                
   document.body.style.backgroundColor = "yellow"  
         
