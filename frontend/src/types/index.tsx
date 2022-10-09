export interface Error { error: string }
export interface UsuarioInputProps { email: string, senha: string, perfil: string }
export interface LoginResProps { id: string, email: string, token: string }
export interface UsuarioResProps { id: string, email: string }
export interface AuthContextProps {
  login(usuario: UsuarioInputProps): Promise<{ error: string }>;
  logout(): Promise<void>;
  logado: boolean;
  isLoading: boolean;
  setLogado: Function;
  usuarioCreate(usuario: UsuarioInputProps): Promise<{ error: string }>;
  usuarioUpdate(usuario: UsuarioInputProps): Promise<{ error: string }>;
  mailLogin: string;
}