
import PersonModel from "../models/personModel.js";

export const createPerson = async (personData) => {
    try {
        const newPerson = new PersonModel(personData);
        const savedPerson = await newPerson.save();
        return savedPerson;
    }
    catch (e) {
        console.error('error in createPerson: ', e);
    }
}

export const getAllPersons = async () => {
    try {
        const persons = await PersonModel.find({})
            .select('name age address');
        return persons;
    }
    catch (e) {
        console.error('error in read all persons: ', e);
    }
}

export const getPersonById = async (id) => {
    try {
        const person = await PersonModel.findById(id);
        return person;
    }
    catch (e) {
        console.error('error in read person by id: ', e);
    }
}

export const updatePerson = async (id, personData) => {
    try {
        const updatedPerson = await PersonModel.findByIdAndUpdate(
            id,
            personData,
            { new: true, runValidators: true }
        );
        return updatedPerson;
    }
    catch (e) {
        console.error('error in update person: ', e);
    }
}

export const deletePerson = async (id) => {
    try {
        const deletedPerson = await PersonModel.findByIdAndDelete(id);
        return deletedPerson;
    }
    catch (e) {
        console.error('error in delete person: ', e);
    }
}
