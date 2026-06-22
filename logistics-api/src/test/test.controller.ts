import { Controller, Get } from '@nestjs/common';
import { getConnection } from '../database/database.service';

@Controller('test')
export class TestController {

  @Get()
  async getData() {

    const pool = await getConnection();

    const result = await pool
      .request()
      .query('SELECT TOP 10 * FROM TblUserLogin');

    return result.recordset;
  }
}