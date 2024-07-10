import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000'
})


const Contato = {
    getContato: () =>{
       return instance.get('/Contatos');
    },

    salvarContato: (contato) =>{
       return instance.post("/Contatos", contato);
    }, 

    atualizarContato: (contato) => {
        return instance.put("/Contatos/" + contato.id, contato);
    },

    getContatoPorId: (idContato) =>{
        return instance.get("/Contatos/" + idContato);
    },

    apagarContato: (idContato) =>{
        return instance.delete("/Contatos/" + idContato)
    }


}

export default Contato;