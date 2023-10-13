import axiosClient from "../apiClient";

const adminStudent = {
  getStudents() {
    const url = "admin/get-students/q?page=1&limit=10";
    return axiosClient.get(url);
  },
  createStudent(payload) {
    const url = "admin/add-student";
    return axiosClient.post(url, payload);
  },
  updateStudent(payload, id) {
    const url = `admin/update-student/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteStudent(id) {
    const url = `admin/delete-student/${id}`;
    return axiosClient.delete(url);
  },
};

export default adminStudent;
