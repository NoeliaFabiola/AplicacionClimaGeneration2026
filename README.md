# AplicacionClimaGeneration2026
Aplicación web desarrollada con asistencia de la IA para el curso "AI Training for Software Developer Graduates v2 - Spanish - 2026" 

# 🌤️ App de Clima

Aplicación web sencilla que permite consultar el clima actual de una ciudad utilizando la API de Open-Meteo. El usuario ingresa el nombre de una ciudad y la app muestra la temperatura y velocidad del viento en un formato amigable.

---

## 🚀 Funcionalidades

* Búsqueda de clima por ciudad
* Obtención de coordenadas mediante Geocoding API
* Consulta del clima actual con Open-Meteo
* Manejo de errores (ciudad inválida, campo vacío, fallos de API)
* Indicador de carga (loading)
* Interfaz simple y responsiva
* Búsqueda con botón o tecla Enter

---

## 🧩 Tecnologías utilizadas

* JavaScript (ES6+)
* HTML5
* CSS3
* API pública: Open-Meteo
* Fetch API (async/await)

---

## 📁 Estructura del proyecto

```bash
weather-app/
│
├── index.html
├── README.md
│
├── src/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── api/
│   │   │   └── weatherService.js
│   │   │
│   │   ├── ui/
│   │   │   └── render.js
│   │   │
│   │   └── utils/
│
└── .gitignore
```

---

## ⚙️ Cómo ejecutar el proyecto

### Opción recomendada (Live Server)

1. Abrir el proyecto en VS Code
2. Instalar la extensión **Live Server**
3. Abrir `index.html`
4. Click derecho → **Open with Live Server**

---

### Alternativa (Node.js)

```bash
npx serve .
```

---

## 🔄 Flujo de la aplicación

1. El usuario ingresa una ciudad
2. Se obtienen las coordenadas usando la Geocoding API
3. Se consulta el clima con la Forecast API
4. Se muestran los datos en pantalla

---

## 🌐 API utilizada

### Geocoding API

Obtiene latitud y longitud a partir del nombre de la ciudad.

```
https://geocoding-api.open-meteo.com/v1/search
```

### Forecast API

Obtiene datos del clima usando coordenadas.

```
https://api.open-meteo.com/v1/forecast
```

---

## ⚠️ Manejo de errores

* Campo vacío → mensaje al usuario
* Ciudad no encontrada → mensaje de error
* Fallos en la API → mensaje controlado
* Evita que la interfaz se rompa

---

## 🧪 Casos de prueba

* ✅ Ciudad válida: "Guadalajara"
* ❌ Ciudad inválida: "asdfghjkl"
* ⚠️ Campo vacío

---

## 🚀 Mejoras futuras

* Mostrar iconos dinámicos según el clima
* Guardar historial de búsquedas (localStorage)
* Mostrar más datos (humedad, sensación térmica)
* Diseño responsivo más avanzado
* Integración con backend (PHP + MySQL)

---

## 🔐 Seguridad y buenas prácticas

- Validación de entrada del usuario
- Manejo de errores controlado
- Uso de API pública sin autenticación
- Código generado parcialmente con apoyo de IA y revisado manualmente


## 👩‍💻 Autor

Proyecto desarrollado como práctica de consumo de APIs, manejo de asincronía en JavaScript y buenas prácticas de estructura de código.

