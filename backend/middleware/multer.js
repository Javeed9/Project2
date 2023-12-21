const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.UPLOAD_PATH)
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