const models = require("../models");

const getAllPhones = (req, res) => {
  models.phone
    .getAll()
    .then((phones) => {
      res.status(200).json(phones);
    })
    .catch(() => {
      res.status(500).json({
        error:
          "Une erreur s'est produite lors de la récupération des téléphones.",
      });
    });
};

module.exports = {
  getAllPhones,
};
