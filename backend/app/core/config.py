from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    """
    Clase central de configuración. 
    """
    # API Keys
    GROQ_API_KEY: str
    
    # Configuración general de la API
    PROJECT_NAME: str = "Asistente E.V. API"
    VERSION: str = "0.1.0"
    
    # Configuración de CORS
    FRONTEND_URL: str = "http://localhost:3000"

    # Le indicamos que busque un archivo .env en la raíz del proyecto
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

settings = Settings()