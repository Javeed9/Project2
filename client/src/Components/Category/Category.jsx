import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoUpload = () => {
  const [photos, setPhotos] = useState([]);

  const uploadHandler = (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post(import.meta.env.VITE_BACKEND_ROUTE + 'catalog', formData)
        .then((res) => {
          setPhotos((prevPhotos) => [res.data, ...prevPhotos]);
        })
        .catch((error) => {
          console.error('Error uploading photo:', error);
        });
    }
  };

  useEffect(() => {
    // Additional code to fetch existing photos from the server if needed
    // Example: axios.get('/photos').then((res) => setPhotos(res.data));
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  return (
    <div>
      {/* Input for selecting a file */}
      <input type="file" name="file" onChange={uploadHandler} />

      {/* Display uploaded photos */}
      {photos.map((photo, index) => (
        <img key={index} src={photo.url} alt={`Uploaded ${index}`} />
      ))}
    </div>
  );
};

export default PhotoUpload;
