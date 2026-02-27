<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/img01.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-0(data-aos="fade-right") La capacidad de identificar los principios y normas de las Buenas Prácticas de Manufactura (BPM) constituye el primer y más crítico paso para garantizar la inocuidad en la cocina colombiana. El componente formativo Buenas Prácticas de Manufactura en la cocina colombiana, está diseñado para que el aprendiz desarrolle una mirada crítica que le permita reconocer, en cada rincón de una cocina y en cada etapa del proceso, los elementos que aseguran un manejo higiénico de los alimentos, de acuerdo con la normativa sanitaria vigente. Para ello, se abordará el marco legal colombiano, la tipología de los peligros alimentarios, los requisitos del personal manipulador y los procedimientos clave en el ciclo de vida del alimento, sentando las bases para un desempeño profesional responsable y ético.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
