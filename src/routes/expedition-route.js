import e from "express";
import controllers from "../controllers/expedition-controller.js";

const router = e.Router();

router.post('/', controllers.store);
router.get('/', controllers.show);
router.get('/:id', controllers.showById);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.destroy);

export default router;