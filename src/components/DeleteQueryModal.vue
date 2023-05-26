<template>
  <div class="flex fixed justify-center items-center w-full h-full bg-black/80">
    <div class="flex flex-col gap-6 p-5 bg-white rounded-lg w-[500px]">
      <h1 class="text-2xl">Удалить запрос</h1>
      <div class="flex flex-col">
        <label for="name">Введите id запроса</label>
        <input class="pl-2 rounded-lg border-2 border-blue-500" v-model="queryId" type="text" />
      </div>
      <div class="flex gap-5 justify-end">
        <button @click="deleteQuery" class="py-2 px-3 text-white bg-green-500 rounded-lg">
          Удалить
        </button>
        <button @click="closeModal" class="py-2 px-3 text-white bg-red-500 rounded-lg">
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryId: 1,
    };
  },
  methods: {
    async deleteQuery() {
      await api
        .delete("single-query/delete-single-query-by-id/" + this.queryId)
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

<style></style>
