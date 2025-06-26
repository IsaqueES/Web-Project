//LOCALSTORAGE VARS
  var loginvar = localStorage.getItem("loginvar");
  var colorvar = localStorage.getItem("color");
  document.body.style.backgroundColor = colorvar
//DIV NAME || STATUS
  var divname = document.getElementById("divname");
  if (loginvar === null||loginvar === "NotLoged") {
    divname.innerText = "If you reading this you're not logged";
  } else {
    divname.innerText = `Olá ${loginvar}!`;
  }

//LOGIN FUNC
  const Login = async (id,color) => {
    var input = document.getElementById(id).value;
    var inputcolor = document.getElementById(color).value;
    if(input!='' && color!=''){
      localStorage.setItem("loginvar", input);
      localStorage.setItem("color",inputcolor);
      colorvar = localStorage.getItem("color");
      document.body.style.backgroundColor = colorvar;
      loginvar = localStorage.getItem("loginvar");
    }
    
    console.log(loginvar);
    window.location.reload();
  };

//LOGOUT FUNC
  const LogOut = ()=>{
    localStorage.setItem("loginvar", "NotLoged");
    localStorage.setItem("color","white")
    loginvar = localStorage.getItem("loginvar");
    colorvar = localStorage.getItem("color");
    document.body.style.backgroundColor = colorvar;
    window.location.reload();
  }

//LOGIN?Y||N
  var divbotao = document.getElementById("loginout");
  loginvar =localStorage.getItem("loginvar")
  if(loginvar===null || loginvar === "NotLoged"){
    divbotao.innerHTML= `
    <input type="text" placeholder="Var" id="inputvar" />
    <input type="text" placeholder="BackGround Color" id="inputcolor" />
    <button onclick="Login('inputvar','inputcolor')">Submit</button>
    `
  }else{
    divbotao.innerHTML = `
    <button onclick="LogOut()">Log Out</button>
    `
  }


console.log(loginvar);
