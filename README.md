# Trabajo práctico final de Python para Ciencia de Datos
### Tema desarrollado: Predicción de valor de mercado por características de jugadores de futbol y predicción de estado de ánimo
- Decidimos implementar 2 modelos de machine learning utilizando la herramienta scikit-learn por la fácil implementación de la misma
  
## Alumnos:
- Marcelo Ortega
- Emilio Ortiz

## Teconologías utilizadas para nuestro proyecto
- Backend
```bash
  1. Entorno virtual
  2. Pandas
  3. scikit-learn
  4. Uvicorn
  5. FastApi
  6. Pydantic
  7. Joblib
```
- Frontend
```bash
  1. React
  2. React-hook-form
  3. Tailwind css
  4. Vite
```

## Modelos utilizados
- Modelo de regresión lineal simple: Para el cálculo de valor de mercado de los jugadores de futbol
- Modelo de regresión logística multiclase: Para identificar el estado de ánimo de un usuario (Implementado con la idea de que un jugador de futbol pueda verificar su estado de ánimo antes de un partido)
### ¿Por qué un modelo de regresión logística multiclase?
Decidimos implementar este modelo porque no es tan diferente de los vistos en clase y además con el dataset que encontramos y la amplia información que nos proporcionaba el mismo vimos una oportunidad de ir un paso más allá de todo lo que venimos viendo.

### Instalación del proyecto:
- Clona este repositorio
```bash
  git clone https://github.com/Emiliojoa/tlp3-Tp-Final.git
```
- Dirigete a la carpeta del Backend y crea un entorno virtual en la carpeta raiz
```bash
  Python -m venv venv
```
- Inicializa tu entorno virtual e instala las dependencias necesarias contenidas en el requirements.txt
```bash
  pip install -r requirements.txt
```
- Una vez descargadas todas las dependencias inicializa el backend
```bash
  python -m uvicorn main:app --reload
```
### Ahora

- Dirigete a la carpeta del Frontend e instala las dependencias
```bash
  npm install
```
- Inicializa el proyecto
```bash
  npm run dev
```

