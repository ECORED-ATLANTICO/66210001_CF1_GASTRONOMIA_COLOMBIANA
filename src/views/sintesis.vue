<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .row.justify-content-center.align-items-center.bg-color-11.p-4(data-aos="fade-left")
          .col-lg-9.mb-3.mb-lg-0
            p.mb-0 Este componente formativo Buenas Prácticas de Manufactura en la Cocina Colombiana proporciona las bases conceptuales y normativas para que el aprendiz desarrolle la capacidad de identificar los elementos clave de las BPM en el ámbito gastronómico nacional. Su recorrido formativo inicia con el marco legal colombiano y la clasificación de peligros, se adentra en los requisitos del personal manipulador y finaliza con los procedimientos para el manejo higiénico de los alimentos, y conforma un sistema de conocimiento integral. Su apropiación es el cimiento sobre el cual se construye la aplicación práctica de la norma para garantizar la inocuidad como pilar fundamental de la gastronomía profesional.
          .col-auto.col-lg-3
            figure
              img.d-none.d-lg-flex(src="@/assets/curso/temas/tema4/img01.svg", data-aos="zoom-in")


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
