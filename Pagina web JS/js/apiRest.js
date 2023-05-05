function consumoApi(){
    //https://mindicador.cl/api


    fetch('https://mindicador.cl/api')
        .then(response => response.json())
        .then(data =>{
            //console.log(data);
            let dolar = document.getElementById("resultDolar");
            let bitcoin = document.getElementById("resultBitcoin");
            let euro = document.getElementById("resultEuro");
            let uf = document.getElementById("resultUf");

            dolar.innerHTML += data.dolar.valor;    
            bitcoin.innerHTML += data.bitcoin.valor;
            euro.innerHTML += data.euro.valor;
            uf.innerHTML += data.uf.valor;

        })
        region();
}

function region(){
  fetch('https://coso.kgames.cl/Duoc/location/region')
  .then(response => response.json())
  .then(data => {
    const select = document.getElementById('regiones');
    for (const region of data.data) {
      const option = document.createElement('option');
      option.value = region.idregion;
      option.textContent = region.nombreregion;
      select.appendChild(option);
    }
  });
}


function pokeApi(){
  fetch('')
  .then(response => response.json())
  .then(data => {
    const select = document.getElementById('regiones');
    for (const region of data.data) {
      const option = document.createElement('option');
      option.value = region.idregion;
      option.textContent = region.nombreregion;
      select.appendChild(option);
    }
  });
}