import {Router} from 'express';
import {supplementsController} from '../controllers/supplementsController';
import {filterMedicines} from '../middlewares/filters';

const router = Router();

export default ():Router => {
    const api = Router();

    // GET /supplements
    api.get('/',filterMedicines, supplementsController.findAllSupplemments)

    // GET /supplements/:id
    api.get('/:id', supplementsController.findSupplement);

    // POST /supplements
    api.post('/', supplementsController.createSupplement);

    // PUT /supplements/:id
    api.put('/:id', supplementsController.updateSupplement);

    // PATCH /supplements/:id
    api.patch('/:id', supplementsController.updateSupplementPartially);

    // DELETE /supplements/:id
    api.delete('/:id', supplementsController.deleteSupplement);

    return api
}