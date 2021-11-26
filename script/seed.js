"use strict";

// const {
//   db,
//   models: User,
// } = require("../server/db");

const db = require("../server/db/db");
const User = require("../server/db/models/User");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const [Cody, Murphy, Sally] = await User.bulkCreate([
    {
      uid: "uHiPs9ZlgwPuLeLOIhdsfTUBqCM2",
      email: "cody@gmail.com",
      firstName: "Cody",
      lastName: "Coder",
    },
    {
      uid: "q2LeZcqxbFW5Uy7KMTeJ6ohlBp13",
      email: "murphy@gmail.com",
      firstName: "Murphy",
      lastName: "Murphster",
    },
    {
      uid: "MD7YjRJ5UUYB2ymS0Z2OaMXPNIp2",
      email: "sally@gmail.com",
      firstName: "Sally",
      lastName: "Sallinen",
    },
  ]);
}
/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}


// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
