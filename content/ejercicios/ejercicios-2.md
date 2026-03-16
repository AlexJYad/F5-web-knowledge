# 2. Actividad. Algoritmo. Pseudocódigo. Diagrama de flujo

INICIO — начало алгоритма
MOSTRAR — показать сообщение
LEER — прочитать ввод пользователя
SI ... ENTONCES — если условие выполняется
SINO — иначе
FIN SI — конец условия
FIN — конец алгоритма

## 2.1 Encender un ordenador

Escribe el algoritmo en pseudocódigo para encender un ordenador.

```bash
INICIO

SI el ordenador **NO** está encendido ENTONCES
   SI el ordenador **NO** está conectado a la corriente ENTONCES
      Conectar el ordenador a la corriente
   FIN SI
   Pulsar el botón de encendido

SI **NO** se encienden las luces ENTONCES
   SI la fuente de alimentación está encendida ENTONCES
      MOSTRAR "Contactar con el servicio técnico"
      SALIR
      SINO
      Encender el interruptor
      Pulsar el botón de encendido nuevamente
   SI **NO** se encienden las luces ENTONCES
      MOSTRAR "Contactar con el servicio técnico"
      SALIR
   FIN SI
FIN SI

Esperar a que el sistema cargue

SI **NO** hay imagen en el monitor ENTONCES
    Encender el monitor
FIN SI

SI todo funciona correctamente ENTONCES
    Iniciar sesión
SINO
    MOSTRAR "Contactar con el servicio técnico"
    SALIR
FIN SI

FIN
```

```mermaid
flowchart TB
   A([INICIO])
   Z([FIN])
   E[/MOSTRAR Contactar con el servicio técnico/]

   S0{¿El ordenador está encendido?}
   S4{¿Hay imagen en el monitor?}
   S4n[Encender el monitor]

   S5{¿Funciona todo correctamente?}
   S5s[Iniciar sesión]

   S1{¿El ordenador está conectado a la corriente?}
   S1s[Pulsar el botón de encendido]
   S1n[Conectar el ordenador a la corriente]

   S2{¿Se encienden las luces?}
   S2s[Esperar a que el sistema cargue]

   S3{¿La fuente de alimentación está encendida?}
   S3n[Encender el interruptor]

   A --> S0
   S0 --> |Sí| S4
   S0 --> |No| S1
   S1 --> |Sí| S1s
   S1 --> |No| S1n
   S1n --> S1s
   S1s --> S2
   S2 --> |Sí| S2s
   S2 --> |No| S3
   S3 --> |Sí| E
   S3 --> |No| S3n
   S3n --> |Pulsar botón otra vez| S1s
   S2s --> S4
   S4 --> |Sí| S5
   S4 --> |No| S4n
   S4n --> S5
   S5 --> |Sí| S5s
   S5 --> |No| E
   S5s --> Z


   classDef InFin fill:#e3f2fd,stroke:#1e88e5,stroke-width:1px
   classDef SI fill:#e8f5e9,stroke:#43a047,stroke-width:1px
   classDef NO fill:#fff8e1,stroke:#f9a825,stroke-width:1px
   classDef error fill:#ffebee,stroke:#e53935,stroke-width:1px
   classDef decision fill:#eeeeee,stroke:#616161,stroke-width:1px

   class A,Z InFin
   class S1s,S2s,S3s,S4s,S5s SI
   class S1n,S2n,S3n,S4n NO
   class S1,S2,S3,S4,S5 decision
   class E error

   linkStyle 3,7,12,13 stroke:#2e7d32,stroke-width:2px
   linkStyle 0,1,13,16,18 stroke:#2e7d32,stroke-width:3px
   linkStyle 2,4,8,10,14 stroke:#c62828,stroke-width:2px
   linkStyle 9,17 stroke:#c62828,stroke-width:3px

```

## 2.2 Acceder a una cuenta

### Diseña un algoritmo que:

- pida usuario
- pida contraseña
- si la contraseña es correcta → mostrar “Acceso permitido”
- si no → mostrar “Acceso denegado”

Luego crea el diagrama de procesos.

```bush
INICIO

   LEER usuario
   LEER contraseña

   SI contraseña ES correcta ENTONCES
      MOSTRAR "Acceso permitido"
   SINO
      MOSTRAR "Acceso denegado"
   FIN SI

FIN
```

