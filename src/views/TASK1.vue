<template>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="ItemTabLarge in mock" :key="ItemTabLarge.idTabLarge" :tab="ItemTabLarge.nameTabLarge">
        <a-tabs v-model:activeKey1="activeKey1">
          <a-tab-pane v-for="ItemTabSmall in ItemTabLarge.DataTabLarge" :key="ItemTabSmall.idTabSmall"
            :tab="ItemTabSmall.nameTabSmall">
            <a-collapse v-model:activeKey="collapseKey">
              <a-collapse-panel v-for="Collapse in ItemTabSmall.DataTabSmall" :key="Collapse.idContent"
                :header="Collapse.nameCollapse" @click="check(Collapse.idContent)">
                {{ Collapse.textContent }}
              </a-collapse-panel>
            </a-collapse>
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>


<script setup >
import { ref } from 'vue';
import { mock } from './mockdata';
const state = ref([]);
const activeKey = ref();
const activeKey1 = ref();
const collapseKey = ref(state);

function check(a) {
  const filteredArray = state.value.filter((value) => {
    if (value === a) {
      return false;
    }
    return true;
  });
}
</script>


