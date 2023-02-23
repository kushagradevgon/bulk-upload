import { Model } from 'objection';
import Knex from 'knex';

// Initialize knex.
const knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    filename: 'example.db'
  }
});

// Give the knex instance to objection.
Model.knex(knex);