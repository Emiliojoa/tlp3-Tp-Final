from fastapi import APIRouter
from controllers.controllers_futbol import predict_futbol, BodyModeloFutbol
from controllers.controllers_animo import predict_animo, BodyModeloAnimo
router = APIRouter()

@router.post("/predecirValor")
def prediccion_futbol(body: BodyModeloFutbol):
    return predict_futbol(body)

@router.post("/predecirAnimo")
def prediccion_animo(body: BodyModeloAnimo):
    return predict_animo(body)


