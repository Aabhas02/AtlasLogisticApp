import { Injectable } from '@nestjs/common';
import * as sql from 'mssql';
import { getConnection } from '../database/database.service';

@Injectable()
export class AuthService {

  async register(body: any) {

    const pool = await getConnection();

    await pool.request()
      .input('UserName', sql.VarChar, body.username)
      .input('Password', sql.VarChar, body.password)
      .input('Email', sql.VarChar, body.email)
      .input('Mobile', sql.VarChar, body.mobile)
      .query(`
        INSERT INTO TblRegistrationMaster
        (
          RM_UserName,
          RM_Password,
          RM_OfficialEmailId,
          RM_MobileNumber,
          RM_CreatedOn,
          RM_IsActive
        )
        VALUES
        (
          @UserName,
          @Password,
          @Email,
          @Mobile,
          GETDATE(),
          1
        )
      `);

    return {
      success: true,
      message: 'User Registered'
    };
  }

  async login(body: any) {

    const pool = await getConnection();

    const result = await pool.request()
      .input('UserName', sql.VarChar, body.username)
      .input('Password', sql.VarChar, body.password)
      .query(`
        SELECT *
        FROM TblRegistrationMaster
        WHERE RM_UserName=@UserName
        AND RM_Password=@Password
        AND RM_IsActive=1
      `);

    return result.recordset;
  }
}