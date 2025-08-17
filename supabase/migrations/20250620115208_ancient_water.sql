/*
  # Fix RLS policies for waitlist signup

  1. Security Updates
    - Drop existing problematic INSERT policies
    - Create new INSERT policy that properly allows anonymous signups
    - Ensure SELECT policy works correctly for authenticated users
    - Keep existing constraints and indexes intact

  2. Changes Made
    - Remove restrictive INSERT policies
    - Add permissive INSERT policy for anonymous users
    - Maintain data integrity with existing constraints
*/

-- Drop existing INSERT policies that are causing issues
DROP POLICY IF EXISTS "Allow anonymous waitlist signup" ON waitlist_emails;
DROP POLICY IF EXISTS "Allow authenticated waitlist signup" ON waitlist_emails;

-- Create a single, permissive INSERT policy for both anonymous and authenticated users
CREATE POLICY "Enable insert for waitlist signup"
  ON waitlist_emails
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Ensure the SELECT policy exists and works correctly
DROP POLICY IF EXISTS "Authenticated users can read waitlist emails" ON waitlist_emails;

CREATE POLICY "Enable read for authenticated users"
  ON waitlist_emails
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify RLS is enabled (should already be enabled based on schema)
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;