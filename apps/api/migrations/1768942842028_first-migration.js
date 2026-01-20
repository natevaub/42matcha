/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

// import { MigrationBuilder } from 'node-pg-migrate';

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable('users',
        {
            id: 'id',
            name: { type: 'varchar(100)', notNull: true },
            createdAt: {
                type: 'timestamp',
                notNull: true,
                default: pgm.func('current_timestamp'),
            }

        }
    )
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable('users');
};
