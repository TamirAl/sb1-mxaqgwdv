/*
  # Initial Schema Setup for Translation Platform

  1. New Tables
    - users
      - Extended from auth.users
      - Stores user role and profile information
    - translation_orders
      - Stores translation request details
      - Tracks order status and document URLs
    - payments
      - Records payment transactions
      - Links to translation orders

  2. Security
    - RLS policies for each table
    - Secure access based on user roles
*/

-- Create custom types
CREATE TYPE user_role AS ENUM ('user', 'translator', 'admin');
CREATE TYPE order_status AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');
CREATE TYPE urgency_level AS ENUM ('normal', 'urgent', 'express');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text NOT NULL,
  role user_role DEFAULT 'user',
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create translation_orders table
CREATE TABLE IF NOT EXISTS translation_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  source_language text NOT NULL,
  target_language text NOT NULL,
  document_url text NOT NULL,
  translated_url text,
  status order_status DEFAULT 'pending',
  price decimal NOT NULL,
  urgency urgency_level DEFAULT 'normal',
  word_count integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES translation_orders(id) NOT NULL,
  user_id uuid REFERENCES users(id) NOT NULL,
  amount decimal NOT NULL,
  status text NOT NULL,
  payment_method text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE translation_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users policies
CREATE POLICY "Users can view own profile"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admin can view all profiles"
  ON users
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Translation orders policies
CREATE POLICY "Users can view own orders"
  ON translation_orders
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create orders"
  ON translation_orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Translators can view assigned orders"
  ON translation_orders
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'translator'
  ));

-- Payments policies
CREATE POLICY "Users can view own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create payments"
  ON payments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());