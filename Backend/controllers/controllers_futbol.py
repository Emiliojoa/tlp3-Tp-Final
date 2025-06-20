import joblib
from typing import Optional
from pydantic import BaseModel

class BodyModeloFutbol(BaseModel):
    posicion_codificada: int
    altura: float
    edad: int
    apariciones: int
    goles: int
    asistencias: int
    goles_concedidos: Optional[int] = 0
    porterias_a_cero: Optional[int] = 0
    minutos_jugados: int
    dias_lesionado: int
    partidos_perdidos_lesion: int
    premios: int

def predict_futbol(body: BodyModeloFutbol) -> dict:    
    if not(0 <= body.posicion_codificada <= 4):
        return {"posicion_codificada debe estar entre 0 y 4"}
    if body.altura <= 0:
        return {"altura debe ser un número positivo"}
    if body.edad <= 0:
        return {"edad debe ser un número positivo"}
    if body.apariciones < 0:
        return {"apariciones no puede ser negativo"}
    if body.goles < 0:
        return {"goles no puede ser negativo"}
    if body.asistencias < 0:
        return {"asistencias no puede ser negativo"}
    if body.goles_concedidos < 0:
        return {"goles_concedidos no puede ser negativo"}
    if body.porterias_a_cero < 0:
        return {"porterias_a_cero no puede ser negativo"}
    if body.minutos_jugados < 0:
        return {"minutos_jugados no puede ser negativo"}
    if body.dias_lesionado < 0:
        return {"dias_lesionado no puede ser negativo"}
    if body.partidos_perdidos_lesion < 0:
        return {"partidos_perdidos_lesion no puede ser negativo"}
    if body.premios < 0:
        return {"premios no puede ser negativo"}
    try: 
        model = joblib.load("controllers/modelo_regression_coste_jugador.pkl")
        entrenamiento = [[
            body.posicion_codificada,
            body.altura,
            body.edad,
            body.apariciones,
            body.goles,
            body.asistencias,
            body.goles_concedidos,
            body.porterias_a_cero,
            body.minutos_jugados,
            body.dias_lesionado,
            body.partidos_perdidos_lesion,
            body.premios
        ]]
        resultado = model.predict(entrenamiento)
        return {"prediction": int(resultado[0])}
    except FileNotFoundError:
        return {"error": "El modelo no se encuentra disponible. Por favor, verifica la ruta del modelo."}
    except Exception as e:
        return {"error": f"Ocurrió un error al realizar la predicción: {str(e)}"}
   
    