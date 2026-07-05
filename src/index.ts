import type { MrowConfig } from "./types";

function Mrow({ config }: { config: MrowConfig }) {
  if (!config.secrets?.jwtSecret || !config.secrets?.csrfSecret) {
    throw new Error("secrets.jwtSecret and secrets.csrfSecret are required");
  }
  if (
    config.secrets.jwtSecret.length < 32 ||
    config.secrets.csrfSecret.length < 32
  ) {
    throw new Error("secrets must be at least 32 characters long");
  }
  return { config };
}
export { Mrow };
