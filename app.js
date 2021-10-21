function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display = "inline"){
        campo.style.display = "none"    
    }else{
        campo.style.display = "inline"
    }
}


projeto1 = {
    titulo: 'Karen',
    descricao: 'Projeto desenvolvido para identidade vivual' , 
    foto: 'kscapalogo.jpg'

}

projeto2 = {
    titulo: 'Jdmarca'
    descricao: 'Projeto da minha logo' ,
    foto: 'jda.png'

}



let projetos = [projeto1 , projeto2]

let projetoAtual = 0 

function ProximoProjeto(){
    if(projetoAtual < 3){
        projetoAtual++
    }else{
        projetoAtual= 0
    }

    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual]

    descricao = document.querySelector(".texto-corpo")
    descricao.innerHTML = projetosDescricao[projetoAtual].descricao 
    
    imagem = document.querySelector(".foto-perfil")


}