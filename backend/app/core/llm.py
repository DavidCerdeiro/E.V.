import os
from langchain_groq import ChatGroq

# Asegúrate de tener GROQ_API_KEY definida en tu entorno o archivo .env
# LangChain detecta la variable GROQ_API_KEY automáticamente por debajo.

def get_router_llm() -> ChatGroq:
    """
    Llama 3 (70B): Modelo principal para decidir qué quiere hacer el usuario.
    """
    return ChatGroq(
        model="llama3-70b-8192",
        temperature=0.1,
        max_tokens=1024
    )

def get_assistant_llm() -> ChatGroq:
    """
    Llama 3 (8B): Modelo rápido para resumir textos, formatear respuestas o tomar notas.
    """
    return ChatGroq(
        model="llama3-8b-8192",
        temperature=0.5,
        max_tokens=1024
    )

def get_document_llm() -> ChatGroq:
    """
    Mistral 8x7B (Mixtral): Especializado en ventanas de contexto grandes.
    """
    return ChatGroq(
        model="mixtral-8x7b-32768",
        temperature=0.2,
        max_tokens=4096
    )