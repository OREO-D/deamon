const key = document.getElementById('key')
const run = document.getElementById('run')

run.addEventListener('click' => {
    fetch(server)
     .then(response, ()=> return response.Json())
      .then(data, ()=> {
         if(login == false){
            alert('Key invalida')
         }if(login == true){
            window.location.replace('https://painel.d3a0on.vercel.app/')
         }
      })

})
