import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "Reactoffline.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

export default class Database {

  initDB() {
    let db;
    return new Promise((resolve) => {
      console.log("Plugin integrity check ...");
      SQLite.echoTest()
        .then(() => {
          console.log("Integrity check passed ...");
          console.log("Opening database ...");
          SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size
          )
            .then(DB => {
              db = DB;
              console.log("Database OPEN");
              db.executeSql('SELECT 1 FROM ALuno LIMIT 1').then(() => {
                  console.log("Database is ready ... executing query ...");
              }).catch((error) =>{
                  console.log("Received error: ", error);
                  console.log("Database not yet ready ... populating data");
                  db.transaction((tx) => {
                      tx.executeSql('CREATE TABLE IF NOT EXISTS Aluno (alunoId, alunoNome, alunoDataNascimento, alunoSerie, alunoCep, alunoRua, alunoNumero, alunoComplemento, alunoBairro, alunoCidade, alunoEstado, alunoNomeMae, alunoCpfMae, alunoDataPagamentoMae)');
                  }).then(() => {
                      console.log("Table created successfully");
                  }).catch(error => {
                      console.log(error);
                  });
              });
              resolve(db);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log("echoTest failed - plugin not functional");
        });
      });
  };

  closeDatabase(db) {
    if (db) {
      console.log("Closing DB");
      db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  };

  listAlunos() {
    return new Promise((resolve) => {
      const alunos = [];
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('SELECT a.alunoId, a.alunoNome FROM Aluno a', []).then(([tx,results]) => {
            console.log("Query completed");
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              console.log(`Aluno ID: ${row.alunoId}, Aluno Nome: ${row.alunoNome}`)
              const { alunoId, alunoNome } = row;
              alunos.push({
                alunoId,
                alunoNome
              });
            }
            console.log(alunos);
            resolve(alunos);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  alunoById(id) {
    console.log(id);
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM Aluno WHERE alunoId = ?', [id]).then(([tx,results]) => {
            console.log(results);
            if(results.rows.length > 0) {
              let row = results.rows.item(0);
              resolve(row);
            }
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  addAluno(aluno) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('INSERT INTO Aluno VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [aluno.alunoId, aluno.alunoNome, aluno.alunoDataNascimento, aluno.alunoSerie, aluno.alunoCep, aluno.alunoRua, aluno.alunoNumero, aluno.alunoComplemento, aluno.alunoBairro, aluno.alunoCidade, aluno.alunoEstado, aluno.alunoNomeMae, aluno.alunoCpfMae, aluno.alunoDataPagamentoMae]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  updateAluno(id, aluno) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('UPDATE Aluno SET alunoNome = ?, alunoDataNascimento = ?, alunoSerie = ?, alunoCep = ?, alunoRua = ?, alunoNumero = ?, alunoComplemento = ?, alunoBairro = ?, alunoCidade = ?, alunoEstado = ?, alunoNomeMae = ?, alunoCpfMae = ?, alunoDataPagamentoMae = ?  WHERE AlunoId = ?', [aluno.alunoNome, aluno.alunoDataNascimento, aluno.alunoSerie, aluno.alunoCep, aluno.alunoRua, aluno.alunoNumero, aluno.alunoComplemento, aluno.alunoBairro, aluno.alunoCidade, aluno.alunoEstado, aluno.alunoNomeMae, aluno.alunoCpfMae, aluno.alunoDataPagamentoMae, id]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  deleteAluno(id) {
    return new Promise((resolve) => {
      this.initDB().then((db) => {
        db.transaction((tx) => {
          tx.executeSql('DELETE FROM Aluno WHERE alunoId = ?', [id]).then(([tx, results]) => {
            console.log(results);
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(db);
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    });
  }
}
