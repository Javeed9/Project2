import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import useAuth from '../../Shared/Hooks/Auth'
import { useParams } from 'react-router-dom';

const PhotoUpload = () => {
  const [photos, setPhotos] = useState([]);
  const { isAdmin } = useAuth()
  const { category } = useParams();
  const uploadHandler = (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category',category)
      axios.post(import.meta.env.VITE_BACKEND_ROUTE + 'catalog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          setPhotos((prevPhotos) => [res.data, ...prevPhotos]);
        })
        .catch((error) => {
          console.error('Error uploading photo:', error);
        });
    }
  };

  useEffect(() => {
    const fetchCatalogItems = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_ROUTE + `catalog/${category}`);
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching catalog items:', error);
      }
    };
  
    fetchCatalogItems();
  }, []);

  return (
    <>
      {photos.map((photo, index) => (
        <div className='inline-flex flex-wrap gap-8 justify-evenly m-4'>
          <CategoryCard
          key = {index}
          index = {index}
          photo = {photo}
          />
        </div>
        ))}
    { isAdmin && (
      <form>
      <input type="file" name="file" onChange={uploadHandler} />
      </form>
    )}
  </>
  );
};

export default PhotoUpload;
