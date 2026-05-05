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
    const contactId = new ObjectId(req.params.id.$oid);
    const result = await mongodb.getDatabase('cluster0').db('data0').collection('contacts').find({ _id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

module.exports = {
    getAll,
    getSingle
};