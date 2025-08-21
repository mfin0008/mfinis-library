<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const props = defineProps(
  {
    userData: [{}]
  }
)

const getUserDataKeys = () => {
  if (props.userData.length === 0) {
    return [];
  }
  else {
    return Object.keys(props.userData[0]);
  }
}
</script>

<template>
<DataTable v-if="props.userData.length > 0" :value="props.userData" tableStyle="min-width: 50rem">
  <Column
    v-for="col in getUserDataKeys()"
    :key="col"
    :field="col"
    :header="col"
  ></Column>
</DataTable>
</template>

<style>
</style>
