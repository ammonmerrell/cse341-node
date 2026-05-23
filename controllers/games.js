const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req,res) => {
    //#swagger.tags=['games']
    const result = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('games').find();
    result.toArray().then((games) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(games);
    });
};

const getSingle = async (req,res) => {
    //#swagger.tags=['games']
    const gameId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('games').find({ _id: gameId });
    result.toArray().then((games) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(games);
    });
};

const createGame = async (req,res) => {
    //#swagger.tags=['games']
    const game = {
        name: req.body.name,
        releaseDate: req.body.releaseDate,
        platform: req.body.platform,
        genre: req.body.genre,
        description: req.body.description,
        players: req.body.players,
        type: req.body.type
    };
    const response = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('games').insertOne( game);
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while creating the game.')
    }
};

const updateGame = async (req,res) => {
    //#swagger.tags=['games']
    const gameId = new ObjectId(req.params);
    const game = {
        name: req.body.name,
        releaseDate: req.body.releaseDate,
        platform: req.body.platform,
        genre: req.body.genre,
        description: req.body.description,
        players: req.body.players,
        type: req.body.type
    };
    const response = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('games').replaceOne({ _id: gameId}, game);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while updating the game.')
    }
};

const deleteGame = async (req,res) => {
    //#swagger.tags=['games']
    const gameId = new ObjectId(req.params);
    const response = await mongodb.getDatabase('cluster0').db('project2(w3-4)').collection('games').deleteOne({ _id: gameId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occured while deleting the contact.')
    }
};





module.exports = {
    getAll,
    getSingle,
    createGame,
    updateGame,
    deleteGame
};