const express = require('express')
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path');
const authenticateToken = require("../middleware/auth")
const catalogItem = require('../model/catalogItem')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res, next) => {

	var obj = {
		category: req.body.category,
		description: req.body.description,
		img: {
			data: fs.readFileSync(path.join(__dirname + '../uploads' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	catalogItem.create(obj)
	.then ((err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			res.status(201).json("catalogItem added.");
		}
	});
});

router.get('/:category', (req, res) => {
    const category = req.params.category

	catalogItem.find({ category : category})
	.then((data, err)=>{
		if(err){
			console.log(err);
		}
		res.status(200).send(data)
	})
	.catch(err => {
		console.log(err);
		res.status(500).json("Internal Server Error")
	})
});

router.patch('/:category', upload.single('image'), (req, res, next) => {
    const categoryToUpdate = req.params.category;

    catalogItem.findOne({ category: categoryToUpdate })
        .then((foundItem) => {
            if (!foundItem) {
                return res.status(404).json({ error: "Item not found." });
            }

            foundItem.category = req.body.category || foundItem.category;
            foundItem.description = req.body.description || foundItem.description;

            if (req.file) {
                foundItem.img.data = fs.readFileSync(path.join(__dirname, '../uploads', req.file.filename));
                foundItem.img.contentType = 'image/png';
            }

            foundItem.save()
                .then(() => {
                    res.status(200).json({ message: "Item updated successfully." });
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({ error: "Internal server error." });
                });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        });
});

router.delete('/:category', (req, res, next) => {
    const categoryToDelete = req.params.category;

    catalogItem.findOneAndDelete({ category: categoryToDelete })
        .then((deletedItem) => {
            if (!deletedItem) {
                return res.status(404).json({ error: "Item not found." });
            }

            res.status(200).json({ message: "Item deleted successfully." });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        });
});


module.exports = router;