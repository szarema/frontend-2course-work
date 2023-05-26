<template>
  <div class="flex fixed justify-center items-center w-full h-full bg-black/80">
    <div class="flex flex-col gap-6 p-5 bg-white rounded-lg w-[500px]">
      <h1 class="text-2xl">Найти таблицу</h1>
      <div class="flex flex-col">
        <label for="name">Название таблицы</label>
        <input v-model="name" class="pl-2 rounded-lg border-2 border-blue-500" name="name" type="text" />
      </div>
      <div class="flex gap-5 justify-end">
        <button @click="getTable" class="py-2 px-5 text-white bg-green-500 rounded-lg">
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
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async getTable() {
      await api.get("table/get-table-by-name/" + this.name).then((response) => {
        this.$emit("getResponse", response);
      });
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
