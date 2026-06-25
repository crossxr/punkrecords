'use server'

import { sql, initializeDatabase } from '../lib/db'

export interface DBUserLicense {
  resource_id: string
  resource_title: string
  license_key: string
  tx_hash: string
  purchased_at: string
}

/**
 * Saves a completed checkout license log to the database.
 */
export async function saveLicenseAction(
  userEmail: string,
  resourceId: string,
  resourceTitle: string,
  licenseKey: string,
  txHash: string
) {
  if (!sql) {
    throw new Error('Database connection is not initialized.')
  }

  // Ensure database tables exist
  await initializeDatabase()

  try {
    await sql`
      INSERT INTO user_licenses (user_email, resource_id, resource_title, license_key, tx_hash)
      VALUES (${userEmail.toLowerCase().trim()}, ${resourceId}, ${resourceTitle}, ${licenseKey}, ${txHash})
    `
    return { success: true }
  } catch (error) {
    console.error('Failed to save purchase license to database:', error)
    return { success: false, error: 'Database transaction failed.' }
  }
}

/**
 * Fetches all licenses acquired by a user email.
 */
export async function getLicensesAction(userEmail: string): Promise<{ success: boolean; data?: DBUserLicense[]; error?: string }> {
  if (!sql) {
    throw new Error('Database connection is not initialized.')
  }

  // Ensure database tables exist
  await initializeDatabase()

  try {
    const rows = await sql`
      SELECT resource_id, resource_title, license_key, tx_hash, purchased_at::text
      FROM user_licenses
      WHERE user_email = ${userEmail.toLowerCase().trim()}
      ORDER BY purchased_at DESC
    `
    return {
      success: true,
      data: rows as unknown as DBUserLicense[]
    }
  } catch (error) {
    console.error('Failed to fetch user licenses from database:', error)
    return { success: false, error: 'Failed to retrieve database records.' }
  }
}
