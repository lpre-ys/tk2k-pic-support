import m from 'mithril';
import Vm from 'vm';
import Const from 'const';

const component = {
  controller: function () {
    this.vm = new Vm();
    this.onPutFiles = (e) => {
      this.noop(e);
      const files = e.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.filename = file.name;
        m.startComputation();
        reader.onloadend = this.vm.loadEnd.bind(this.vm);
        reader.readAsDataURL(file);
      }
    };
    this.noop = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  },
  view: (ctrl) => {
    const vm = ctrl.vm;
    return m('.app', [
      m('.loader', {
        ondrop: ctrl.onPutFiles,
        ondragover: ctrl.noop
      }, 'put Image files'),
      m('.tools', [
        m('.xmode', [
          '横位置:',
          m('label', [
            m('input', {
              type: 'radio',
              name: 'xmode',
              value: Const.mode.start,
              checked: vm.xMode() == Const.mode.start,
              onclick: m.withAttr('value', vm.xMode)
            })
          ], '左'),
          m('label', [
            m('input', {
              type: 'radio',
              name: 'xmode',
              value: Const.mode.center,
              checked: vm.xMode() == Const.mode.center,
              onclick: m.withAttr('value', vm.xMode)
            })
          ], '中央'),
          m('label', [
            m('input', {
              type: 'radio',
              name: 'xmode',
              value: Const.mode.end,
              checked: vm.xMode() == Const.mode.end,
              onclick: m.withAttr('value', vm.xMode)
            })
          ], '右')
        ]),
        m('.ymode', [
          '縦位置:',
          m('label', [
            m('input', {
              type: 'radio',
              name: 'yMode',
              value: Const.mode.start,
              checked: vm.yMode() == Const.mode.start,
              onclick: m.withAttr('value', vm.yMode)
            })
          ], '上'),
          m('label', [
            m('input', {
              type: 'radio',
              name: 'yMode',
              value: Const.mode.center,
              checked: vm.yMode() == Const.mode.center,
              onclick: m.withAttr('value', vm.yMode)
            })
          ], '中央'),
          m('label', [
            m('input', {
              type: 'radio',
              name: 'yMode',
              value: Const.mode.end,
              checked: vm.yMode() == Const.mode.end,
              onclick: m.withAttr('value', vm.yMode)
            })
          ], '下')
        ]),
        m('.shift', [
          '余白: ',
          m('label', [
            '上: ',
            m('input', {
              type: 'number',
              value: vm.top(),
              onchange: m.withAttr('value', vm.top),
              onkeyup: m.withAttr('value', vm.top)
            })
          ]),
          m('label', [
            '下: ',
            m('input', {
              type: 'number',
              value: vm.bottom(),
              onchange: m.withAttr('value', vm.bottom),
              onkeyup: m.withAttr('value', vm.bottom)
            })
          ]),
          m('label', [
            '左: ',
            m('input', {
              type: 'number',
              value: vm.left(),
              onchange: m.withAttr('value', vm.left),
              onkeyup: m.withAttr('value', vm.left)
            })
          ]),
          m('label', [
            '右: ',
            m('input', {
              type: 'number',
              value: vm.right(),
              onchange: m.withAttr('value', vm.right),
              onkeyup: m.withAttr('value', vm.right)
            })
          ])
        ]),
        m('.number', [
          m('label', [
            'ピクチャ番号: ',
            m('input', {
              type: 'number',
              value: vm.number(),
              onchange: m.withAttr('value', vm.number),
              onkeyup: m.withAttr('value', vm.number)
            })
          ])
        ]),
        m('button.clear', {
          onclick: vm.clear.bind(vm)
        }, 'clear')
      ]),
      m('textarea.output', {
        readonly: 'readonly',
        onfocus: (e) => { e.target.select(); }
      }, vm.getOutput())
    ]);
  }
};

export default component;
