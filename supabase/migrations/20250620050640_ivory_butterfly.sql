/*
  # Fix RLS policy for waitlist email submissions

  1. Security Updates
    - Drop existing INSERT policy that may be misconfigured
    - Create a new, properly configured INSERT policy for anonymous users
    - Ensure the policy allows anonymous users to insert waitlist emails

  This migration fixes the 401 error when anonymous users try to submit emails to the waitlist.
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow anonymous users to insert waitlist emails" ON waitlist_emails;

-- Create a new INSERT policy that explicitly allows anonymous users
CREATE POLICY "Enable insert for anonymous users" 
  ON waitlist_emails 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Also ensure authenticated users can insert (in case they're logged in)
CREATE POLICY "Enable insert for authenticated users" 
  ON waitlist_emails 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);