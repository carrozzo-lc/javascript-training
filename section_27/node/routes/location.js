const express = require('express');
//const MongoClient = require('mongo').MongoClient;
const { MongoClient } = require("mongodb");

const router = express.Router();

const url = 'mongodb+srv://new_user_luca10:xXJrd2ersNFfaJnN@cluster0.nxhns.mongodb.net/location?retryWrites=true&w=majority';

const client = new MongoClient(url);

const locationStorage  = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  //const id = Math.random();

  async function run() {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("location").command({ ping: 1 });
      console.log("Connected successfully to server");

      // const db = client.db('locations');

      // db.collection('user-locations').insertOne(
      //   {
      //     address: req.body.address, 
      //     coords: {
      //       lat: req.body.lat,
      //       lng: req.body.lng
      //     }
      //   },
      //   function(err, r) {
      //     console.log('r', r)
      //     res.json({message: 'Stored location!', locId: r.insertedId });
      //   }
      // );

      const doc = {
        address: req.body.address, 
        coords: {
          lat: req.body.lat,
          lng: req.body.lng
        }
      };
      const result = await collection('user-locations').insertOne(doc);
      console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
      );
      res.json({message: 'Stored location!', locId: r.insertedId });

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  // locationStorage.locations.push({
  //   id: id, 
  //   address: req.body.address, 
  //   coords: {
  //     lat: req.body.lat,
  //     lng: req.body.lng
  //   }
  // });
  //res.json({message: 'Stored location!', locId: id});
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find(loc => {
    return loc.id === locationId;
  });
  if (!location) {
    return res.status(404).json({message: 'Mot found!'});
  }
  res.json({
    address: location.address,
    coordinates: location.coords
  });
});

module.exports = router;