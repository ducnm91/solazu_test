<template>
    <b-modal :id="item.idPopup" :title="item.titlePopup" hide-footer>
      <p class="my-4">{{ item.contentPopup }}</p>
    </b-modal>
</template>
<script>
export default {
    props: {
        item: Object
    }    
}
</script>