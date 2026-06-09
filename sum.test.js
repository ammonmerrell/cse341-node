// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });



// mock database file
import mockingoose from 'mockingoose';
import Game from './sum';

describe('test mongoose Game model', () => {
  it('should return the doc with findById', async () => {
    const _doc = {
    "_id": "6a0c6dc429e0c632d66a6ba7",
    "name": "The Legend of Zelda:Spirit Tracks",
    "releaseDate": "12/07/2009",
    "platform": "Nintendo DS",
    "genre": "action-adventure",
    "description": "Link and Zelda navigate the world by train to stop a demon from destroying the world.",
    "players": "single-player",
    "type": "handheld"
  };

    mockingoose(Game).toReturn(_doc, 'findOne');

    const doc = await Game.findById('6a0c6dc429e0c632d66a6ba7');
    expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
  });

  it('should return the doc with updateOne', async () => {
    const _doc = { ok: 1, nModified: 1, n: 1 };

    mockingoose(Game).toReturn(_doc, 'updateOne');

    const result = await Game.updateOne({ name: 'changed' }, {});
    expect(result).toMatchObject(_doc);
  });
});



// const express = require('express');
// const router = express.Router();
// const games = require('./controllers/games');
// test('games should have 2 games', () => {
//     expect(games.getAll().length).toBe(2);
// });



// below copied and edited from jest mongodb website


// const {mongoClient} = require('mongodb');
// describe('insert', () => {
//     let connection;
//     let db;

//     beforeAll(async () => {
//         connection = await mongoClient.connect(MONGODB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         db = await connection.db(MONGODB_URL);
//     });

//     afterAll(async () => {
//         await connection.close();
//     });
    
//     it('should insert a doc into collection', async () => {
//         const games = db.collection('games');       

//         const mockGame = {_id: 'some-game-id', name: 'Sample Game'};
//         await games.insertOne(mockGame);

//         const insertedGame = await games.findOne({_id: 'some-game-id'});
//         expect(insertedUser).toEqual(mockUser);
//     });
// });



// below copied wholesale from jest mongodb website 

// const {MongoClient} = require('mongodb');

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = {_id: 'some-user-id', name: 'John'};
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({_id: 'some-user-id'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });