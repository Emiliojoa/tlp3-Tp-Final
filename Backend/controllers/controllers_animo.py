import joblib
from pydantic import BaseModel

class BodyModeloAnimo(BaseModel):
    Edad: int
    presion_sistolica: float
    presion_diastolica: float
    
    Frecuencia_Cardiaca_BPM: int
    Duracion_Enfoque_segundos: float
    Genero: str

def predict_animo(body: BodyModeloAnimo) -> dict:
    
    if not(0 <= body.Edad <= 120):
        return {"Edad debe estar entre 0 y 120"}
    if body.presion_sistolica <= 0:
        return {"presion_sistolica debe ser un número positivo"}
    if body.presion_diastolica <= 0:
        return {"presion_diastolica debe ser un número positivo"}
    if body.Frecuencia_Cardiaca_BPM <= 0:
        return {"Frecuencia_Cardiaca_BPM debe ser un número positivo"}
    if body.Duracion_Enfoque_segundos <= 0:
        return {"Duracion_Enfoque_segundos debe ser un número positivo"}
    
    
    genero_map = {
        "male": 0,
        "female": 1,
        "other": 2
    }
    
    genero_num = genero_map[body.Genero.lower()]
    if genero_num is None:
        return {"Genero debe ser female, male o other"}

    entrenamiento = [[
        body.Edad,
        body.presion_sistolica,
        body.presion_diastolica,
        body.Frecuencia_Cardiaca_BPM,
        body.Duracion_Enfoque_segundos,
        genero_num
    ]]

    try:
        model = joblib.load("controllers/modelo_estado_psicologico.pkl")
        prediccion = model.predict(entrenamiento)
    except FileNotFoundError:
        return {"error": "Modelo no encontrado. Asegúrate de que el archivo modelo_estado_psicologico.pkl esté en la ruta correcta."}
    except Exception as e:
        return {"error": f"Ocurrió un error al realizar la predicción: {str(e)}"}
    
    if prediccion == 0:
        return {"relajado"}
    elif prediccion==1:
        return {"estresado"}
    elif prediccion==2:
     return {"enfocado"}
    elif prediccion==3:
        return {"ansioso"}