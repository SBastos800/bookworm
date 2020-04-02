import React from 'react';
import styles from "./App.module.scss";
import BookList from "../../components/BookList";

function App() {
  return (
    <main className={styles.container}>
      <section className={styles.page}>
        <div className={styles.navWrapper}>
          <nav className={styles.mainNav}></nav>
        </div>
        <section className={styles.rightWrapper}>
          <header className={styles.appHeader}>
            <h1>Bookworm</h1>
          </header>
          <BookList />
        </section>
      </section>
    </main>
  );
}

export default App;
