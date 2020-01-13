import Vue from 'vue';

document.addEventListener('DOMContentLoaded', function() {
new Vue({
el: "#app",
data: {
  items: [
    {name: "Gather berries". inCompleted: false}
  ],
  newItem: ""
},
methods: {
  saveNewItem: function() {
    this.items.push({
      name: this.newItem,
      isPurchased: false
    });
    this.newItem = "";
  };
  addItem: function(index){
    this.items[index].isPurchased = true;
  }
}
});
});
