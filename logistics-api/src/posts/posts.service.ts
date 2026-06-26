import { Injectable } from '@nestjs/common';
import { getConnection } from '../database/database.service';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

  async create(createPostDto: CreatePostDto) {
    const pool = await getConnection();

    await pool.request()
      .input('Title', createPostDto.title)
      .input('Description', createPostDto.description)
      .input('CreatedBy', createPostDto.createdBy)
      .input('CreatedByName', createPostDto.createdByName)
      .query(`
        INSERT INTO ReactPost
        (
            Title,
            Description,
            CreatedBy,
            CreatedByName,
            CreatedDate
        )
        VALUES
        (
            @Title,
            @Description,
            @CreatedBy,
            @CreatedByName,
            GETDATE()
        )
      `);

    return {
      message: 'Post Created Successfully'
    };
  }

  async findAll() {

    const pool = await getConnection();

    const result = await pool.request().query(`
        SELECT *
        FROM ReactPost
        ORDER BY CreatedDate DESC
    `);

    return result.recordset;
  }

}