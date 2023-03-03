import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
    ALTER TABLE tbl_karvy_mst
MODIFY COLUMN units varchar(200)`)
}


export async function down(knex: Knex): Promise<void> {
}

