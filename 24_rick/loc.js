const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/location?page="+pagina;
    const api = await fetch(url);
    const data= await api.json();
    console.log(data);
    divRes=document.querySelector("#res");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement(`div`)
divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> ${item.id}</h5>
    <p class="card-text"> Creado: ${item.created}</p>
    <p class="card-text">Dimension: ${item.dimension}</p>
    <p class="card-text">Nombre: ${item.name}</p>
    <p class="card-text">Tipo: ${item.type}</p>
  </div>
</div>
`
divRes.appendChild(divItem);
    });
}
apiRick(1)