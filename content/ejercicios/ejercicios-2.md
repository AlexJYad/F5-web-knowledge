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

   S1{¿El ordenador está conectado a la corriente?}
   S1s[Pulsar el botón de encendido]
   S1n[Conectar el ordenador a la corriente]

   S2{¿Se encienden las luces?}
   S2s[Esperar a que el sistema cargue]

   S3{¿La fuente de alimentación está encendida?}
   S3n[Encender el interruptor]

   D[Iniciar sesión]
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
   S5 --> |Sí| D
   S5 --> |No| E
   D --> Z
```
