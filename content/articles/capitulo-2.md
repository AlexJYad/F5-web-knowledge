# Herramientas de Desarrollo Web

## 1. Ingeniería de prompts y Vibe Coding

### 1.1 Wizards para generar boilerplates

#### Boilerplate

Estructura base de un proyecto con carpetas, archivos, dependencias y scripts. Facilita un inicio rápido en desarrollo web.

#### Wizards basados en lenguaje natural

Asistentes de IA que generan el boilerplate y componentes iniciales según tu descripción.  
Ejemplos: GPT-4, Copilot, StackBlitz AI.

#### Cómo usar

1. **Describe el proyecto:** stack, páginas, estructura (`Angular 16 + TypeScript + Tailwind + Router con Home y About`)
2. **Ejecuta el wizard/IA:** crea archivos, carpetas, `package.json` y `tsconfig.json`
3. **Revisa y ajusta:** dependencias, scripts, layout base.
4. **Ejecuta:** `npm install && ng serve`

#### Ventajas

- Ahorra tiempo
- Personalizable según el stack
- Permite ver la estructura del proyecto

#### Limitaciones

- No contempla todos los detalles de proyectos complejos
- Puede generar código incompleto
- Mejor usar como base inicial, no para producción final

### 1.2 Uso de la IA para explicar errores

La IA puede usarse para **entender por qué ocurre un error**, no solo para corregirlo.

#### Por qué es importante

Si la IA solo corrige, se resuelve **una vez**; si explica, permite entender:

- la causa del error
- cómo funciona el lenguaje o framework
- cómo evitarlo en el futuro

#### Cómo usar la IA

- **Pedir explicación, no solo solución**  
  Mal: `Arregla este error`  
  Mejor: `Explica por qué ocurre este error y qué significa`
- **Dar contexto:** mensaje de error, fragmento de código, cuándo aparece
- **Explicación paso a paso:** significado del mensaje, ubicación del problema, mecanismo que lo provoca

#### Beneficios

- Mejor comprensión del código
- Desarrollo de habilidades de debugging
- Menos errores repetidos

### 1.3 Vibe Coding

#### Qué es Vibe Coding

Enfoque donde el desarrollador **describe la tarea en lenguaje natural** y la IA genera gran parte del código.  
El desarrollador revisa, adapta y mejora el resultado.

#### Para qué es útil

- **Prototipado rápido:** crear MVP y probar ideas
- **Aprendizaje:** ver ejemplos y entender estructuras
- **Código repetitivo:** componentes, llamadas a APIs, operaciones CRUD

#### Limitaciones

- Código generado puede no ser óptimo
- Pueden aparecer errores
- Arquitectura del proyecto requiere control del desarrollador

#### Conclusión

Vibe Coding acelera el desarrollo, pero **no sustituye al desarrollador**. La IA ayuda, pero **el control y comprensión siguen siendo humanos**

### 1.4 Herramientas para prototipos: v0.dev y Framer AI

Permiten crear **interfaces y prototipos** desde descripciones en lenguaje natural, sin escribir todo el código manualmente.

#### Tabla comparativa

| Herramienta   | Función principal      | Generación de código | Tecnologías usadas      | Dirigido a              | Características                                 |
| ------------- | ---------------------- | -------------------- | ----------------------- | ----------------------- | ----------------------------------------------- |
| **v0.dev**    | Componentes UI         | Sí                   | React, Tailwind CSS     | Desarrolladores         | Copia el código al proyecto; componentes listos |
| **Framer AI** | Sitios y landing pages | No                   | HTML/CSS, editor visual | Diseñadores, prototipos | Diseño, animaciones, publicación rápida         |

#### Para qué es útil

- Crear prototipos rápidamente
- Acelerar la generación de UI
- Mostrar ideas a equipos o clientes

#### Limitaciones

- Código puede requerir ajustes
- Estructura no siempre óptima
- Mejor usar para prototipos, no para proyectos finales

### 1.5 Diferencias entre Framer y programar desde cero

#### Framer AI

