/*
  # Fix waitlist email RLS policies

  1. Security Updates
    - Drop all existing policies to start fresh
    - Create proper INSERT policy for anonymous users
    - Create proper INSERT policy for authenticated users  
    - Create proper SELECT policy for authenticated users
    - Ensure RLS is properly enabled

  2. Policy Details
    - Allow anonymous (anon) users to INSERT waitlist emails
    - Allow authenticated users to INSERT waitlist emails
    - Allow authenticated users to SELECT waitlist emails
    - No restrictions on valid email submissions
*/

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Anyone can insert waitlist emails" ON waitlist_emails;
DROP POLICY IF EXISTS "Allow anonymous users to insert waitlist emails" ON waitlist_emails;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON waitlist_emails;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON waitlist_emails;
DROP POLICY IF EXISTS "Authenticated users can read waitlist emails" ON waitlist_emails;

-- Ensure RLS is enabled
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Create INSERT policy for anonymous users (for waitlist signup)
CREATE POLICY "Enable insert for anonymous users" 
  ON waitlist_emails 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create INSERT policy for authenticated users
CREATE POLICY "Enable insert for authenticated users" 
  ON waitlist_emails 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Create SELECT policy for authenticated users (to read waitlist data)
CREATE POLICY "Authenticated users can read waitlist emails"
  ON waitlist_emails
  FOR SELECT
  TO authenticated
  USING (true);