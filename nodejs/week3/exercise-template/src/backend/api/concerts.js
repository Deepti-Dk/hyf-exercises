const express = require('express');
const router = express.Router();
const knex = require('../database');

//GET http://localhost:3000/api/concerts/ -- inpoint
//endpoint
router.get('/', async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info

    const concerts = await knex('concerts');
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

//POST static onto DB
//POST http://localhost:3000/api/concerts/ -- inpoint
//endpoint
// router.post('/', async (request, response) => {
//   console.log('POST localhost:3000/api/concerts/');
//   console.log(request.body);
//   const newConcert = await knex('concerts').insert({
//     title: 'jazz',
//     band: 'blues',
//     venue: 'CPH Opera',
//     created_date: new Date(),
//     performance_date: new Date(),
//     price: 1000,
//   });
//   response.json(newConcert);
// });

//POST dynamically from POSTMAN onto DB
// const createConcert = async ({ body }) => {
//   const { title, band, venue, created_date, performance_date, price } = body;
//   return await knex('concerts').insert({
//     title: title,
//     band: band,
//     venue: venue,
//     created_date: created_date,
//     performance_date: performance_date,
//     price: price,
//   });
// };
// router.post('/', async (request, response) => {
//   createConcert({
//     body: request.body,
//   })
//     .then((result) => response.json(result))
//     .catch((error) => {
//       response.status(400).send('Bad request').end();
//       console.log(error);
//     });
// });

//GET dynamic limit concerts
// const getLatestConcerts = async (limit) => {
//   try {
//     return await knex('concerts')
//       .select('*')
//       .orderBy('id', 'DESC')
//       .limit(limit);
//   } catch (error) {
//     console.log(error);
//   }
// };
// router.get('/', async (request, response) => {
//   getLatestConcerts(request.query.limit)
//     .then((result) => response.json(result))
//     .catch((ex) => {
//       response.status(400).send('Bad request').end();
//       console.log(ex);
//     });
// });

// const editConcerts = async ({ body, id }) => {
//   const { title, band, venue, created_date, performance_date, price } = body;
//   const concert = await knex.from('concerts').select('*').where({
//     id: id,
//   });
//   if (concert.length === 0) {
//     throw new HttpError('Bad request', `Contact not found: ID ${id}!`, 404);
//     //console.log('Error');
//   }
//   const queryDto = {
//     title: title,
//     band: band,
//     venue: venue,
//     created_date: created_date,
//     performance_date: performance_date,
//     price: price,
//   };
//   if (Object.keys(queryDto).length !== 0) {
//     return await knex('concerts')
//       .where({
//         id: id,
//       })
//       .update(queryDto);
//   } else return 'Nothing updated!';
// };

// router.put('/:id', async (req, res) => {
//   editConcerts({
//     body: req.body,
//     id: req.params.id,
//   })
//     .then((result) => res.json(result))
//     .catch((error) => {
//       res.status(400).send('Bad request').end();
//       console.log(error);
//     });
// });

// const deleteConcerts = async ({ id }) => {
//   const concert = await knex.from('concerts').select('*').where({
//     id: id,
//   });
//   if (concert.length === 0) {
//     throw new HttpError('Bad request', `Contact not found: ID ${id}!`, 404);
//     //console.log('Error');
//   }
//   if (Object.keys(concert).length !== 0) {
//     return await knex('concerts')
//       .where({
//         id: id,
//       })
//       .delete(concert);
//   } else return 'Nothing updated!';
// };

// router.delete('/:id', async (req, res) => {
//   deleteConcerts({
//     id: req.params.id,
//   })
//     .then((result) => res.json(result))
//     .catch((error) => {
//       res.status(400).send('Bad request').end();
//       console.log(error);
//     });
// });
//querystring.parse

// router.post('/:id', async (request, response) => {
//   const id = parseInt(request.params.id);
//   getConcerts(id)
//     .then((result) => response.json(result))
//     .catch((ex) => {
//       response.status(400).send('Bad request').end();
//       console.log(ex);
//     });
// });
// router.post('/', async (request, response) => {
//   console.log(request);
// });

module.exports = router;
