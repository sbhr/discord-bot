import { resolve } from 'path';

const sqlite3 = require('sqlite3').verbose();

class BotDb {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath);
  }

  getAllWords() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM words', (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  getWord(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM words WHERE id = ?',
        [id],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        });
    });
  }

  getWordByKeyword(keyword) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM words WHERE keyword LIKE %?%',
        [keyword],
        (err, row) => {
          if (err) {
            reject(err);
          } else {
            resolve
          }
        });
    });
  }

  insertWord(keyword, response) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('INSERT INTO words(keyword, response) VALUES(?, ?)');
        stmt.run([keyword, response], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
        stmt.finalize();

        this.db.exec('COMMIT');
      });
    });
  }

  deleteWord(id) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('DELETE FROM words WHERE id = ?');
        stmt.run([id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
        stmt.finalize();

        this.db.exec('COMMIT');
      });
    });
  }

  updateWord(id, keyword, response) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('UPDATE words SET keyword = ?, response = ? WHERE id = ?');
        stmt.run([keyword, response, id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
        stmt.finalize();

        this.db.exec('COMMIT');
      });
    });
  }

  insertUser(id, name) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('INSERT INTO users(id, name) VALUES(?, ?)');
        stmt.run([id, name], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
        stmt.finalize();

        this.db.exec('COMMIT');
      });
    });
  }

  insertPlayLog(userId, gameName, startTime, endTime, playTime) {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        this.db.exec('BEGIN TRANSACTION');

        const stmt = this.db.prepare('INSERT INTO play_log(user_id, game_name, start_time, end_time, play_time) VALUES(?, ?, ?, ?, ?)');
        stmt.run([userId, gameName, startTime, endTime, playTime], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
        stmt.finalize();

        this.db.exec('COMMIT');
      });
    });
  }

  close() {
    this.db.close();
  }

}

module.exports = BotDb;
