
import {
    createPerson,
    getAllPersons,
    getPersonById,
    updatePerson,
    deletePerson
} from "../dal/crud/personCrud.js";

export const createPersonService = async (personData) => {
    try {
        const newPerson = await createPerson(personData);
        return newPerson;
    }
    catch (e) {
        console.error('error in createPersonService: ', e);
    }
}

export const getAllPersonsService = async () => {
    try {
        const persons = await getAllPersons();
        return persons;
    }
    catch (e) {
        console.error('error in getAllPersonsService: ', e);
    }
}

export const getPersonByIdService = async (id) => {
    try {
        const person = await getPersonById(id);
        return person;
    }
    catch (e) {
        console.error('error in getPersonByIdService: ', e);
    }
}

export const updatePersonService = async (id, personData) => {
    try {
        const updatedPerson = await updatePerson(id, personData);
        return updatedPerson;
    }
    catch (e) {
        console.error('error in updatePersonService: ', e);
    }
}

export const deletePersonService = async (id) => {
    try {
        const deletedPerson = await deletePerson(id);
        return deletedPerson;
    }
    catch (e) {
        console.error('error in deletePersonService: ', e);
    }
}
