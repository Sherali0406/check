export default {
  path: "/admin",
  name: "admin",
  component: import("../pages/admin/Admin.vue"),
  children: [
    {
      path: "/students",
      name: "students",
      component: import("../pages/admin/Students.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: import("../pages/admin/Courses.vue"),
    },
  ],
};