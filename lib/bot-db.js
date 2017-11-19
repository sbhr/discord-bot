const sqlite3 = require('sqlite3').verbose();

class BotDb {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  async getAllWords() {
    return await new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM WORDS;', (err, row) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      });
    });
  }

  async insertWord(keyword, response) {
    return await new Promise((resolve, reject) => {
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

  async deleteWord(id) {
    return await new Promise((resolve, reject) => {
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

  close() {
    this.db.close();
  }

}

module.exports = BotDb;
