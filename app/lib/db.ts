import { neon } from '@neondatabase/serverless'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  console.warn('DATABASE_URL is not set in environment variables.')
}

// Create SQL query function
export const sql = databaseUrl ? neon(databaseUrl) : null

/**
 * Initializes the database tables if they do not exist.
 * This runs on app startup or first query request.
 */
export async function initializeDatabase() {
  if (!sql) {
    console.error('Database connection not established. Skipping initialization.')
    return
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS user_licenses (
        id SERIAL PRIMARY KEY,
        user_email VARCHAR(255) NOT NULL,
        resource_id VARCHAR(255) NOT NULL,
        resource_title VARCHAR(255) NOT NULL,
        license_key VARCHAR(255) NOT NULL,
        tx_hash VARCHAR(255) NOT NULL,
        purchased_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `
    // Ensure index on user_email for speed
    await sql`
      CREATE INDEX IF NOT EXISTS idx_user_licenses_email ON user_licenses (user_email);
    `
    console.log('Database initialized successfully: user_licenses table active.')
  } catch (error) {
    console.error('Failed to initialize database schema:', error)
  }
}
