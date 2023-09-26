import "dotenv/config";

function validatePort() {
  const port = process.env.PORT;

  if (!port || port.trim() === "") {
    console.error("Error: El PORT no está definid0 o está vacío.");
    process.exit(1);
    }
    return port;
}

function validateSecretKey() {
  const secret = process.env.SECRET_KEY;

  if (!secret || secret.trim() === "") {
    console.error("Error: La SECRET_KEY no está definida o está vacía.");
    process.exit(1);
    }
    return secret;
}

function validateDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl || databaseUrl.trim() === "") {
    console.error("Error: La DATABASE_URL no está definida o está vacía.");
    process.exit(1);
    }
    return databaseUrl;
}



export default { validatePort, validateDatabaseUrl, validateSecretKey };