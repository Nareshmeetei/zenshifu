/*
  # Create waitlist emails table

  1. New Tables
    - `waitlist_emails`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `source` (text, indicates where the email was submitted from)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `waitlist_emails` table
    - Add policy for public insert access (since this is a waitlist signup)
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS waitlist_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'hero' CHECK (source IN ('hero', 'footer')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist_emails ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert emails (for waitlist signup)
CREATE POLICY "Anyone can insert waitlist emails"
  ON waitlist_emails
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all waitlist emails
CREATE POLICY "Authenticated users can read waitlist emails"
  ON waitlist_emails
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_emails_email ON waitlist_emails(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_emails_created_at ON waitlist_emails(created_at DESC);