- Creación visual de sitios y landing pages
- Genera automáticamente maquetas, animaciones, textos e imágenes
- Prototipado rápido
- Ideal para mostrar ideas sin conocimientos profundos de código
- Control limitado sobre la estructura y lógica

#### Programación desde cero

- Escribir manualmente HTML, CSS, JS y componentes
- Control total del código y arquitectura
- Permite lógica compleja y soluciones personalizadas
- Requiere más tiempo y conocimientos técnicos

#### Convivencia

- Usar Framer para prototipos rápidos
- Implementar el proyecto final mediante código
- Exportar diseños de Framer y adaptarlos permite combinar **velocidad y control**

---

## 2. Visual Studio Code

### 2.1 Qué es un IDE

**IDE (Integrated Development Environment)** — entorno de desarrollo integrado que combina todas las herramientas necesarias para escribir, ejecutar y depurar código en un solo lugar.

#### Funciones principales:

- **Editor de código** con resaltado de sintaxis y autocompletado
- **Compilador/Intérprete** para ejecutar el código
- **Depurador (debugger)** para encontrar y corregir errores
- **Integración con sistemas de control de versiones** (Git)
- **Gestión de proyectos y archivos**

#### Ejemplos de IDE:

- Visual Studio Code (VSCode)
- IntelliJ IDEA
- PyCharm
- Eclipse

**Idea principal:** Un IDE ayuda a programar más rápido, con menos errores y de forma más organizada.

### 2.2 Cómo personalizar VSCode

**Personalizar VSCode** ayuda a trabajar más rápido y de manera más cómoda.

#### Principales formas de personalización:

- **Tema y colores** — tema claro/oscuro, resaltado de sintaxis.
- **Fuentes y tamaño de texto** — fuente cómoda para el código, soporte de ligaduras.
- **Paneles e interfaz** — configurar barra lateral, terminal, minimapa de código, crear espacios de trabajo (workspaces).
- **Snippets** — plantillas de código para insertar estructuras repetitivas rápidamente.
- **Atajos de teclado (Shortcuts)** — combinaciones personalizadas para comandos del editor.
- **Extensiones (Extensions)** — añaden funcionalidad: soporte de lenguajes, linters, temas, Git, Live Server, etc.
- **Configuración de usuario y de proyecto** — User Settings (para todos los proyectos), Workspace Settings (para un proyecto específico).

**Consejo:** no sobrecargar el editor con demasiadas extensiones; elegir solo las necesarias.

### 2.3 Uso de extensiones que ayudan a programar

**Las extensiones (Extensions)** hacen VSCode más cómodo y ayudan a programar más rápido y sin errores.

#### Extensiones populares y cómo funcionan:

- **ESLint** — revisa el código en busca de errores y estilo (linting). Funciona analizando el código en tiempo real y marcando problemas directamente en el editor.
- **Prettier** — formatea el código automáticamente. Funciona al guardar el archivo o por comando, ajustando sangrías, añadiendo puntos y comas y uniformando el código.
- **Live Server** — actualiza instantáneamente la página web al modificar el código. Funciona mediante un servidor local que vigila los cambios en los archivos.

#### Cómo instalar:

- Abrir el panel **Extensions** en VSCode.
- Buscar la extensión → Instalar → Configurar si es necesario.

#### Consejos:

- No sobrecargar VSCode con demasiadas extensiones.
- Elegir solo las útiles para el proyecto actual.
- Se pueden crear conjuntos de extensiones para proyectos específicos (Workspace Settings).

**Idea:** Las extensiones hacen la programación más rápida, ordenada y cómoda, indicando errores, formateando código y mostrando resultados en tiempo real.

### 2.4 GitHub Copilot

**GitHub Copilot** es un asistente de IA para programadores que ayuda a escribir código directamente en el editor (por ejemplo, VSCode).

#### Modos de funcionamiento:

- **Autocompletado (Autocomplete / Suggestions)**
   - Sugiere la siguiente línea o bloque de código basado en lo que ya has escrito.
   - Acelera la escritura de código, especialmente estructuras repetitivas.

