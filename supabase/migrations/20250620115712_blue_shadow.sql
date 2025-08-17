/*
  # Fix waitlist email RLS policies for anonymous signup

  1. Security Updates
    - Drop all existing problematic policies
    - Create proper INSERT policy that allows anonymous users to sign up
    - Create proper SELECT policy for authenticated users
    - Ensure RLS is properly configured

  2. Policy Details
    - Allow anonymous (anon) users to INSERT waitlist emails
    - Allow authenticated users to SELECT waitlist emails
    - Use proper role targeting and policy conditions
*/

-- First, disable RLS temporarily to clean up
ALTER TABLE waitlist_emails DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies to start completely fresh
DROP POLICY IF EXISTS "Enable insert for waitlist signup" ON waitlist_emails;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON waitlist_emails;
DROP POLICY IF EXISTS "Allow anonymous waitlist signup" ON waitlist_emails;
DROP POLICY IF EXISTS "Allow authenticated waitlist signup" ON waitlist_emails;
DROP POLICY IF EXISTS "Authenticated users can read waitlist emails" ON waitlist_emails;
DROP POLICY IF EXISTS "Anyone can insert waitlist emails" ON waitlist_emails;
DROP POLICY IF EXISTS "Allow anonymous users to insert waitlist emails" ON waitlist_emails;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON waitlist_emails;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON waitlist_emails;

-- Re-enable RLS
ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Create a simple INSERT policy for anonymous users (waitlist signup)
CREATE POLICY "Allow public waitlist signup"
  ON waitlist_emails
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a SELECT policy for authenticated users (admin access)
CREATE POLICY "Allow authenticated read access"
  ON waitlist_emails
  FOR SELECT
  TO authenticated
  USING (true);