import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://cvwdtzwyjdbqurefvccd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2d2R0end5amRicXVyZWZ2Y2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDUyMjQsImV4cCI6MjA3ODAyMTIyNH0.myZpcUrK7OO25v99E3xnRUV41XvMLhY5N8Gqc1BI0G8';
export const supabase = createClient(supabaseUrl, supabaseKey);