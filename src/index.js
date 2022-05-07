import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import ImageFileInput from './components/imageFileInput/ImageFileInput';
import ImageUploader from './service/image_uploader';
import CardRepository from './service/cardRepository';

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);
const FileInput = (props) => <ImageFileInput {...props} imageUploader={imageUploader} />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository} />
  </React.StrictMode>,
);
