import React from "react";

interface Cities{
    Rj:string
    Sp: string
    Mg?: string
}
var cidade : Cities;

function Cidades(){
    let cities= cidade;
    cities={
            Rj: "Rio de Janeiro",
            Sp: "São Paulo",
            Mg: "Minas Gerais",
        }
        return cities
    }



export default Cidades;

// GET - TRAZ DADOS
// POST - ENVIAR OD DADOS DO NOSSO COMP
// PUT - UPDATES NOS DADOS