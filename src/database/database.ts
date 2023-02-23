import { Model, ForeignKeyViolationError, ValidationError, knexSnakeCaseMappers } from 'objection'
import  Knex  from 'knex'
import { Global, Module } from '@nestjs/common';
import FundsModel from 'src/model/addresses';


const models=[FundsModel]

const modelproviders=models.map((model)=>{
    return {provide:model.name,
    useValue:model
    }
})

const providers=[
    ...modelproviders,
    {   provide:'KnexConnection',
        useFactory:(async()=>{const knex = Knex({
    
          client: "mysql",
          connection: {
            host: "sprintmoney-backup.czspjmtjzqci.ap-south-1.rds.amazonaws.com",
            port: 3306,
            database: "sprintmoney-dev",
            user: "admin",
            password: "DM3NA7btCVbCcCyqLyO0"
          },
      useNullAsDefault: true,
            
            ...knexSnakeCaseMappers()
        });
        Model.knex(knex);
        return knex;
    })

}
  // Give the knex instance to objection.
 
];
  @Global()
  @Module({
    providers:[...providers],
    exports:[...providers]
  })

  export class DatabaseModule{}
  
