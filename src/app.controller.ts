import { Body, Controller, Get, Headers, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('csv',{
    storage:diskStorage({
      destination:'./csv',
      filename:(req,file,cb)=>{
        const randomName= Array(32).fill(null).map(()=>(Math.round(Math.random()*16)).toString(16)).join('')
        cb(null,`${randomName}${extname(file.originalname)}`)
      }
    })
  }))
  uploadFile(@UploadedFile() file, @Body() body:any) {
    // console.log(file)
    this.appService.bulkupload(file,body);
  }
}
