import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema';

export type Marker = typeof schema.markers.$inferInsert;

export const db = drizzle(sql,  {schema} );
 
export async function getMarkers() {
    return await db.select().from(schema.markers).orderBy(schema.markers.lat).execute();
};


  export async function insertMarkers(markerData: Marker[]) {
    try {
      await db
        .insert(schema.markers) 
        .values(markerData);
  
      console.log('Markers inserted successfully!');
    } catch (error) {
      console.error('Error inserting markers:', error);
      throw error;
    }
  }
  