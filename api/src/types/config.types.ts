export interface ServerConfig {
  port: number;
}

export interface CorsConfig {
  origin: string;
  credentials: boolean;
  methods?: string[];
  allowedHeaders?: string[];
}

export interface AppConfig {
  server: ServerConfig;
  cors: CorsConfig;
}
