import { defineStore } from "pinia";
import adminStudent from "../api/admin/adminStudent";

export const useAdminStore = defineStore({
  id: "admin",
  state: () => ({
    students: [],
  }),
  actions: {
    async getStudents() {
      try {
        let res=await adminStudent.getStudents()
        this.students=res.students
      } catch (err) {
        console.log(err);
      }
    },
    async createStudent(payload) {
      try {
        await adminStudent.createStudent(payload);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
