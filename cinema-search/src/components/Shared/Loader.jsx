

const Loader = () => {
return (
    <div className={styles.backdrop}>
      <div className={styles.spinner}></div>
      <p>Завантаження...</p>
    </div>
  );
};

export default Loader;