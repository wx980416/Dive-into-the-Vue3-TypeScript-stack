// h函数
const h = (type, props, children) => {
  // vnode => js对象
  return {
    type,
    props,
    children,
  };
};

// mpunt函数
const mount = (vnode, container) => {
  // vnode -> dom element
  // 1.创建真实的元素 dom元素，并且在vnode中保留el
  const el = (vnode.el = document.createElement(vnode.type));

  // 2.处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];

      // 处理边界情况 如果是on事件
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3.处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }

  // 4.将el挂载到container上
  container.appendChild(el);
};

const patch = (n1, n2) => {
  // 先判断type类型是否一样
  if (n1.type !== n2.type) {
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    // 1.取出element对象，并且在n2中进行保存
    const el = (n2.el = n1.el);
    // debugger;

    // 2.处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1 获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          // 设置新事件
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          // 设置新属性
          el.setAttribute(key, newValue);
        }
      }
    }
    // 2.2 删除旧的 props
    for (const key in oldProps) {
      if (key.startsWith('on')) {
        // 移除事件
        const value = oldProps[key];
        el.removeEventListener(key.slice(2).toLowerCase(), value);
      }
      if (!(key in newProps)) {
        // 移除属性
        el.removeAttribute(key);
      }
    }

    // 3.处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    // debugger;
    if (typeof newChildren === 'string') {
      // 情况1：newChildren是一个String
      // 边界情况
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else {
      // 情况2：newChildren是一个Array
      // 但是 oldChildren还是一个string
      if (typeof oldChildren === 'string') {
        // 直接清空再替换
        el.innerHTML = '';
        newChildren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // 都是数组的情况
        // oldChildren:[v1,v2,v3]
        // newChildren:[v1,v5,v4,v10,v8]
        // 1.前面有相同节点进行patch操作
        // [v1,v2,v3] [v1,v5,v4]
        const commonlength = Math.min(oldChildren.length, newChildren.length);
        for (let i = 0; i < commonlength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }

        // 2.如果 newChildren.length > oldChildren.length
        // 挂载多余的节点
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            mount(item, el);
          });
        }

        // 3.如果 newChildren.length < oldChildren.length
        // 删除多余的节点
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(oldChildren.length).forEach((item) => {
            el.removeChild(item, el);
          });
        }
      }
    }
  }
};
