<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Buenas Prácticas de manufactura en la Cocina Colombiana',
      titulo: 'Identifica y marca la diferencia: testeando tu visión en BPM.',
      introduccion:
        '<b> Objetivo:</b> Evaluar y reforzar la capacidad del aprendiz para identificar conceptos, normas, prácticas correctas e incorrectas, y elementos propios de las Buenas Prácticas de Manufactura, de acuerdo con los contenidos desarrollados en el componente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'El Decreto 3075 de 1997 es la norma que detalla los requisitos específicos de las BPM para cocinas y restaurantes en Colombia.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El Decreto 3075 de 1997, reglamentario de la Ley 9 de 1979, es la norma que especifica las condiciones sanitarias y de Buenas Prácticas de Manufactura que deben cumplir los establecimientos de alimentos',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El INVIMA es la entidad que realiza las inspecciones sanitarias de rutina a todos los restaurantes del país.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. El INVIMA vigila productos a nivel nacional (como alimentos envasados). Las inspecciones a restaurantes las realizan las Secretarías de Salud departamentales, distritales o municipales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Un peligro biológico puede ser un fragmento de vidrio dentro de un alimento.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Así es. Un fragmento de vidrio es un peligro físico. Los peligros biológicos son seres vivos como bacterias, virus o parásitos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Las BPM son de aplicación obligatoria solo en grandes fábricas de alimentos, no en pequeñas fondas o puestos callejeros.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Exacto. Las BPM, reglamentadas por el Decreto 3075, son de cumplimiento obligatorio en TODO establecimiento donde se manipulen alimentos, sin importar su tamaño o tipo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'En una cocina, es aceptable que las paredes sean de material poroso como yeso, siempre que estén pintadas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Las paredes en zonas de manipulación deben ser de material impermeable, lavable y liso (como concreto pulido o cerámica). El yeso es poroso, acumula humedad y es imposible de desinfectar correctamente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La mejor forma de descongelar un lomo de cerdo para un asado es sacarlo del congelador y dejarlo en la mesada de la cocina durante varias horas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. Descongelar a temperatura ambiente es un método prohibido porque mantiene el alimento en la "zona de peligro". Los métodos seguros son en nevera, en agua fría corriente o en microondas para cocción inmediata.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Un manipulador de alimentos con un leve resfriado, pero sin fiebre, puede trabajar normalmente en la cocina.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Cuidado. Es Falso. Cualquier persona con síntomas de enfermedad transmisible (incluyendo resfriado con secreciones) debe ser excluida de la manipulación directa de alimentos para evitar la contaminación, especialmente de alimentos listos para consumir.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            ' El lavado de manos correcto debe incluir el uso de jabón, el frotado por 20 segundos y el secado con toallas de papel desechables.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Exactamente. Esta es una técnica completa y efectiva para eliminar la suciedad y microorganismos de las manos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El principio de almacenamiento "Primero en Entrar, Primero en Salir" (PEPS) ayuda a prevenir el vencimiento y desperdicio de alimentos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Este principio asegura que los productos más antiguos se usen primero, favoreciendo la rotación y manteniendo la calidad e inocuidad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Es correcto usar la misma tabla de picar para cebolla y para pollo crudo, si se lava con agua y jabón entre usos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. Para prevenir contaminación cruzada, se deben usar tablas diferentes (código de colores). Además, entre el uso con pollo crudo (riesgo biológico alto) y cualquier otro alimento, la tabla no solo debe lavarse, sino desinfectarse.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La temperatura interna segura para cocinar pollo y asegurar la destrucción de patógenos es de 74°C.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. Esta es la temperatura mínima establecida para aves. Se debe verificar con un termómetro de cocina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'La contaminación cruzada sólo puede ocurrir por contacto directo entre alimentos crudos y cocidos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. La contaminación cruzada también puede ser indirecta, a través de manos, utensilios, equipos o superficies contaminadas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Un visitante (como un proveedor) puede ingresar brevemente a la cocina con su ropa de calle si solo va a dejar un paquete.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. Para proteger la zona de manipulación, los visitantes deben cumplir con protocolos mínimos: uso de bata y cofia, y lavado de manos. La recepción de mercancías debe hacerse en un área designada, fuera de la cocina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El programa de Control Integrado de Plagas (CIP) se basa principalmente en la aplicación periódica de insecticidas por parte del personal de cocina.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Exacto. El CIP prioriza las medidas preventivas (exclusión, limpieza, manejo de residuos). El uso de plaguicidas es el último recurso y debe ser realizado solo por una empresa especializada.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La limpieza y la desinfección son procesos diferentes; la limpieza remueve la suciedad y la desinfección reduce los microorganismos',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. Es fundamental identificar esta diferencia. Primero se limpia y luego, sobre la superficie ya limpia, se desinfecta.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Los residuos orgánicos (cáscaras, huesos) y los inorgánicos (plásticos, vidrios) pueden mezclarse en el mismo recipiente para facilitar la recolección.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Deben segregarse (separarse) desde el origen en recipientes diferentes. Esto facilita el reciclaje, el compostaje y un manejo más higiénico.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El Código Sanitario Nacional (Ley 9 de 1979) es la norma de mayor jerarquía en materia de salubridad de alimentos en Colombia.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Esta ley es la base legal que habilita toda la reglamentación posterior, como el Decreto 3075 de 1997.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Es obligatorio que los manipuladores de alimentos usen guantes de látex en todo momento durante la preparación de alimentos',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Así es. El uso de guantes no es obligatorio en todas las tareas y no reemplaza el lavado de manos. Su uso inadecuado puede crear una falsa sensación de seguridad y aumentar el riesgo si no se cambian con frecuencia.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Una señal de posible presencia de roedores en una cocina es encontrar excrementos pequeños y oscuros en rincones o detrás de equipos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Exacto. Los excrementos son una de las señales más claras e identificables de una infestación de roedores.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El objetivo final de identificar y aplicar las BPM es garantizar la inocuidad del alimento, es decir, que no cause daño al consumidor.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Perfecto. La inocuidad alimentaria es la razón de ser de todas las Buenas Prácticas de Manufactura y de la normativa sanitaria.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
