


import Vue from 'vue'


export default function(component,props){
  const vm = new Vue({
    render(h){
      return h(component,{props})
    }
  })
  vm.$mount();
  return vm.$el;
}