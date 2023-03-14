

function f1(){
  const naam = document.getElementById('txtNaam').value;
    
  
  if (naam.length  < 2) {
    alert("Voer minimaal 2 tekens in.");
        
  }

  else {divResult.innerHTML = '<h2>Welkom ' + naam + '</h2>'; 
  }
}


 