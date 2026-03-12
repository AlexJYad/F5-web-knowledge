# 1. CP Desarrollo Web

## 1.1 Rastreo de una Web

![ping google.com](../../public/img/ping.png)
![traceroute google.com](../../public/img/traceroute.png)

**Pregunta:** ¿Por qué crees que el primer salto es tu router y el último es una dirección IP lejana?

- _El primer salto_ es el router, porque es el primer punto de salida de mi red local y todas las solicitudes pasan primero por él

- _El último salto_ es el servidor remoto, porque es la dirección final a la que se envía la solicitud

Entre ellos hay routers de los proveedores de internet que transmiten los datos a través de la red

## 1.2 Webminal

#### Lesson 1

![Webminal Terminal Lesson 1](../../public/img/Webminal-Terminal-L1.png)

#### Lesson 2

![Webminal Terminal Lesson 2](../../public/img/Webminal-Terminal-L2.png)

#### Lesson 3

![Webminal Terminal Lesson 3](../../public/img/Webminal-Terminal-L3.png)

#### Lesson 4

![Webminal Terminal Lesson 4](../../public/img/Webminal-Terminal-L4.png)

#### Lesson 5

![Webminal Terminal Lesson 5](../../public/img/Webminal-Terminal-L5.png)

#### Lesson 6

![Webminal Terminal Lesson 6](../../public/img/Webminal-Terminal-L6.png)

#### Lesson 7

![Webminal Terminal Lesson 7](../../public/img/Webminal-Terminal-L7.png)

#### Lesson 8

![Webminal Terminal Lesson 8](../../public/img/Webminal-Terminal-L8.png)

#### Lesson 9

![Webminal Terminal Lesson 9](../../public/img/Webminal-Terminal-L9.png)

#### Lesson 10

![Webminal Terminal Lesson 10](../../public/img/Webminal-Terminal-L10.png)

#### Lesson 11

![Webminal Terminal Lesson 11](../../public/img/Webminal-Terminal-L11.png)

## 1.3 Archivos y Directorios

![Terminal creat dir y files](../../public/img/eje-3.png)

## 1.4

## 1.5 Registro de usuarios

```mermaid
   flowchart TD
      subgraph s1["Cliente (lado del usuario)"]
         A["El usuario abre el formulario"]
         B["Introduce el email"]
         B0{"¿El formato del email es válido?"}
         B1{{"Mensaje de error: email no válido"}}
         B2{{"Mensaje de error: el email ya está registrado"}}
         C["Introduce la contraseña"]
         C0{"¿La contraseña es segura? (mín. 8 caracteres, mayúsculas, minúsculas, números y símbolo especial)"}
         C1{{"Mensaje de error: contraseña demasiado débil"}}
         D["El usuario pulsa el botón de registro"]
         E1{{"Error de conexión: recarga la página e inténtalo de nuevo"}}
         A1([Registro completado con éxito])
      end

   E2(("Envío de datos<br>al servidor"))
   E3((Respuesta del servidor))

   subgraph s2["Servidor"]
      F["Procesamiento de los datos"]
      F0{"¿El email ya existe en el sistema?"}
      F1{{"Error de registro: el usuario ya existe"}}
      G["Usuario registrado correctamente"]
   end

   Aa(( )) --> A
   A --> B
   B --> B0
   B0 --> |Sí| C
   B0 --> |No| B1
   B1 --> B

   C --> C0
   C0 --> |Sí| D
   C0 --> |No| C1
   C1 --> C

   D --> E2

   E2 --> |Éxito| F
   E2 --> |Error| E1
   E1 --> A

   F --> F0
   F0 --> |No| G
   F0 --> |Sí| F1

   G --> E3
   F1 --> E3

   E3 --> |Éxito| A1
   E3 --> |Error| B2
   B2 --> B
   A1 --> Ab(( ))

   %% Стили
   classDef client fill:#e3f2fd,stroke:#1e88e5,stroke-width:1px
   classDef server fill:#e8f5e9,stroke:#43a047,stroke-width:1px
   classDef network fill:#fff8e1,stroke:#f9a825,stroke-width:1px
   classDef error fill:#ffebee,stroke:#e53935,stroke-width:1px
   classDef decision fill:#eeeeee,stroke:#616161,stroke-width:1px
   classDef startend fill:#43a047,stroke:#2e7d32,stroke-width:5px

   class A,B,C,D,A1 client
   class F,G server
   class E2,E3 network
   class B1,B2,C1,E1,F1 error
   class B0,C0,F0,Aa decision
   class Aa,Ab startend

   linkStyle 3,7,11,15,19 stroke:#2e7d32,stroke-width:3px
   linkStyle 4,8,12,16,20 stroke:#c62828,stroke-width:2px
```
