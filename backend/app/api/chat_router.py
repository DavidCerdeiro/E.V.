from fastapi import APIRouter
from app.services.chat_service import response_to_user
from app.schemas.chat_schema import ChatRequest, ChatResponse

router = APIRouter(prefix="/chat", tags=["chat"])

@router.post("/response", response_model=ChatResponse)
async def get_response(chatRequest: ChatRequest):
    chat_response = response_to_user(user_message=chatRequest.user_message)
    return chat_response