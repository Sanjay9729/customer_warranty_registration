import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uonsrhcedftrjoduwivq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbnNyaGNlZGZ0cmpvZHV3aXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2Mjg2NjYsImV4cCI6MjA2MDIwNDY2Nn0.iwjL1pjIXfFgb8nOqGFn8UrDskhQIeyiYLqgV1Eh0AA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    debug: true
  }
});

export const deleteData = async (tableName, conditions) => {
  try {
    const { data, error } = await supabase
      .from(tableName)  
      .delete()
      .match(conditions); 

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error deleting data:", error.message);
    return null;
  }
};

