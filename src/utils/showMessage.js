/* <div>
  <span><i></i></span>
  <span>text</span>
</div> */

// 调用该函数 就会提示信息
import Icon from '@/components/Icon/index.vue'
import getComponentWrapper from './getComponentWrapper'
import styles from './showMessage.module.less'
export default function(props){
  const type = props.type || 'info';
  const duration = props.duration || 2000;
  const container = props.container || document.body;
  const msg = props.msg || '';
  const div = document.createElement('div');
  div.classList.add(`${styles['message']}`);
  const rootDom = getComponentWrapper(Icon,type);
  const spanStyle = styles[`message-${type}`];
  div.classList.add(spanStyle)
  div.innerHTML = `<span>${rootDom.outerHTML}</span><span>${msg}</span>`
  container.appendChild(div);
  if(getComputedStyle(container).position === 'static'){
    container.style.position = 'relative';
  }
  setTimeout(() => {
    div.style.transform = `translate(-50%,-50%) translateY(-20px)`;
    div.style.opacity = 0;
    div.addEventListener('transitionend',function(){
      div.remove();
    },{once:true},false)
  }, duration);
  // 强制渲染页面
  div.clientHeight;
  div.style.transform = `translate(-50%,-50%) translateY(0)`;
  div.style.opacity = 1;
  
}