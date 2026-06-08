const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
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