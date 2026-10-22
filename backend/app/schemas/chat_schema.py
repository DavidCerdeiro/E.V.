from pydantic import BaseModel

class ChatRequest(BaseModel):
    userMessage: str

class ChatResponse(BaseModel):
    iaResponse: str