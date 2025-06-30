//LOCALSTORAGE VARS
var usertype = localStorage.getItem("usertype");
var motherdiv = document.getElementById("motherbox");
if (usertype === "Client") {
  motherdiv.innerHTML = `
        
  <div class="grid">
    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Arroz">
      <h3>Arroz 5kg</h3>
      <p>R$ 22,90</p>
      <form action="http://localhost:3000/teste/90" method="POST">
        <button onClick="Comprou('arroz')">Adicionar</button>
      </form>
  </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Feijão">
      <h3>Feijão 1kg</h3>
      <p>R$ 7,50</p>
      <button onClick="Comprou('feijão')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Óleo">
      <h3>Óleo 900ml</h3>
      <p>R$ 6,80</p>
      <button onClick="Comprou('oléo')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Arroz">
      <h3>Arroz 5kg</h3>
      <p>R$ 22,90</p>
      <button onClick="Comprou('arroz')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Feijão">
      <h3>Feijão 1kg</h3>
      <p>R$ 7,50</p>
      <button onClick="Comprou('feijão')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Óleo">
      <h3>Óleo 900ml</h3>
      <p>R$ 6,80</p>
      <button onClick="Comprou('oléo')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Arroz">
      <h3>Arroz 5kg</h3>
      <p>R$ 22,90</p>
      <button onClick="Comprou('arroz')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Feijão">
      <h3>Feijão 1kg</h3>
      <p>R$ 7,50</p>
      <button onClick="Comprou('feijão')">Adicionar</button>
    </div>

    <div class="item">
      <img src="https://via.placeholder.com/150" alt="Óleo">
      <h3>Óleo 900ml</h3>
      <p>R$ 6,80</p>

      <button onClick="Comprou('oléo')">Adicionar</button>
    </div>
  </div>

        `;
}
if (usertype === "Employe") {
  motherdiv.innerHTML = `
          <h1>Your {usertype} is Employe</h1>
          `;
}

const Comprou = (item) => {
  alert(`Comprou ${item}`);
};
