<template>
  <div>
    <studentModal ref="student_modal" />
    <h1>Students</h1>
    <VButton
      type="submit"
      btn_type="primary"
      :isLoading="loading"
      @click="openModal"
    >
      create student
    </VButton>
    <AppTable :headers="headers" :body="store?.students">
      <template #body_action="{ item }">
        <button class="border border-[green]" @click="openEditModal(item)">
          edit
        </button>
      </template>
    </AppTable>
  </div>
</template>

<script setup>
import { useAdminStore } from "../../stores/admin";
import { onMounted, ref,defineExpose } from "vue";
import VButton from "../../components/form/VButton.vue";
import studentModal from "../../pages/admin/Modals/studentModal.vue"
import AppTable from "../../components/ui/app-modal.vue";

const loading = ref(false);
const student_modal = ref();
const store = useAdminStore();

const openModal = () => {
  student_modal.value.openModal();
};

const openEditModal = (item) => {
  student_modal.value.openModal(item);
};

const headers = ref([
  { title: "First name", value: "first_name" },
  { title: "Last name", value: "last_name" },
  { title: "Phone number", value: "phone" },
  { title: "Action", value: "action" },
]);

onMounted(() => {
  store.getStudents();
});
</script>

<style lang="scss" scoped></style>
