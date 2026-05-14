const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req,res) => {
    const result = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req,res) => {
    const contactId = new ObjectId(req.params);
    const result = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').find({ _id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const createContact = async (req,res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').insertOne( contact);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the contact.')
    }
};

const updateContact = async (req,res) => {
    const contactId = new ObjectId(req.params);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').replaceOne({ _id: contactId}, contact);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the contact.')
    }
};

const delContact = async (req,res) => {
    const contactId = new ObjectId(req.params);
     const response = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').remove({ _id: contactId}, true);
     if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting the contact.')
    }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    delContact
};