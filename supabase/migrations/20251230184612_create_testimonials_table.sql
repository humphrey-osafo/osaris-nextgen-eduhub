/*
  # Create testimonials table

  ## Overview
  This migration creates a table to store testimonials from schools and parents.

  ## New Tables
  1. `testimonials`
    - `id` (uuid, primary key) - Unique identifier for each testimonial
    - `name` (text) - Name of the person giving the testimonial
    - `role` (text) - Role (e.g., "Head of School", "Parent")
    - `school_name` (text, nullable) - School name (if applicable)
    - `content` (text) - Testimonial content
    - `rating` (integer) - Rating out of 5
    - `is_published` (boolean) - Whether the testimonial is published on the website
    - `created_at` (timestamptz) - Timestamp of creation
    - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable RLS on `testimonials` table
  - Add policy for public to view published testimonials only
  - Add policy for authenticated users to manage all testimonials
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  school_name text,
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view published testimonials"
  ON testimonials
  FOR SELECT
  TO anon
  USING (is_published = true);

CREATE POLICY "Allow authenticated users to view all testimonials"
  ON testimonials
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete testimonials"
  ON testimonials
  FOR DELETE
  TO authenticated
  USING (true);