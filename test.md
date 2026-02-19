# Apuntes de Desarrollo Web

---

## 1. Ciclo de vida de una petición HTTP/3

Cuando el usuario escribe la dirección de un sitio en el navegador, comienza una cadena de acciones de red entre el **cliente (navegador)** y el **servidor**.

### Pasos

1. El usuario introduce la URL
2. El navegador obtiene la IP mediante DNS
3. Se establece una conexión QUIC (UDP + TLS integrado)
4. El navegador envía la petición HTTP/3
5. El servidor procesa la solicitud
6. El servidor envía la respuesta (HTML, CSS, JS, JSON, etc.)
7. El navegador renderiza la página

### Roles

**Cliente (Browser)**
- Solicita el recurso
- Envía headers y cookies
- Muestra la respuesta

**Servidor**
- Recibe la petición
- Ejecuta la lógica
- Devuelve los datos

### Diagrama

User → Browser → DNS → Server → Response → Browser → Render

## 2. Frontend vs Backend

**Frontend** — la parte de la aplicación que ve el usuario.  
Es la interfaz del sitio: botones, texto, animaciones y formularios.

Tecnologías:
- HTML
- CSS
- JavaScript

Ejemplo: un landing page de una sola página con información sobre un producto.

---

**Backend** — la parte del servidor, invisible para el usuario.  
Se encarga de procesar datos y la lógica del sitio.

Funciones:
- procesamiento de formularios
- autenticación
- trabajo con base de datos
- filtrado de productos

Ejemplo: una tienda online donde los productos vienen de una base de datos.

## 3. DNS (Domain Name System)

DNS es el sistema que traduce el nombre de un sitio web en una dirección IP.

El humano recuerda:
google.com

El ordenador usa:
142.250.xxx.xxx

### Cómo funciona la búsqueda

1. Caché del navegador
2. Caché del sistema operativo (hosts)
3. Router local
4. DNS del proveedor (ISP)
5. Servidores raíz
6. Servidores TLD (.com .org .es)
7. Servidor DNS autoritativo del dominio

Después de esto, el navegador obtiene la IP y se conecta al servidor.

El objetivo del DNS es evitar que los usuarios tengan que memorizar direcciones IP.


## 4. Hosting: Tradicional vs Cloud vs Serverless

> TODO: explicar diferencias y casos de uso


## 5. CDN y Edge Computing

> TODO: explicar qué es CDN y ventajas del Edge Computing

---

## 6. SPA vs SSR vs SSG

| Tipo | Qué es | Ventajas | Desventajas | Uso típico |
|-----|------|------|------|------|
| SPA | | | | |
| SSR | | | | |
| SSG | | | | |


## 7. APIs en aplicaciones web

> TODO: explicar el papel de las APIs

---
