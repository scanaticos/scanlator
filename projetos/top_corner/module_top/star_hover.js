  //mouse sobre a primeira estrela
  function on1(){
    document.getElementById("star-1").setAttribute("fill", "yellow")
    
  }
  function off1(){
    document.getElementById("star-1").setAttribute("fill", "gray")

  }

  document.getElementById("star-1").addEventListener("mouseover", on1)
  
  document.getElementById("star-1").addEventListener("mouseout", off1)

//mouse sobre a segunda estrela
function on2(){
    document.getElementById("star-1").setAttribute("fill", "yellow")
    document.getElementById("star-2").setAttribute("fill", "yellow")
    
  }
  function off2(){
    document.getElementById("star-1").setAttribute("fill", "gray")
    document.getElementById("star-2").setAttribute("fill", "gray")   
  }

  document.getElementById("star-2").addEventListener("mouseover", on2)
  
  document.getElementById("star-2").addEventListener("mouseout", off2)

//mouse sobre a terceira estrela
function on3(){
    document.getElementById("star-1").setAttribute("fill", "yellow")
    document.getElementById("star-2").setAttribute("fill", "yellow")
    document.getElementById("star-3").setAttribute("fill", "yellow")      
  }
  function off3(){
    document.getElementById("star-1").setAttribute("fill", "gray")
    document.getElementById("star-2").setAttribute("fill", "gray")
    document.getElementById("star-3").setAttribute("fill", "gray")      
  }

  document.getElementById("star-3").addEventListener("mouseover", on3)
  
  document.getElementById("star-3").addEventListener("mouseout", off3)

//mouse sobre a quarta estrela
function on4(){
    document.getElementById("star-1").setAttribute("fill", "yellow")
    document.getElementById("star-2").setAttribute("fill", "yellow")
    document.getElementById("star-3").setAttribute("fill", "yellow")
    document.getElementById("star-4").setAttribute("fill", "yellow")      
  }
  function off4(){
    document.getElementById("star-1").setAttribute("fill", "gray")
    document.getElementById("star-2").setAttribute("fill", "gray")
    document.getElementById("star-3").setAttribute("fill", "gray")
    document.getElementById("star-4").setAttribute("fill", "gray")      
  }

  document.getElementById("star-4").addEventListener("mouseover", on4)
  
  document.getElementById("star-4").addEventListener("mouseout", off4)

//mouse sobre a quarta estrela
function on5(){
    document.getElementById("star-1").setAttribute("fill", "yellow")
    document.getElementById("star-2").setAttribute("fill", "yellow")
    document.getElementById("star-3").setAttribute("fill", "yellow")
    document.getElementById("star-4").setAttribute("fill", "yellow")      
    document.getElementById("star-5").setAttribute("fill", "yellow")      
  }
  function off5(){
    document.getElementById("star-1").setAttribute("fill", "gray")
    document.getElementById("star-2").setAttribute("fill", "gray")
    document.getElementById("star-3").setAttribute("fill", "gray")
    document.getElementById("star-4").setAttribute("fill", "gray")      
    document.getElementById("star-5").setAttribute("fill", "gray")      
  }

  document.getElementById("star-5").addEventListener("mouseover", on5)
  
  document.getElementById("star-5").addEventListener("mouseout", off5)