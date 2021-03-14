<template lang="pug">
b-carousel-list(:data='items' :items-to-show='2')
    template(#item='list')
        .card
            .card-image
                figure.image.is-5by4
                    img(:src='list.image')
                    b-tag(type='is-danger' rounded='' style='position: absolute; top: 0;') {{list.rating}}
                    .card-content
                        .content
                            p.title.is-6 {{ list.title }}
                            //- p.subtitle.is-7 @johnsmith
                            b-field(grouped='')
                                p.control(v-if='list.rating')
                                    b-rate(:value='list.rating' show-score='' disabled='')
                                p.control(style='margin-left: auto')
                                    b-button(size='is-small' type='is-danger' outlined='' @click='info(list.title)' )
                                        .material-icons favorite

</template>

<script>
import auto1 from '../autos/1.png'
import auto2 from '../autos/2.png'
import auto3 from '../autos/3.png'
import auto4 from '../autos/4.png'
export default {
    components: {
        auto1,
        auto2,
        auto3,
        auto4,
    },
    data() {
        return {
            items: [
                {
                    title: 'Camioneta Chevrolet',
                    image: auto1,
                    rating: 4
                },
                {
                    title: 'Vehiculo Chevrolet',
                    image: auto2,
                    rating: 3
                },
                {
                    title: 'Camioneta Ford',
                    image: auto3,
                    rating: 5
                },
                {
                    title: 'Vehiculo Ford',
                    image: auto4,
                    rating: 1
                },
            ]
        }
    },
    methods: {
        info(m) {
            for (let i = 0; i < this.items.length; i++) {
                const ele = this.items[i];
                if (ele.title==m) {
                    this.items[i].rating = ele.rating + 1;
                }
            }
        }
    }
}
</script>