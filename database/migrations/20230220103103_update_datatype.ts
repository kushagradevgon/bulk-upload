import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
    ALTER TABLE funds
MODIFY COLUMN units varchar(200)`)
}


export async function down(knex: Knex): Promise<void> {
}

