// import 'css-loader!../css/index.css';
import '../css/index.css';
import '../css/title.less';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好啊,李银河';

document.body.appendChild(divEl);
