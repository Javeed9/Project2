const express = require('express');
const upload = require('../middleware/multer')
const uploadOnCloudinary = require('../utils/cloudinary')
const authenticateToken = require('../middleware/auth');
const catalogItem = require('../model/catalogItem');

const router = express.Router();

router.post('/', upload.single('file') , async (req, res) => {
    const uploadData = await uploadOnCloudinary(req.file.path)
    console.log(uploadData)

    // const obj = {
    //   category: req.body.category,
    //   description: req.body.description,
    //   imgLink: uploadData.public_id
    // };

    // catalogItem.create(obj)
    // .then(() => {
    //     res.status(201).json({ message: 'catalogItem added.' });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     res.status(500).json({ error: 'Internal Server Error' });
    //   });
  });

module.exports = router;