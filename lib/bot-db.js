const sqlite3 = require('sqlite3').verbose();

class BotDb {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  getAllWords() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM words;', (err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      });
    });
  }

  getWord(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM words WHERE id = ?;',
        [id],
        (err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      });
    });
  }

  insertWord(keyword, response) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('INSERT INTO words(keyword, response) VALUES(?, ?)');
        stmt.run(keyword, response);
        stmt.finalize();

        this.db.exec('COMMIT');
        resolve();
      });
    });
  }

  deleteWord(id) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('DELETE FROM words WHERE id = ?');
        stmt.run(id);
        stmt.finalize();

        this.db.exec('COMMIT');
        resolve();
      });
    });
  }

  updateWord(id, keyword, response) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('UPDATE words SET keyword = ?, response = ? WHERE id = ?');
        stmt.run(keyword, response, id);
        stmt.finalize();

        this.db.exec('COMMIT');
        resolve();
      });
    });
  }

  close() {
    this.db.close();
  }

}

module.exports = BotDb;
