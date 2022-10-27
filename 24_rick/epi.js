const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/episode?page="+pagina;
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
    <h5 class="card-title"> ${item.name}</h5>
    <p class="card-text">Fecha de lanzamiento ${item.air_date}</p>
    <p class="card-text">Episodios ${item.episode}</p>
    <p class="card-text">LOCACION: ${item.location}</p>
    <p class="card-text">ID: ${item.id}</p>
    <p class="card-text">CREDO: ${item.created}</p>
  </div>
</div>
`
divRes.appendChild(divItem);
    });
}
apiRick(1)