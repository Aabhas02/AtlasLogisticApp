import * as sql from 'mssql';

export const dbConfig = {
  user: 'sa1',
  password: 'Sa#Con@275z',
  server: '103.224.23.42',
  database: 'AndroidAppDB',
  options: {
    trustServerCertificate: true,
    encrypt: false,
  },
};

export async function getConnection() {
  try {
    return await sql.connect(dbConfig);
  } catch (err) {
    console.log(err);
  }
}