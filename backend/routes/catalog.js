const express = require('express');
const upload = require('../middleware/auth')
// const uploadOnCloudinary = require('../utils/cloudinary')
// const authenticateToken = require('../middleware/auth');
const catalogItem = require('../model/catalogItem');

const router = express.Router();

router.post('/', upload ('file') , (req, res) => {

    const obj = {
      category: req.body.category,
      description: req.body.description,
      img: {
        data: req.file,
        contentType: req.file.mimetype,
      },
    };

    catalogItem.create(obj)
      .then((item) => {
        res.status(201).json({ message: 'catalogItem added.', item: item });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

module.exports = router;