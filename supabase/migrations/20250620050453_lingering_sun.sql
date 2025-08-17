/*
  # Fix RLS policy for waitlist emails

  1. Security Updates
    - Drop existing INSERT policy that may be misconfigured
    - Create new INSERT policy that properly allows anonymous users to add emails
    - Ensure the policy allows all valid inserts for anonymous users

  2. Policy Details
    - Allow anonymous (anon) users to INSERT into waitlist_emails
    - No restrictions on the data being inserted (all valid emails allowed)
    - Maintains existing SELECT policy for authenticated users
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Anyone can insert waitlist emails" ON waitlist_emails;

-- Create a new INSERT policy that properly allows anonymous users
CREATE POLICY "Allow anonymous users to insert waitlist emails"
  ON waitlist_emails
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure RLS is enabled (should already be enabled based on schema)
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;