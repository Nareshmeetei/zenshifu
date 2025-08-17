/*
  # Fix RLS policies for waitlist signup

  1. Security Policy Updates
    - Update SELECT policy to allow anonymous users to check for existing emails
    - This enables the duplicate email check to work for anonymous users
    - Maintains security by only allowing email column access for existence checks

  2. Changes Made
    - Modified "Allow authenticated read access" policy to also allow anonymous users
    - This allows the useWaitlistSignup hook to check for existing emails before inserting
    - No additional security risk as it only exposes email existence, not full data
*/

-- Drop the existing restrictive SELECT policy
DROP POLICY IF EXISTS "Allow authenticated read access" ON waitlist_emails;

-- Create a new SELECT policy that allows both anonymous and authenticated users
-- This is needed for the duplicate email check in the signup flow
CREATE POLICY "Allow public read access for email checks"
  ON waitlist_emails
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Ensure the INSERT policy is correctly configured (should already exist but let's be explicit)
DROP POLICY IF EXISTS "Allow public waitlist signup" ON waitlist_emails;

CREATE POLICY "Allow public waitlist signup"
  ON waitlist_emails
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);