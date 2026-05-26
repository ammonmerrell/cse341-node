const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req,res) => {
    //#swagger.tags=['stores']
    const result = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('stores').find();
    result.toArray((err) => {
            if (err) {
                res.status(400).json({message: err});
            }
    }).then((stores) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(stores);
    });
};

const getSingle = async (req,res) => {
    //#swagger.tags=['stores']
    const storeId = new ObjectId(req.params);
    const result = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('stores').find({ _id: storeId });
    result.toArray((err) => {
            if (err) {
                res.status(400).json({message: err});
            }
    }).then((stores) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(stores);
    });
};

const createStore = async (req,res) => {
    //#swagger.tags=['stores']
    const store = {
        city: req.body.city,
        items: req.body.items
    };
    const response = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('stores').insertOne(store);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the store.')
    }
};

const updateStore = async (req,res) => {
    //#swagger.tags=['stores']
    const storeId = new ObjectId(req.params);
    const store = {
        city: req.body.city,
        items: req.body.items
    };
    const response = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('stores').replaceOne({ _id: storeId}, store);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the game.')
    }
};

const deleteStore = async (req,res) => {
    //#swagger.tags=['stores']
    const storeId = new ObjectId(req.params);
    
    const response = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('stores').deleteOne({ _id: storeId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting the store.')
    }
};




module.exports = {
    getAll,
    getSingle,
    createStore,
    updateStore,
    deleteStore
};