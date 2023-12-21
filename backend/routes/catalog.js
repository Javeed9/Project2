const express = require('express');
const upload = require('../middleware/multer')
const authenticateToken = require('../middleware/auth');
const catalogItem = require('../model/catalogItem');
const fs = require('fs');

const router = express.Router();

router.post('/', upload.single('file') , (req, res) => {
    const obj = {
      category: req.body.category,
      description: req.body.description,
      img: {
        data: fs.readFileSync(req.file.path),
        contentType: req.file.mimetype,
      },
    };

    catalogItem.create(obj)
      .then((item) => {
        fs.unlinkSync(req.file.path)
        res.status(201).json({ message: 'catalogItem added.', item: item });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
});

router.get('/:category', (req, res) => {
  catalogItem.find({category:req.params.category})
    .then((items) => {
      const modifiedItems = items.map(item => ({
        category: item.category,
        description: item.description,
        img: {
          data: item.img.data.toString('base64'),
          contentType: item.img.contentType,
        },
      }));
      res.json(modifiedItems);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;