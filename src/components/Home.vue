<template>
  <CreateTableModal v-if="showCreateTableModal" @closeModal="showCreateTableModal = false"
    @getResponse="response = $event" />
  <GetTableModal v-if="showGetTableModal" @closeModal="showGetTableModal = false" @getResponse="response = $event" />
  <DeleteTableModal v-if="showDeleteTableModal" @closeModal="showDeleteTableModal = false"
    @getResponse="response = $event" />
  <CreateQueryModal v-if="showCreateQueryModal" @closeModal="showCreateQueryModal = false"
    @getResponse="response = $event" />
  <EditQueryModal v-if="showEditQueryModal" @closeModal="showEditQueryModal = false" @getResponse="response = $event" />
  <DeleteQueryModal v-if="showDeleteQueryModal" @closeModal="showDeleteQueryModal = false"
    @getResponse="response = $event" />
  <GetQueryModal v-if="showGetQueryModal" @closeModal="showGetQueryModal = false" @getResponse="response = $event" />
  <ExecQueryModal v-if="showExecQueryModal" @closeModal="showExecQueryModal = false" @getResponse="response = $event" />
  <CreateTableQueryModal v-if="showCreateTableQueryModal" @closeModal="showCreateTableQueryModal = false"
    @getResponse="response = $event" />
  <EditTableQueryModal v-if="showEditTableQueryModal" @closeModal="showEditTableQueryModal = false"
    @getResponse="response = $event" />
  <GetTableQueryModal v-if="showGetTableQueryModal" @closeModal="showGetTableQueryModal = false"
    @getResponse="response = $event" />
  <ExecTableQueryModal v-if="showExecTableQueryModal" @closeModal="showExecTableQueryModal = false"
    @getResponse="response = $event" />
  <div>
    <div class="p-8 text-3xl text-white bg-blue-500 header h-[100px]">
      <h1>Header</h1>
    </div>
    <div class="flex main">
      <div class="flex flex-col gap-8 p-6 w-1/4 bg-gray-100 aside">
        <button @click="showCreateTableModal = true" class="btn-primary">
          Создание таблицы в базе данных
        </button>
        <button @click="showGetTableModal = true" class="btn-primary">
          Получение информации о таблице в базе данных
        </button>
        <button @click="showDeleteTableModal = true" class="btn-primary">
          Удаление таблицы
        </button>
        <button @click="showCreateQueryModal = true" class="btn-primary">
          Создание запроса, не привязанного к таблице
        </button>
        <button @click="showEditQueryModal = true" class="btn-primary">
          Изменение запроса, не привязанного к таблице
        </button>
        <button @click="showDeleteQueryModal = true" class="btn-primary">
          Удаление запроса, не привязанного к таблице
        </button>
        <button @click="showGetQueryModal = true" class="btn-primary">
          Получение запроса, не привязанного к таблице, по id
        </button>
        <button @click="getAllQueries" class="btn-primary">
          Получение всех запросов, не привязанных к таблице
        </button>
        <button @click="showExecQueryModal = true" class="btn-primary">
          Выполнение запроса, не привязанного к таблице
        </button>
        <button @click="showCreateTableQueryModal = true" class="btn-primary">
          Создание запроса, привязанного к таблице
        </button>
        <button @click="showEditTableQueryModal = true" class="btn-primary">
          Изменение запроса, привязанного к таблице
        </button>
        <button @click="showGetTableQueryModal = true" class="btn-primary">
          Получение запроса, привязанного к таблице, по id
        </button>
        <button @click="getAllTableQueries" class="btn-primary">
          Получение всех запросов, привязанных к таблице
        </button>
        <button @click="showExecTableQueryModal = true" class="btn-primary">
          Выполнение запроса, привязанного к таблице
        </button>
      </div>
      <div class="p-5 w-full">
        <h1 class="text-3xl">Выберите кнопку чтобы выполнить запрос</h1>
        <div class="flex flex-col gap-5">
          <h1 v-if="response" class="text-3xl">Ответ от сервера:</h1>
          <p v-for="item in response.data" :key="item">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../api";
import CreateTableModal from "./CreateTableModal.vue";
import GetTableModal from "./GetTableModal.vue";
import DeleteTableModal from "./DeleteTableModal.vue";
import CreateQueryModal from "./CreateQueryModal.vue";
import EditQueryModal from "./EditQueryModal.vue";
import DeleteQueryModal from "./DeleteQueryModal.vue";
import GetQueryModal from "./GetQueryModal.vue";
import ExecQueryModal from "./ExecQueryModal.vue";
import CreateTableQueryModal from "./CreateTableQueryModal.vue";
import GetTableQueryModal from "./GetTableQueryModal.vue";
import EditTableQueryModal from "./EditTableQueryModal.vue";
import ExecTableQueryModal from "./ExecTableQueryModal.vue";

export default {
  data() {
    return {
      response: "",
      showCreateTableModal: false,
      showGetTableModal: false,
      showDeleteTableModal: false,
      showCreateQueryModal: false,
      showEditQueryModal: false,
      showDeleteQueryModal: false,
      showGetQueryModal: false,
      showExecQueryModal: false,
      showCreateTableQueryModal: false,
      showGetTableQueryModal: false,
      showEditTableQueryModal: false,
      showExecTableQueryModal: false,
    };
  },
  components: {
    CreateTableModal,
    GetTableModal,
    DeleteTableModal,
    CreateQueryModal,
    EditQueryModal,
    DeleteQueryModal,
    GetQueryModal,
    ExecQueryModal,
    CreateTableQueryModal,
    GetTableQueryModal,
    EditTableQueryModal,
    ExecTableQueryModal,
  },
  methods: {
    async getAllQueries() {
      await api.get("single-query/get-all-queries").then((response) => {
        this.response = response;
      });
    },
    async getAllTableQueries() {
      await api.get("table-query/get-all-table-queries").then((response) => {
        this.response = response;
      });
    },
  },
};
</script>
