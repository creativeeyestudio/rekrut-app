import { Injectable } from '@angular/core';
import { AuthError, AuthResponse, createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  getSupabase(): SupabaseClient {
    return this.supabase;
  }

  async signUp(email: string, password: string): Promise<AuthResponse> {
    const { data, error } = await this.supabase.auth.signUp({ email, password });

    if(error) {
      return {
        data: { user: null, session: null }, error
      };
    }
  
    return {
      data: {
        user: data.user,
        session: data.session,
      }, error
    };
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut()
    return { error };
  }

  async register(
    email: string,
    password: string,
    profile: {
      first_name?: string;
      last_name?: string;
      birth_date?: string;
      phone_number?: string;
      role?: string;
    }
  ): Promise<{ user: User | null; error: AuthError | null }> {
    // 1. Créer le compte dans Supabase Auth
    const { data: authData, error: authError } = await this.supabase.auth.signUp({
      email,
      password
    });
  
    if (authError || !authData.user) {
      return { user: null, error: authError };
    }
  
    const userId = authData.user.id;
  
    // 2. Enregistrer les infos dans la table "users"
    const { error: dbError } = await this.supabase.from('users').insert([
      {
        id: userId,
        email,
        role: profile.role || 'user',
        first_name: profile.first_name || null,
        last_name: profile.last_name || null,
        birth_date: profile.birth_date || null,
        phone_number: profile.phone_number || null
      }
    ]);
  
    if (dbError) {
      return { user: null, error: authError };
    }
  
    return { user: authData.user, error: null };
  }
  
}
