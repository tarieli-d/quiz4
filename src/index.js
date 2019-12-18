
//import _ from 'lodash';
import './style.css';
import './index.sass';
async function component(name) {
  const element = document.createElement('div');

   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', name],' ');
 //element.classList.add('hello');
  return element;
}

//document.body.appendChild(component('tarieli'));
  component('friend').then(component => {
    document.body.appendChild(component);
  });