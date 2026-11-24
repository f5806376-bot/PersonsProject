
import express from 'express';

import {
    createPersonService,
    getAllPersonsService,
    getPersonByIdService,
    updatePersonService,
    deletePersonService
} from '../services/personService.js';

const personRouter = express.Router();


personRouter.get('/', async (req, res) => {
    try {
        const persons = await getAllPersonsService();
        res.json(persons);
    }
    catch (e) {
        console.error('error in get all persons route: ', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


personRouter.post('/', async (req, res) => {
    try {
        const newPerson = await createPersonService(req.body);
        res.status(201).json(newPerson);
    }
    catch (e) {
        console.error('error in create person route: ', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


personRouter.get('/:id', async (req, res) => {
    try {
        const person = await getPersonByIdService(req.params.id);

        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.json(person);
    }
    catch (e) {
        console.error('error in get person by id route: ', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


personRouter.put('/:id', async (req, res) => {
    try {
        const updatedPerson = await updatePersonService(req.params.id, req.body);

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.json(updatedPerson);
    }
    catch (e) {
        console.error('error in update person route: ', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


personRouter.delete('/:id', async (req, res) => {
    try {
        const deletedPerson = await deletePersonService(req.params.id);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.json(deletedPerson);
    }
    catch (e) {
        console.error('error in delete person route: ', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default personRouter;
