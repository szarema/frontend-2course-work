<template>
  <div class="flex fixed justify-center items-center w-full h-full bg-black/80">
    <div class="flex flex-col gap-6 p-5 bg-white rounded-lg w-[500px]">
      <h1 class="text-2xl">Получить запрос</h1>
      <div class="flex flex-col">
        <label for="name">Введите id запроса</label>
        <input class="pl-2 rounded-lg border-2 border-blue-500" v-model="queryId" type="text" />
      </div>
      <div class="flex gap-5 justify-end">
        <button @click="getQuery" class="py-2 px-3 text-white bg-green-500 rounded-lg">
          Найти
        </button>
        <button @click="closeModal" class="py-2 px-3 text-white bg-red-500 rounded-lg">
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../api";

export default {
  data() {
    return {
      queryId: 1,
    };
  },
  methods: {
    async getQuery() {
      await api
        .get("table-query/get-table-query-by-id/" + this.queryId)
        .then((response) => {
          this.$emit("getResponse", response);
        });
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
