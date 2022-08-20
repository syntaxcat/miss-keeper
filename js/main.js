import noteApp from "./apps/miss-keep/views/note-app.cmp.js";

const options = {
  template: `
                <noteApp />
`,
  components: {
    noteApp,
  },
};

const app = Vue.createApp(options);
app.mount("#app");
