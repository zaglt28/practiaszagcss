const consumirAPI= async()=>{
  
    const respuesta= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json=await respuesta.json();
   
    console.log(json);
   
    let div=document.createElement("div");
    div.className="caja";
    div.innerText=` <p>User Id{json.userId} </p>
   
    <p>ID: ${json.id}</p>
    <p>Titulo:  ${json.title}</p>
   
    <p>Completado:  ${json.completd}</p>`;
    document.body.appendChild(div);
}