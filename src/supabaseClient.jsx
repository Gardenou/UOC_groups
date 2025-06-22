import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wxjvolyzotdojeevandn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4anZvbHl6b3Rkb2plZXZhbmRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1NTMzOTUsImV4cCI6MjA2NjEyOTM5NX0.ylAKYZPnH6UH1x3bJVqGg3zzeb_PEgVTQ4PhxO2D0dQ';
export const supabase = createClient(supabaseUrl, supabaseKey);