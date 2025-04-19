import { createClient } from '@supabase/supabase-js'

const URL = 'https://kdhkoaprqwynjrxqcymg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkaGtvYXBycXd5bmpyeHFjeW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMjI1NzIsImV4cCI6MjA2MDU5ODU3Mn0.R-cNZXLLyZXt1S-4Vej0Rs1zXJWZli9A-CUF1nxSMj4';

export const supabase = createClient(URL, API_KEY);
