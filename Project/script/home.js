//LOCALSTORAGE VARS
    var usertype = localStorage.getItem("usertype");
    var motherdiv = document.getElementById("motherbox")
    if(usertype==="Client" || usertype==="Employe"){
        motherdiv.innerHTM=`
        <h1>TESTE</h1>
        `
    }