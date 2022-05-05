import CardAddForm from '../cardAddForm/CardAddForm';
import CardEditForm from '../cardEditForm/CardEditForm';
import styles from './Editor.module.css';

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => {
        return <CardEditForm key={card.id} card={card} />;
      })}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
