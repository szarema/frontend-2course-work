<template>
  <div class="flex fixed justify-center items-center w-full h-full bg-black/80">
    <div class="flex flex-col gap-6 p-5 bg-white rounded-lg w-[500px]">
      <h1 class="text-2xl">Создать таблицу</h1>
      <div class="flex flex-col gap-3">
        <label for="name">Название таблицы</label>
        <input class="pl-2 rounded-lg border-2 border-blue-500" v-model="name" type="text" />
        <button class="p-2 w-40 text-white bg-blue-500 rounded-lg" @click="addInput">
          Добавить инпут
        </button>
        <div class="flex gap-5" v-for="(input, index) in inputs" :key="index">
          <div class="flex flex-col">
            <label for="input.title">Название</label>
            <input class="pl-2 rounded-lg border-2 border-blue-500" v-model="input.title" type="text" />
          </div>
          <div class="flex flex-col">
            <label for="input.type">Тип</label>
            <input class="pl-2 rounded-lg border-2 border-blue-500 w-[120px]" v-model="input.type" type="text" />
          </div>
          <div class="flex items-center">
            <button class="py-2 px-3 text-white bg-red-500 rounded-lg" @click="removeInput(index)">
              Удалить
            </button>
          </div>
        </div>
        <label for="name">Название первичного ключа</label>
        <input class="pl-2 rounded-lg border-2 border-blue-500" v-model="primaryKey" type="text" />
      </div>
      <div class="flex gap-5 justify-end">
        <button @click="createTable" class="py-2 px-3 text-white bg-green-500 rounded-lg">
          Создать
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
      name: "",
      primaryKey: "",
      inputs: [{ title: "", type: "" }],
    };
  },
  methods: {
    async createTable() {
      const data = {
        tableName: this.name,
        columnInfos: this.inputs.map((input) => ({
          title: input.title,
          type: input.type,
        })),
        primaryKey: this.primaryKey,
      };
      api.post("table/create-table", data).then((response) => {
        this.$emit("getResponse", response);
      });
    },
    addInput() {
      this.inputs.push({ title: "", type: "" });
    },
    removeInput(index) {
      this.inputs.splice(index, 1);
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>
