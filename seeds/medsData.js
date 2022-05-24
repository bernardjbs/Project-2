const Medications = require('../models/Medications');

const medsData = [
    // Specify table information (according to models)
    {
        // Name column
        "name": "Penicillin",
        // Price column
        "price": 1.55,
        // Expiry date column
        "expiry_date": "2024/05/24",
        // User id reference (to users model(table))
        "user_id": 2,
    },
];

const seedMeds = () => Medications.bulkCreate(medsData);

module.exports = seedMeds;

// Possible to allow user to upload a photo of the actual medication and purchase receipt (can aid tax purposes)? ==> more techy options to consider later on
