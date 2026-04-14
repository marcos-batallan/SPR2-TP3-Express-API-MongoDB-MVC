// Se importa el esquema definido en el modelo para consultar la DB
import SuperHero from "../models/SuperHero.mjs";

// Se importa la interfaz base
import IRepository from "./IRepository.mjs";

// Esta repo debe cumplir con el contrato de herencia de IRepository
class SuperHeroRepository extends IRepository {
    async obtenerMayoresDe30 () {
        
        return await SuperHero.find({
            // Se utliza el operador de comparación $gt (mayor que) de MongoDB para traer documentos cuya edad sea mayor a 30.
            edad: { $gt: 30 },
            planetaOrigen: 'Tierra',
            // Los arrays empiezan en índice 0. Existe un segundo elemento y por lo tanto, hay al menos 2 poderes.
            "poderes.1": { $exists: true }
        });
    }
    
    async buscarPorAtributo (atributo, valor) {
    // Los corchetes indican que el nombre del campo “atributo” lo tengo en una variable
    return await SuperHero.find({ [atributo]: valor });
    }
    
    async obtenerPorId (id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos () {
        return await SuperHero.find({});
    }
}

//Devuelve los datos de la DB
export default new SuperHeroRepository(); 


/*****
Este archivo encapsula el acceso a los datos y centraliza las consultas a la DB
*****/