- **Chat Agent**
   - Responde a instrucciones en lenguaje natural.
   - Puede generar funciones, corregir errores y explicar el código.
   - Diferencia con el autocompletado: entiende solicitudes en lenguaje humano, no solo predice la siguiente línea.

#### Beneficios:

- Ahorra tiempo.
- Muestra ejemplos y ayuda a aprender nuevos lenguajes o bibliotecas.
- Reduce la cantidad de errores.

**Idea:** el autocompletado es una predicción inteligente de código, mientras que el chat agent es un asistente completo para escribir y corregir código.

### 2.5 Model Context Protocol (MCP)

**Model Context Protocol (MCP)** es un protocolo que ayuda a las inteligencias artificiales a comprender mejor los archivos y proyectos en el ordenador del usuario.

#### Cómo funciona:

- **Escaneo de archivos** — el sistema analiza los archivos del proyecto y sus tipos.
- **Creación de contexto** — se genera una estructura del proyecto: archivos, funciones, clases y sus relaciones.
- **Uso del contexto por la IA** — la IA utiliza esta información para generar código, autocompletar y explicar archivos.

#### Beneficios:

- La IA entiende el proyecto completo, no solo líneas individuales de código.
- Mejora la calidad del autocompletado y las sugerencias.
- Permite trabajar con archivos de forma más precisa.

**Idea:** MCP proporciona contexto del proyecto a la IA para que pueda entender mejor el código y los archivos del usuario.

---

## 3. Node.js, npm y package.json

### 3.1 Node.js

**Node.js** es un **entorno de ejecución (runtime environment)** para JavaScript, no un lenguaje de programación.

Permite **ejecutar JavaScript fuera del navegador**, por ejemplo en el ordenador o en un servidor.

#### Cómo funciona:

- Utiliza el motor **V8** (el mismo que usa Google Chrome) para ejecutar JavaScript.
- Permite trabajar con archivos, servidores y herramientas de desarrollo.

#### Uso en el desarrollo Frontend:

- **Instalar librerías y paquetes** con npm.
- **Construir proyectos** (por ejemplo Vite o Webpack).
- **Herramientas de desarrollo** (ESLint, Prettier, TypeScript).
- **Servidor local** para desarrollo.

**Idea:** Node.js permite usar JavaScript fuera del navegador y ayuda a gestionar herramientas y dependencias del proyecto.

### 3.2 Node Package Manager

**npm (Node Package Manager)** es un gestor de paquetes para Node.js que permite instalar y gestionar librerías y herramientas en un proyecto.

#### Qué es un paquete:

Un **paquete (package)** es una librería o herramienta con código ya preparado que se puede añadir a un proyecto.

#### Cómo instalar un paquete:

Los paquetes se instalan desde la terminal:

```bash
npm install nombre-del-paquete
```

#### Ejemplo de paquete:

- **Axios** — librería para hacer peticiones HTTP y trabajar con APIs.

#### Para qué sirve npm:

- instalar librerías
- actualizar paquetes
- gestionar dependencias del proyecto
- ejecutar scripts de desarrollo

**Idea:** npm permite a los desarrolladores usar librerías y herramientas ya existentes en lugar de escribir todo el código desde cero.

### 3.3 package.json

**package.json** es un archivo que contiene la información principal del proyecto y sus dependencias.

#### Qué contiene package.json:

- **Información del proyecto** — nombre y versión.
- **Dependencies** — lista de librerías que usa el proyecto.
- **Scripts** — comandos para ejecutar y construir el proyecto.

#### Ejemplo de uso:

El comando:

```bash
npm install
```

— instala todas las dependencias definidas en package.json.

#### Por qué es el primer archivo que debes mirar:

- muestra qué librerías usa el proyecto
- muestra cómo ejecutar el proyecto
- muestra los comandos disponibles de desarrollo

**Idea:** package.json es el archivo principal de configuración que describe las dependencias y los comandos del proyecto.

---

## 4. Vite y Hot Module Replacement

Qué es y para qué sirve.
Investiga qué es el Hot Module Replacement. ¿Cómo mejora esto la experiencia del desarrollador mientras escribe código?

```

```
