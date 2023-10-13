<template>
  <AppModal v-model="dialog">
    <vee-form :validation-schema="schema" @submit="send" :initial-values="forms">
      <VInput
        type="text"
        label="First Name"
        name="first_name"
        placeHolderProps="First Name"
      ></VInput>
      <VInput
        type="text"
        label="Last Name"
        name="last_name"
        placeHolderProps="Last Name"
      ></VInput>
      <VInput
        type="text"
        label="Phone number"
        name="phone"
        :placeHolderProps="getPhonePlaceholder"
        :mask="phoneMask"
      ></VInput>
      <VButton type="submit" btn_type="primary" :isLoading="loading">{{ btn_title }}</VButton>
    </vee-form>
  </AppModal>
</template>

<script setup>
import { ref, computed, watch, defineExpose } from "vue";
import VButton from "../../../components/form/VButton.vue";
import { useAdminStore } from "../../../stores/admin";
import AppModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";

const store = useAdminStore();

const dialog = ref(false);
const loading = ref(false);



let forms = ref({
  first_name: "",
  last_name: "",
  phone: "",
});

const openModal = (item) => {
  if (item) forms.value = { ...item };
  dialog.value = true;
};

watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
  }
});

const schema = computed(() => ({
  first_name: "required|min:3|max:15",
  last_name: "required|min:3|max:15",
  phone: "required|min:3|max:20",
}));

const btn_title = computed(() => {
  if(loading.value){
    return "Loading"
  }else{
    if(forms.value.phone){
      return "Edit"
    }else{
      return "Add"
    }
  }
  });



const send = async (values) => {
  loading.value = true;
  const payload = {
    first_name: values.first_name,
    last_name: values.last_name,
    phone: values.phone,
  };

  if (!forms.value._id) {
    await store.createStudent(payload);
  } else {
    await store.updateStudent(payload, forms.value._id);
  }

  loading.value = false;
};

defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
