/*
    Event Routes
    /api/events
*/

const { Router } = require("express");
const {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");
const router = Router();

// Todas tienen que pasar por la validacion del Token

router.use(validarJWT);

// Obtener Eventos

router.get("/", obtenerEventos);

router.post(
  "/", 
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom( isDate ),
    check("end", "La fecha de finalizacion es obligatoria").custom( isDate ),
    validarCampos

  ],
  crearEvento);

router.put("/:id", actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
