<template>
  <div>
    {{ this.getTestData }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
@Component
export default class HelloWorld extends Vue {
  @Getter getTestData!: string;
}
</script>
