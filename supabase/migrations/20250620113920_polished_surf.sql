/*
  # Fix RLS policies for waitlist_emails table

  1. Security Updates
    - Drop existing INSERT policies that may be misconfigured
    - Create new INSERT policy for anonymous users to join waitlist
    - Create new INSERT policy for authenticated users to join waitlist
    - Ensure SELECT policy allows authenticated users to read waitlist data

  2. Changes
    - Remove potentially problematic existing INSERT policies
    - Add clear, working INSERT policies for both anon and authenticated roles
    - Maintain existing SELECT policy for authenticated users
*/

-- Drop existing INSERT policies to recreate them properly
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.waitlist_emails;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.waitlist_emails;

-- Create new INSERT policy for anonymous users (for waitlist signup)
CREATE POLICY "Allow anonymous waitlist signup"
  ON public.waitlist_emails
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create new INSERT policy for authenticated users (for waitlist signup)
CREATE POLICY "Allow authenticated waitlist signup"
  ON public.waitlist_emails
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Ensure the SELECT policy exists for authenticated users (should already exist)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'waitlist_emails' 
    AND policyname = 'Authenticated users can read waitlist emails'
  ) THEN
    CREATE POLICY "Authenticated users can read waitlist emails"
      ON public.waitlist_emails
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;