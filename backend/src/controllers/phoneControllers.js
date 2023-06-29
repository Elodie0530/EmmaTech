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
const addPhone = (req, res) => {
  const phoneData = req.body;

  models.phone
    .add(phoneData)
    .then(() => {
      res
        .status(200)
        .json({ message: "Le téléphone a été ajouté avec succès." });
    })
    .catch(() => {
      res.status(500).json({
        error: "Une erreur s'est produite lors de l'ajout du téléphone.",
      });
    });
};

module.exports = {
  getAllPhones,
  addPhone,
};
