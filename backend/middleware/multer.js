const multer = require('multer');
const path = require('path');
const currDir = path.resolve(__dirname, '..');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path, process.env.UPLOAD_PATH))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer(
    { storage }
    // { storage: storage }
)

module.exports = upload