```mermaid
flowchart TB
   A([INICIO])
   Z([FIN])

   B[/LEER usuario/]
   C[/LEER contraseña/]
   S0{¿Contraseña es correcta?}
   S0s[/MOSTRAR Acceso permitido/]
   S0n[/MOSTRAR Acceso denegado/]

   A --> B
   B --> C
   C --> S0
   S0 --> |Sí| S0s
   S0 --> |No| S0n
   S0s --> Z
   S0n --> Z

   classDef InFin fill:#e3f2fd,stroke:#1e88e5,stroke-width:1px
   classDef SI fill:#e8f5e9,stroke:#43a047,stroke-width:1px
   classDef NO fill:#fff8e1,stroke:#f9a825,stroke-width:1px
   classDef error fill:#ffebee,stroke:#e53935,stroke-width:1px
   classDef decision fill:#eeeeee,stroke:#616161,stroke-width:1px

   class A,Z InFin
   class S0s SI
   class S0n NO
   class S0 decision
   %% class E error

   linkStyle 0,1,2,3,5 stroke:#2e7d32,stroke-width:2px
   %% linkStyle 0 stroke:#2e7d32,stroke-width:3px
   linkStyle 4 stroke:#c62828,stroke-width:2px
   %% linkStyle 0 stroke:#c62828,stroke-width:3px
```

## 2.3 Semáforo

Haz un algoritmo que indique qué debe hacer un peatón según el color del semáforo.

### Condiciones:

- rojo → esperar
- verde → cruzar
- amarillo → prepararse

```bush
INICIO

LEER color semáforo

SWITCH color semáforo
   CASO "rojo":
      MOSTRAR "Esperar"
   CASO "verde":
      MOSTRAR "Cruzar"
   CASO "amarillo":
      MOSTRAR "Prepararse"
   CASO CONTRARIO:
      MOSTRAR "Semáforo no funciona"
FIN SWITCH

FIN
```

```mermaid
flowchart TB
   A([INICIO])
   Z([FIN])

   B[/LEER color semáforo/]
   S0{¿color semáforo}
   S00[/MOSTRAR Esperar/]
   S01[/MOSTRAR Cruzar/]
   S02[/MOSTRAR Prepararse/]
   S0n[/MOSTRAR "Semáforo no funciona"/]

   A --> B
   B --> S0
   S0 --> |rojo| S00
   S0 --> |verde| S01
   S0 --> |amarillo| S02
   S0 --> |otro| S0n
   S00 --> Z
   S01 --> Z
   S02 --> Z
   S0n --> Z

   classDef InFin fill:#e3f2fd,stroke:#1e88e5,stroke-width:1px
   classDef SI fill:#e8f5e9,stroke:#43a047,stroke-width:1px
   classDef NO fill:#fff8e1,stroke:#f9a825,stroke-width:1px
   classDef error fill:#ffebee,stroke:#e53935,stroke-width:1px
   classDef decision fill:#eeeeee,stroke:#616161,stroke-width:1px
   classDef OR fill:#ffe0b2,stroke:#fb8c00,stroke-width:2px

   class A,Z InFin
   class S0 decision
   class S0n error
   class S01 SI
   class S02 NO
   class S00 OR

   linkStyle 5 stroke:#c62828,stroke-width:2px
```

2.4. Menú de una aplicación
Crea un algoritmo que muestre el siguiente menú:

1. Ver perfil
2. Editar perfil
3. Cerrar sesión

Según la opción elegida debe mostrar el mensaje correspondiente.

```bush
INICIO

   MOSTRAR "Menú:"
   MOSTRAR "1. Ver perfil"
   MOSTRAR "2. Editar perfil"
   MOSTRAR "3. Cerrar sesión"

   LEER opcion

   SWITCH opcion
      CASO 1:
         MOSTRAR "Perfil del usuario"
      CASO 2:
         MOSTRAR "Menú de edición del perfil"
      CASO 3:
         MOSTRAR "Cerrando sesión"
      CASO CONTRARIO:
         MOSTRAR "Opción no válida. Inténtalo de nuevo"
   FIN SWITCH

FIN
```

```mermaid
flowchart TB
   A([INICIO])
   Z([FIN])

   B[/MOSTRAR MENÚ
   1 Ver perfil
   2 Editar perfil
   3 Cerrar sesión/]
   C[\LEER opcion\]

   S0{¿Opción?}
   S0s1[/Perfil del usuario/]
   S0s2[/Menú de edición del perfil/]
   S0s3[/Cerrando sesión/]
   S0n[/Opción no válida. Inténtalo de nuevo/]


   A --> B
   B --> C
   C --> S0
   S0 --> |1| S0s1 --> Z
   S0 --> |2| S0s2 --> Z
   S0 --> |3| S0s3 --> Z
   S0 --> |otro| S0n --> B



   classDef InFin fill:#e3f2fd,stroke:#1e88e5,stroke-width:1px
   classDef SI fill:#e8f5e9,stroke:#43a047,stroke-width:1px
   classDef NO fill:#fff8e1,stroke:#f9a825,stroke-width:1px
   classDef error fill:#ffebee,stroke:#e53935,stroke-width:1px
   classDef decision fill:#eeeeee,stroke:#616161,stroke-width:1px
   classDef OR fill:#ffe0b2,stroke:#fb8c00,stroke-width:2px

   class A,Z InFin
   class S0 decision
   class S0n error
   class S0s1,S0s2,S0s3 SI

   linkStyle 12 stroke:#c62828,stroke-width:2px
```
