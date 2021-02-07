<template>
    <div class="parent-component" :id="idParent">
        <h2>{{ titleParent }}</h2>
        <div class="row">
            <div class="col-4" v-for="(item, index) in listData" :key="index">
                <b-button v-b-modal="item.idPopup">Open {{ item.titlePopup }}</b-button>
                <child :item="item"  />
            </div>
        </div>
    </div>    
</template>
<script>
import child from './child'
export default {
    props: {
        idParent: String,
        titleParent: String
    },
    data() {
        return {
            listData: []
        }
    },
    components: {
        child
    },
    mounted() {
        for (let index = 0; index < 3; index++) {
            this.listData.push({
                idPopup: `modal-${this.idParent}-${index + 1}`,
                titlePopup: `Popup ${index + 1} of ${this.titleParent}`,
                contentPopup: 'Hello Solazu'
            })
        }
    },
}
</script>
