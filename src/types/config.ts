interface MrowConfig {
  providers?: Record<string, unknown>;
  secrets: {
    jwtSecret: string;
    csrfSecret: string;
  };
  advanced?: {
    disableCSRFCheck?: boolean;
  };
}

export type { MrowConfig };
