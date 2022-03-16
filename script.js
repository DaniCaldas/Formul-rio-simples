
function concluido(){
    
    //dados
    const Email = document.getElementById('email').value
    
    const sobrenome = document.getElementById('txtsobrenome').value

    const nome = document.getElementById('txtnome').value
  
    const select = document.querySelector('#options')
    const valordoselect = select.value

    const senioridade = document.querySelector('#option')
    const valordasenioridade = senioridade.value

    console.log(arr)
    //requisição do nome
    if(nome == '' && nome == 0 && Email == '' || Email == 0 && sobrenome == '' || sobrenome == 0){
       window.alert('Preencha Todos os campos')

       window.scrollTo({
        top:0,
        behavior: 'smooth'
    })

        }else{
            //array em objetos
            const arrayobj = [
                {id: 1,Email},
                {id: 2,sobrenome},
                {id: 3,nome},
                {id: 4,valordoselect},
                {id: 5,valordasenioridade}
            ]
        
            var arr = arrayobj.map(function(obj){
                return Object.keys(obj).map(function(keys){
                    return obj[keys];
                });
            });
        }     
}