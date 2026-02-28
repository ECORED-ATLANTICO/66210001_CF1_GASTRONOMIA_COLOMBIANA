<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo para la inocuidad en Colombia

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-secundario.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marco normativo que regula la inocuidad alimentaria en Colombia establece las bases que todo manipulador y profesional de la cocina debe conocer para desarrollar su labor con responsabilidad. Más que un conjunto de leyes constituye una guía que orienta el trabajo diario y asegura que los alimentos sean manipulados bajo condiciones higiénicas y seguras. Comprender estas normas permite identificar las obligaciones legales, reconocer el papel de las autoridades sanitarias y aplicar prácticas coherentes con los estándares que protegen la salud pública y respaldan la calidad del servicio gastronómico. 
 
    separador

    .row.justify-content-center
      .col-md-12.col-lg-10
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Importancia de la normativa sanitaria en la gastronomía profesional

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10.mb-4
        .row.mb-0.justify-content-center.align-items-center.bg-color-11.p-4
          .col-lg.mb-3.mb-lg-0
            p.mb-0(data-aos="fade-right") La normativa sanitaria en gastronomía no constituye un simple trámite administrativo ni un requisito burocrático; representa la materialización del derecho fundamental a la salud y la garantía de que el acto de alimentar a otras personas se realice con responsabilidad, ética y profesionalismo. Su relevancia radica en que establece parámetros mínimos y obligatorios que buscan prevenir las Enfermedades Transmitidas por Alimentos (ETA), las cuales pueden variar desde molestias gastrointestinales leves hasta cuadros graves que requieran hospitalización, e incluso llegar a causar la muerte en casos extremos.
          .col-auto.col-lg-3
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img02.svg", data-aos="zoom-in")
      
      .col-md-12.col-lg-10
        p.mb-0 En este sentido, la normativa sanitaria actúa como un marco protector tanto para el consumidor como para el establecimiento, asegurando que la manipulación de alimentos siga criterios científicos, técnicos y legales. Estos criterios incluyen:

    .row.justify-content-center.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop', style="width: 100px;").mx-auto
          h4.text-center Higiene personal de los manipuladores
          p.text-center lavado de manos frecuente, uso de uniformes limpios, protección de heridas y control de enfermedades transmisibles.

        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop', style="width: 100px;").mx-auto
          h4.text-center Limpieza y desinfección de utensilios y superficies
          p.text-center garantizar que mesas, tablas de corte, cuchillos y equipos estén libres de contaminantes antes y después de cada uso.

        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img06.svg' alt='AvatarTop', style="width: 100px;").mx-auto
          h4.text-center Almacenamiento adecuado de materias primas
          p.text-center separación de alimentos crudos y cocidos, control de fechas de vencimiento, conservación a temperaturas seguras y rotación de inventarios.

        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop', style="width: 100px;").mx-auto
          h4.text-center Control de temperaturas de conservación
          p.text-center refrigeración y congelación correctas para evitar la proliferación de microorganismos.

        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/img08.svg' alt='AvatarTop', style="width: 100px;").mx-auto
          h4.text-center Trazabilidad de los productos
          p.text-center registro y seguimiento de los alimentos desde su origen hasta el consumidor final, asegurando que cualquier irregularidad pueda ser identificada y corregida rápidamente.

    .row.justify-content-center
      .col-md-12.col-lg-10
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img09.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-3(data-aos="fade-right") En el contexto colombiano, donde la gastronomía representa un pilar cultural, social y económico, el cumplimiento de estas normas no solo protege la salud de los comensales, sino que se convierte en un factor estratégico de competitividad y sostenibilidad. Los establecimientos que demuestran adherencia a la normativa sanitaria generan confianza en sus clientes, fortalecen su reputación, promueven la fidelización y reducen significativamente el riesgo de sanciones legales, que pueden ir desde multas y cierres temporales hasta la cancelación definitiva del funcionamiento por parte de las autoridades sanitarias competentes.
            p.mb-0(data-aos="fade-right") La tabla a continuación resume el marco normativo en Colombia en materia de inocuidad:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        //- tabla
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 1. 
            span Marco normativo para la inocuidad en Colombia
        .tabla-a.color-acento-contenido
          table
            caption Nota. Adaptado de la Ley 9 de 1979, Decreto 3075 de 1997 y lineamientos del Codex Alimentarius sobre BPM y HACCP.
            thead
              tr
                th Elementos claves
                th Descripción
                th Ejemplos normativos
                th Aplicación en la cocina profesional
            tbody
              tr
                td <b>Base legal.</b>
                td Fundamento del sistema sanitario colombiano.
                td Ley 9 de 1979.
                td(rowspan="3")
                  ul
                    li Planificación del menú.
                    li Selección de proveedores.
                    li Manipulación y almacenamiento.
              tr
                td <b>Regulación sanitaria.</b>
                td Condiciones higiénico-sanitarias para establecimientos.
                td Decreto 3075 de 1997.
              tr
                td <b>Normas técnicas.</b>
                td Estándares internacionales para prevenir riesgos biológicos, químicos y físicos.
                td
                  ul
                    li BPM (Buenas Prácticas de Manufactura)
                    li HACCP (Análisis de Peligros y Puntos Críticos de Control).

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .row.justify-content-center.align-items-center.bg-color-11
          .col-lg-4.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/temas/tema1/img10.png", data-aos="zoom-in")
          .col-lg-8
            .row.align-items-center.p-4
              .col-12.col-lg-auto.mb-4.mb-lg-2
                img.d-lg-flex.d-none(src="@/assets/curso/temas/tema1/img11.svg").mx-auto
              .col-12.col-lg-12
                p.mb-0 A manera de ejemplo se puede referenciar el caso genérico de un restaurante de mariscos en la costa Caribe. Este no solo se distingue por la frescura de sus pescados y mariscos, sino porque los consumidores confían en que se respetan los estándares de higiene necesarios para manipular productos altamente perecederos y susceptibles a contaminación biológica, como bacterias del género Salmonella o Vibrio. Otro ejemplo se observa en la industria de alimentos procesados, donde el control de temperaturas, la limpieza de líneas de producción, la capacitación del personal y la implementación de sistemas de trazabilidad garantizan que los productos que llegan al consumidor cumplan con los criterios de inocuidad, reduciendo riesgos de intoxicación y fortaleciendo la confianza en la marca.

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        p.mb-0 Adicionalmente, cumplir con la normativa sanitaria facilita la participación en mercados nacionales e internacionales, ya que muchos procesos de certificación —como los basados en Buenas Prácticas de Manufactura (BPM) o HACCP— son requisitos obligatorios para exportar alimentos. Esto evidencia que la normativa no solo protege la salud pública, sino que también contribuye al desarrollo económico del sector gastronómico y alimentario, promoviendo prácticas profesionales que combinan calidad, seguridad y eficiencia.
    
    .container
      .row.justify-content-center.mb-0
        .col-md-12.col-lg-10
          .row.justify-content-center.align-items-center.bg-color-14
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/img12.png", data-aos="zoom-in")
            .col-lg-9
              p.mb-0(data-aos="fade-right") La normativa sanitaria no solo establece las reglas mínimas para la manipulación de alimentos, sino que impulsa una cultura permanente de prevención y mejora continua dentro de los establecimientos. Al exigir la revisión periódica de los procesos, la capacitación constante del personal y la adopción de tecnologías que refuercen la seguridad alimentaria, estas normas fortalecen la confianza del consumidor, protegen la salud de la comunidad y consolidan la sostenibilidad y reputación de los negocios gastronómicos. En esencia, la normativa se convierte en un pilar ético y estratégico que sostiene una gastronomía segura, responsable y competitiva en el ámbito nacional e internacional.
              
    separador
    
    .row.justify-content-center
      .col-md-12.col-lg-10
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Ley 9 de 1979 como base del Código Sanitario Nacional 

    .row.justify-content-center
      .col-md-12.col-lg-10
        img(src="@/assets/curso/temas/tema1/img13.png", alt="Imagen decorativa")
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            .banner-text.TEXTO Para comprender el origen y la estructura de la regulación sanitaria actual en Colombia, es indispensable remitirse a la Ley 9 de 1979, conocida como el Código Sanitario Nacional. Esta ley, promulgada por el Congreso de la República de Colombia, constituye la norma marco que establece las disposiciones generales sobre salubridad pública en todo el territorio nacional (Congreso de Colombia, 1979). Su promulgación representó un hito en la consolidación de un marco legal moderno orientado a proteger la salud de los ciudadanos y a regular la intervención estatal en materia sanitaria.

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/temas/tema1/img14.svg", data-aos="zoom-in")
          .col-lg-9
            p.mb-0(data-aos="fade-right") La relevancia de la Ley 9 de 1979 se mantiene vigente, más de cuatro décadas después, porque estableció las competencias y facultades del Estado para regular todos los aspectos relacionados con la salud pública. En particular, su Título V aborda los aspectos sanitarios relacionados con los alimentos, definiendo principios de higiene, prevención de enfermedades y control sanitario de los productos alimenticios. Aunque esta ley no detalla procedimientos técnicos específicos, su importancia radica en que autoriza al Gobierno Nacional, a través del Ministerio de Salud y Protección Social, para expedir reglamentos, decretos y resoluciones más detalladas y operativos, que sí contienen los lineamientos técnicos necesarios para garantizar la inocuidad alimentaria.

    .row.justify-content-center.mb-0
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 2. 
            span Comparativa del marco legal sanitario en Colombia
        .tabla-a.color-acento-contenido
          table
            caption Nota. Adaptado de la Ley 9 de 1979, Decreto 3075 de 1997 y lineamientos del Codex Alimentarius sobre BPM y HACCP.
            thead
              tr
                th Aspecto
                th Ley 9 de 1979
                th Decreto 3075 de 1997
                th Resoluciones técnicas (BPM y HACCP)
            tbody
              tr
                td <b>Naturaleza.</b>
                td La "Constitución" de la Salubridad en Colombia.
                td Decreto que regula específicamente estándares de higiene en la manipulación de alimentos.
                td Resoluciones que detallan prácticas como Buenas Prácticas de Manufactura (BPM) y lineamientos del HACCP.
              tr
                td <b>Jerarquía normativa.</b>
                td Nivel más alto en la normativa sanitaria.
                td Deriva su autoridad de la Ley 9 de 1979.
                td Derivan su autoridad dentro del marco establecido por la ley y el decreto.
              tr
                td <b>Función.</b>
                td Establece principios generales de salubridad pública.
                td Regula condiciones específicas de higiene en alimentos.
                td Detallan prácticas técnicas y procedimientos específicos.
              tr
                td <b>Ejemplos mencionados.</b>
                td Fundamenta exigencias sobre agua potable, control de plagas, almacenamiento seguro de alimentos y limpieza de utensilios.
                td Estándares de higiene en manipulación de alimentos.
                td Aplicación de BPM y lineamientos HACCP.
              tr
                td <b>Importancia.</b>
                td Sienta las bases legales del marco regulatorio en inocuidad alimentaria y garantiza coherencia y continuidad del sistema.
                td Norma operativa con legitimidad derivada de la ley.
                td Complementan el sistema sanitario con lineamientos técnicos específicos.

    separador
    
    .row.justify-content-center
      .col-md-12.col-lg-12
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 Decreto 3075 de 1997 como reglamentación específica de las BPM

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3.mb-lg-0.ps-0
              figure
                img(src="@/assets/curso/temas/tema1/img15.png", data-aos="zoom-in")
            .col-lg-10
              p.mb-4(data-aos="fade-right") Si la Ley 9 de 1979 constituye la base general de la regulación sanitaria en Colombia, el Decreto 3075 de 1997 representa el “manual de procedimiento” obligatorio para cualquier establecimiento donde se fabriquen, manipulen o comercialicen alimentos. Este decreto, expedido por el Ministerio de Salud y Protección Social, reglamenta de manera específica las Buenas Prácticas de Manufactura (BPM) en el país, traduciendo los principios generales de la ley en requisitos operativos concretos y verificables (Ministerio de Salud, 1997).
              p.bg-color-9.p-4(data-aos="fade-right") La importancia del Decreto 3075 de 1997 radica en que establece las condiciones sanitarias mínimas que deben cumplir los establecimientos y el personal manipulador para garantizar la inocuidad de los alimentos. En esencia, define qué se considera “buena práctica” en cada etapa del proceso alimentario, desde la recepción de materias primas hasta el servicio al consumidor. Este enfoque preventivo busca evitar la contaminación de los alimentos y, con ello, proteger la salud pública.

    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .p-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 <b>Infraestructura y mantenimiento:</b> especifica cómo deben ser los pisos, paredes y techos, sistemas de ventilación, iluminación y áreas de circulación para garantizar un ambiente higiénico.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img17.png', alt='Imagen de acompañamiento')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 <b>Almacenamiento de alimentos:</b> establece criterios sobre la rotulación, la separación de alimentos crudos y cocidos, la conservación a temperaturas seguras y la prevención de contaminación cruzada.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img18.png', alt='Imagen de acompañamiento')
          
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 <b>Higiene y prácticas del personal:</b> define la correcta práctica de lavado de manos, uso de uniformes, protección de heridas y protocolos para manipuladores enfermos o con síntomas de enfermedades transmisibles por alimentos.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen de acompañamiento')
          
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 <b>Control de plagas y residuos:</b> describe métodos de prevención y manejo de plagas, así como la disposición adecuada de residuos sólidos y líquidos, evitando riesgos de contaminación ambiental o alimentaria.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img20.png', alt='Imagen de acompañamiento')

          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 <b>Equipos y utensilios:</b> regula la limpieza, desinfección y mantenimiento de utensilios, tablas de corte, maquinaria y superficies de contacto con alimentos, asegurando que sean seguros y fáciles de higienizar.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen de acompañamiento')

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        p.mb-0 Identificar y comprender el Decreto 3075 de 1997 es fundamental, ya que constituye el referente directo de las visitas de inspección, vigilancia y control. Un aprendiz o profesional de la gastronomía debe reconocer que prácticas aparentemente pequeñas, como usar tablas de madera deterioradas, almacenar alimentos sin rotular o sin separación adecuada, permitir el ingreso de animales a áreas de manipulación o descuidar el lavado de manos, son incumplimientos claros de esta norma.

    .row.justify-content-center.mb-0
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img34.png", data-aos="zoom-in")
          .col-lg-9
            .row.mb-5.justify-content-center.align-items-center.bg-color-11.p-4
              .col-lg.mb-3.mb-lg-0
                p.mb-0(data-aos="fade-right") En otras palabras, el decreto conecta la teoría legal con la práctica cotidiana, transformando los principios abstractos de la Ley 9 de 1979 en acciones observables dentro de la cocina. Su cumplimiento garantiza que los alimentos sean manipulados en condiciones seguras, protege la salud del consumidor, reduce riesgos de sanciones legales y promueve una cultura de responsabilidad y profesionalismo en el sector gastronómico.
              .col-auto.col-lg-3
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img35.svg", data-aos="zoom-in")

            .row.mb-0.justify-content-center.align-items-center
              .col-lg-3.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema1/img36.png", data-aos="zoom-in")
              .col-lg-9
                p.mb-0(data-aos="fade-right") Además, este decreto sirve como base para la implementación de sistemas de inocuidad más avanzados, como el HACCP, ya que establece las condiciones mínimas necesarias sobre las cuales se puede construir un sistema de control de peligros alimentarios más integral. En este sentido, el Decreto 3075 de 1997 no solo regula lo que debe hacerse, sino que también permite que los establecimientos desarrollen procedimientos internos, protocolos de capacitación y controles de calidad que superen los estándares mínimos, fortaleciendo su competitividad y reputación en el mercado.

    separador
    
    .row.justify-content-center
      .col-md-12.col-lg-12
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.4 Rol del INVIMA y las autoridades sanitarias locales en la vigilancia

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img22.svg", data-aos="zoom-in")
      .col-lg-10
        p.mb-0(data-aos="fade-right") Las normas de inocuidad alimentaria solo adquieren sentido cuando existen entidades encargadas de velar por su cumplimiento, ya que, sin vigilancia, los lineamientos legales serían meros documentos sin efecto práctico. En Colombia, la vigilancia y el control sanitario de los alimentos se organiza como un sistema jerárquico y compartido entre una autoridad nacional y las autoridades sanitarias locales, garantizando la cobertura en todo el territorio y el cumplimiento tanto de normas generales como de regulaciones específicas.
    
    .bg-full-width.bg-fondo-5.tarjeta.mb-5
      .p-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 El Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) es la entidad encargada de ejercer el control sanitario sobre alimentos procesados, bebidas, suplementos dietarios y otros productos que se comercializan a gran escala, incluyendo importaciones y exportaciones.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen de acompañamiento', style="width: 500px;").mx-auto

          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 Su labor es fundamental para garantizar que los productos que llegan al mercado cumplan con los estándares de calidad, inocuidad y etiquetado establecidos por la normativa nacional y los lineamientos internacionales, como los del Codex Alimentarius.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen de acompañamiento',  style="width: 500px;").mx-auto
          
          .row.justify-content-center.align-items-center.p-4
            .col-lg-5.mb-4.mb-lg-0
              p.mb-0 La función más visible del INVIMA es la expedición del Registro Sanitario a productos envasados, como embutidos, salsas, conservas, bebidas y agua embotellada, certificando que estos cumplen con los criterios de higiene y seguridad establecidos por la ley.
            .col-md-8.col-lg-7.mb-0.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen de acompañamiento',  style="width: 500px;").mx-auto
          
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img26.svg", data-aos="zoom-in")
          .col-lg-8
            p.mb-0(data-aos="fade-right") Por su parte, la vigilancia directa de los establecimientos —restaurantes, panaderías, catering y otros servicios de alimentos— recae sobre las Secretarías de Salud Departamentales, Distritales y Municipales. Estas autoridades locales son responsables de realizar inspecciones sanitarias, verificar la correcta implementación de las Buenas Prácticas de Manufactura (BPM) y los lineamientos del HACCP, otorgar o negar la Licencia Sanitaria de Funcionamiento, y aplicar sanciones en caso de incumplimiento del Decreto 3075 de 1997 y normas complementarias. Esta división de competencias permite que el control sea más cercano al lugar donde se manipulan los alimentos y que la supervisión se adapte a las condiciones locales de cada municipio o distrito.
        
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img27.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Identificar la diferencia entre el rol del INVIMA y el de las autoridades locales es crucial para los profesionales de la gastronomía. Por ejemplo, cuando un inspector visita una cocina en Medellín, representa a la Secretaría de Salud Municipal, no al INVIMA, y sus observaciones y posibles sanciones se fundamentan en normas de alcance local y nacional. Por otro lado, un producto envasado que requiera Registro Sanitario debe tramitarse ante el INVIMA, siguiendo un proceso técnico y administrativo diferente.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-10
        .row.align-items-center.bg-color-9.p-4
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img28.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Comprender esta estructura jerárquica permite a los establecimientos dirigir correctamente trámites, entender competencias institucionales y asumir responsabilidades frente a la autoridad correspondiente. Además, fortalece la cultura de cumplimiento, porque los manipuladores y propietarios saben quién supervisa cada aspecto de su operación y qué estándares deben mantener para garantizar la inocuidad de los alimentos, proteger la salud del consumidor y asegurar la continuidad del negocio.

    separador
    
    .row.justify-content-center
      .col-md-12.col-lg-12
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.5 Codex Alimentarius como referente internacional


    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img29.png", data-aos="zoom-in")
          .col-lg-10
            p.mb-2(data-aos="fade-right") El marco normativo colombiano en materia de seguridad alimentaria no se construyó de manera aislada, sino que se fundamenta en criterios científicos y técnicos ampliamente reconocidos a nivel internacional. Uno de los pilares más importantes de esta normativa es el Codex Alimentarius, un programa conjunto de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y la Organización Mundial de la Salud (OMS), cuyo objetivo es desarrollar normas, directrices y códigos de práctica alimentaria armonizados globalmente (FAO & OMS, 2023).

            .row.mb-0.justify-content-center.align-items-center.bg-color-11.p-4
              .col-lg.mb-3.mb-lg-0
                p.mb-0(data-aos="fade-right") El Codex Alimentarius surge como respuesta a la necesidad de proteger la salud de los consumidores y garantizar prácticas equitativas en el comercio internacional de alimentos. Sus normas no solo establecen límites máximos de contaminantes y aditivos, sino que también proporcionan lineamientos sobre etiquetado, higiene, procesamiento y almacenamiento de alimentos. Esto convierte al Codex en un referente técnico y científico que influye directamente en la formulación de políticas y regulaciones nacionales.
              .col-auto.col-lg-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img30.svg", data-aos="zoom-in")

    .container
      .row.justify-content-center.mb-5
        .col-md-12.col-lg-12
          .row.justify-content-center.align-items-center.bg-color-5
            .col-lg-4.mb-3.mb-lg-0.ps-0
              figure
                img(src="@/assets/curso/temas/tema1/img31.png", data-aos="zoom-in")
            .col-lg-8
              .row.align-items-center.p-4
                .col-12.col-lg-auto.mb-4.mb-lg-2
                  img.d-lg-flex.d-none(src="@/assets/curso/temas/tema1/img32.svg").mx-auto
                .col-12.col-lg-12
                  p.mb-3 Colombia, como país miembro del Codex, adopta muchas de estas recomendaciones como base para fortalecer su legislación sanitaria nacional. Aunque el Codex no tiene fuerza de ley en el país, sus principios se incorporan en normas y resoluciones emitidas por entidades como el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) y el Ministerio de Salud y Protección Social. Por ejemplo, conceptos clave como el Análisis de Peligros y Puntos Críticos de Control (HACCP) y las Buenas Prácticas de Manufactura (BPM) tienen su origen en los lineamientos del Codex, y su implementación en Colombia garantiza un estándar mínimo de inocuidad alimentaria.
                  p.mb-0 En la tabla a continuación se describe el papel preponderante del Codex Alimentarius en la normativa sanitaria colombiana:

    .row.justify-content-center.mb-4
      .col-md-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 3. 
            span Rol de Codex Alimentarius en la normativa sanitaria colombiana
        .tabla-a.color-acento-contenido
          table
            caption Fuente: SENA 2026
            thead
              tr
                th Aspecto
                th Descripción
            tbody
              tr
                td <b>Fundamento del Codex.</b>
                td El Codex Alimentarius es un programa conjunto de la FAO y la OMS que desarrolla normas, directrices y códigos de práctica alimentaria reconocidos internacionalmente. Sirve como base científica para armonizar estándares de inocuidad y comercio de alimentos entre países.
              tr
                td <b>Propósito principal.</b>
                td Proteger la salud del consumidor y garantizar prácticas justas en el comercio internacional. Incluye límites de contaminantes, aditivos, lineamientos de higiene, etiquetado, procesamiento y almacenamiento de alimentos.
              tr
                td <b>Relación con Colombia.</b>
                td Aunque el Codex no tiene fuerza legal directa en el país, Colombia adopta gran parte de sus lineamientos para fortalecer su legislación sanitaria. Estos se incorporan en la normatividad emitida por el Ministerio de Salud y Protección Social y por el INVIMA.
              tr
                td <b>Lineamientos derivados aplicados a Colombia.</b>
                td Principios clave como las Buenas Prácticas de Manufactura (BPM) y el sistema HACCP tienen su origen en el Codex, y su adopción garantiza un estándar mínimo de inocuidad en la producción y manipulación de alimentos.
              tr
                td <b>Impacto en el comercio y la industria.</b>
                td Cumplir con los estándares del Codex facilita la exportación de alimentos, reduce rechazos en mercados internacionales y asegura prácticas modernas en restaurantes, industrias y cocinas institucionales.
              tr
                td <b>Relevancia para el sector gastronómico colombiano.</b>
                td La adopción de los principios del Codex permite que la gastronomía nacional se alinee con estándares internacionales, fortalezca la confianza del consumidor y mantenga prácticas actualizadas frente a nuevos avances científicos y tecnológicos.
              tr
                td <b>Importancia estratégica.</b>
                td El Codex actúa como un puente entre las regulaciones nacionales y el contexto global, fortaleciendo la salud pública, el comercio alimentario y la competitividad del país en el mercado internacional.

    .row.justify-content-center.mb-0
      .col-md-12.col-lg-10
        .row.mb-0.justify-content-center.align-items-center
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img33.svg", data-aos="zoom-in")
          .col-lg-10
            p.mb-0(data-aos="fade-right") El Codex Alimentarius se convierte en un aliado estratégico para Colombia, no solo como referente técnico, sino como un puente que conecta la producción nacional con los estándares internacionales de inocuidad. Su adopción facilita la exportación de alimentos, fortalece la modernización de los procesos gastronómicos e industriales y asegura que las prácticas aplicadas en los establecimientos cumplan criterios globales de calidad y seguridad. Además, promueve la actualización constante de la normativa local frente a los avances científicos y tecnológicos, incrementando la competitividad del país y reforzando la confianza del consumidor. En este sentido, el Codex no es únicamente un conjunto de normas: es una herramienta clave que orienta el comercio seguro, protege la salud pública y posiciona a Colombia dentro de un marco internacional de excelencia en inocuidad alimentaria.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
