import express from 'express';
import { 
    obtenerSuperheroePorIdController, 
    obtenerTodosLosSuperheroesController, 
    buscarSuperheroePorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller 
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get ('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get ('/heroes/buscar/:atributo/:valor', buscarSuperheroePorAtributoController);
router.get ('/heroes/:id', obtenerSuperheroePorIdController);
router.get ('/heroes', obtenerTodosLosSuperheroesController);

export default router;