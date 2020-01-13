import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "obtain Huel referral link", isCompleted: false},
        {name: "post on Insta", isCompleted: false},
        {name: "buy Huel", isCompleted: false}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function() {
        this.tasks.push({
          name: this.newTask,
          isCompleted: false
        });
        this.newTask = "";
      },
      completeTask: function(index){
        this.tasks[index].isCompleted = true;
      }
    }
  });
});
