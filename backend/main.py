from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ['http://localhost:5173', 'https://localhost:5173']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
   return {"message": "Hello World"}

@app.get("/equipo")
async def saluda():
   return { "miembros": "Miguel, Axel, Juan Pablo, Rodrigo, Nanami" }