const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data= await api.json();
    console.log(data);
    divRes=document.querySelector("#res");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${item.name}</h5>
    <p class="card-text">GENERO: ${item.gender}</p>
    <p class="card-text">LOCACION: ${item.location.name}</p>
    <p class="card-text">ORIGEN: ${item.origin.name}</p>
    <p class="card-text">ESPECIE: ${item.species}</p>
    <p class="card-text">VIVO O MUERTO: ${item.status}</p>
    <p class="card-text">ID: ${item.id}</p>
    <p class="card-text">CREDO: ${item.created}</p>
  </div>
</div>
`
divRes.appendChild(divItem);
    });
}
apiRick(1)