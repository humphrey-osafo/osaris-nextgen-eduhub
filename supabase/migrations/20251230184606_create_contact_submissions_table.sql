/*
  # Create contact submissions table

  ## Overview
  This migration creates a table to store contact form and proposal request submissions from the website.

  ## New Tables
  1. `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text) - Name of the person submitting the form
    - `school_name` (text, nullable) - Name of the school (if applicable)
    - `role` (text, nullable) - Role of the person (e.g., Head of School, Administrator, Parent)
    - `phone` (text) - Phone number or WhatsApp contact
    - `email` (text) - Email address
    - `message` (text) - Message content
    - `form_type` (text) - Type of form: 'contact', 'proposal', 'booking'
    - `created_at` (timestamptz) - Timestamp of submission
    - `status` (text) - Status: 'new', 'contacted', 'closed'

  ## Security
  - Enable RLS on `contact_submissions` table
  - Add policy for authenticated admins to view all submissions
  - Allow anonymous users to insert submissions (public form access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  school_name text,
  role text,
  phone text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  form_type text NOT NULL DEFAULT 'contact',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);