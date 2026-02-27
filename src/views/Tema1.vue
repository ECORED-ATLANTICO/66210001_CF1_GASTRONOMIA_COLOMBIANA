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
        .row.mb-0.justify-content-center.align-items-center.bg-color-primario.p-4
          .col-lg.mb-3.mb-lg-0
            p.mb-0(data-aos="fade-right") La normativa sanitaria en gastronomía no constituye un simple trámite administrativo ni un requisito burocrático; representa la materialización del derecho fundamental a la salud y la garantía de que el acto de alimentar a otras personas se realice con responsabilidad, ética y profesionalismo. Su relevancia radica en que establece parámetros mínimos y obligatorios que buscan prevenir las Enfermedades Transmitidas por Alimentos (ETA), las cuales pueden variar desde molestias gastrointestinales leves hasta cuadros graves que requieran hospitalización, e incluso llegar a causar la muerte en casos extremos.
          .col-auto.col-lg-3
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img02.svg", data-aos="zoom-in")

      .col-md-12.col-lg-10
        p.mb-0 En este sentido, la normativa sanitaria actúa como un marco protector tanto para el consumidor como para el establecimiento, asegurando que la manipulación de alimentos siga criterios científicos, técnicos y legales. Estos criterios incluyen:

    .row.justify-content-center.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center FIRST
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 2
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          h2.text-center 3
          p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    .row.justify-content-center
      .col-md-12.col-lg-10
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/img01.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-3(data-aos="fade-right") En el contexto colombiano, donde la gastronomía representa un pilar cultural, social y económico, el cumplimiento de estas normas no solo protege la salud de los comensales, sino que se convierte en un factor estratégico de competitividad y sostenibilidad. Los establecimientos que demuestran adherencia a la normativa sanitaria generan confianza en sus clientes, fortalecen su reputación, promueven la fidelización y reducen significativamente el riesgo de sanciones legales, que pueden ir desde multas y cierres temporales hasta la cancelación definitiva del funcionamiento por parte de las autoridades sanitarias competentes.
            p.mb-0(data-aos="fade-right") La tabla a continuación resume el marco normativo en Colombia en materia de inocuidad:

    .row.justify-content-center
      .col-md-12.col-lg-10
        //- tabla
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 1. 
            span Marco normativo para la inocuidad en Colombia
        .tabla-a.color-acento-contenido
          table
            caption Fuente: SENA 2026
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
