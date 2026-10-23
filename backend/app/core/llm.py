import os
from langchain_groq import ChatGroq

# Asegúrate de tener GROQ_API_KEY definida en tu entorno o archivo .env
# LangChain detecta la variable GROQ_API_KEY automáticamente por debajo.

def get_router_llm() -> ChatGroq:
    """
    Llama 3 (70B): Modelo principal para decidir qué quiere hacer el usuario.
    """
    return ChatGroq(
        model="openai/gpt-oss-120b",
        temperature=0.1,
        max_tokens=1024
    )

def get_assistant_llm() -> ChatGroq:
    """
    Llama 3 (8B): Modelo rápido para resumir textos, formatear respuestas o tomar notas.
    """
    return ChatGroq(
        model="openai/gpt-oss-20b",
        temperature=0.5,
        max_tokens=1024
    )

def get_document_llm() -> ChatGroq:
    """
    Mistral 8x7B (Mixtral): Especializado en ventanas de contexto grandes.
    """
    return ChatGroq(
        model="openai/gpt-oss-120b",
        temperature=0.2,
        max_tokens=4096
    )