from fastapi import FastAPI

app = FastAPI(
    title="Asistente E.V. API",
    description="Backend para el asistente de IA",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Hola"}