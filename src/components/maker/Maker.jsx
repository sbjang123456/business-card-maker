import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Jang',
      compnay: 'Wmpo',
      theme: 'light',
      title: 'Software Engineer',
      email: 'sbjang@wemakeprice.com',
      message: 'go for it',
      fileName: 'jangsu',
      fileURL: 'jangsu.png',
    },
    {
      id: '2',
      name: 'Subin',
      compnay: 'Storelink',
      theme: 'light',
      title: 'Software Engineer',
      email: 'sbjang@storelink.io',
      message: 'go for it',
      fileName: 'jsb',
      fileURL: 'jsb.png',
    },
    {
      id: '3',
      name: 'Pung',
      compnay: 'Hell',
      theme: 'light',
      title: 'Software Engineer',
      email: 'sbjang@hell.com',
      message: 'go for it',
      fileName: 'p',
      fileURL: 'p.png',
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
