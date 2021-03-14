<template lang="pug">
  section
    b-message(title='Correo' aria-close-label='VCerrar')
      | omar.lopez@geor.pe
    //- b-message(title='Danger' type='is-danger' aria-close-label='Close message')
    //-   | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    //- b-message(title='Success' type='is-success' aria-close-label='Close message')
    //-   | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    b-message(title='Teléfonos' type='is-info' aria-close-label='Cerrar')
      | +58 424 137 3125
    //- b-message(title='Warning' type='is-warning' aria-close-label='Close message')
    //-   | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit

</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>