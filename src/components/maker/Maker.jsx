import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ authService, FileInput }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Jang',
      company: 'Wmpo',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'sbjang@gmail.com',
      message: 'go for it',
      fileName: 'jangsu',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Subin',
      company: 'Storelink',
      theme: 'light',
      title: 'Software Engineer',
      email: 'sbjang@gmail.com',
      message: 'go for it',
      fileName: 'jsb',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Pung',
      company: 'Hell',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'sbjang@gmail.com',
      message: 'go for it',
      fileName: 'p',
      fileURL: null,
    },
  });

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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
