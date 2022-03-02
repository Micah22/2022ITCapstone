const trainers = require('../data/trainers.json');

const trainerService = {
    getAllTrainers: () => {
        return trainers;
    },

    // Returns all trainers for a given type
    getTrainersByType: (type) => {
        return trainers.filter( t => {
            return t.pokemon.includes(type);
        });
    }
};

module.exports = trainerService;