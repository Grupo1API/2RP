export interface Error { error: string }
export interface UsuarioInputProps { mail: string, senha: string }
export interface LoginResProps { id: string, mail: string, token: string }
export interface UsuarioResProps { id: string, mail: string }
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