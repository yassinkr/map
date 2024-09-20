
import { pgTableCreator, integer ,uniqueIndex , real , serial , text} from 'drizzle-orm/pg-core';


export const createTable = pgTableCreator((name) => `map_${name}`);



export const markers = createTable('markers', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    lat: real('lat').notNull(),  // Latitude as a float
    lng: real('lng').notNull(),  // Longitude as a float
    sb_current: integer('sb_current').notNull(),
    sb_max: integer('sb_max').notNull(),
    fp_current: integer('fp_current').notNull(),
    fp_max: integer('fp_max').notNull(),
    sr_current: integer('sr_current').notNull(),
    sr_max: integer('sr_max').notNull(),
    efficiency: text('efficiency').notNull(),
    units_current: integer('units_current').notNull(),
    units_max: integer('units_max').notNull(),
    target_success_rate: text('target_success_rate').notNull(),
    target_count: text('target_count').notNull(),
});