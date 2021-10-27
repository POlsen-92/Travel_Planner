const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

// Travellers have many Locations
Traveller.hasMany(Location, {
    foreignKey: 'traveller_id'
})

// Locations have many travellers through trips
Location.hasMany(Traveller, {
    through: Trip,
    // as: 'product_tags',
    foreignKey: 'location_id',
  });

module.exports={
    Location,
    Traveller,
    Trip
};