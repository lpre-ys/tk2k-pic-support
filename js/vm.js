import m from 'mithril';
import Const from 'const';

export default class Vm {
  constructor() {
    this.result = [];
    this.xMode = m.prop(Const.mode.center);
    this.yMode = m.prop(Const.mode.center);
    this.top = m.prop(0);
    this.bottom = m.prop(0);
    this.left = m.prop(0);
    this.right = m.prop(0);
    this.number = m.prop(1);
  }

  loadEnd(e) {
    if (e.target.readyState == FileReader.DONE) {
      const file = e.target.result;
      const img = new Image();
      img.src = file;
      this.result.push({
        name: e.target.filename,
        width: img.width,
        height: img.height
      });
    }
    m.endComputation();
  }

  getOutput() {
    return this.result.map(({name, width, height}) => {
      return `Picture("${Vm.removeExt(name)}", ${this.number()}, 0, ${this.getX(width)}, ${this.getY(height)}, 0, 100, 0, 1, 100, 100, 100, 100, 0, 0)`;
    }).join("\n");
  }

  getX(width) {
    const sx = parseInt(this.left());
    const aw = Const.window.w - sx - parseInt(this.right());
    if (this.xMode() == Const.mode.center) {
      return Math.floor(aw / 2) + sx;
    }
    if (this.xMode() == Const.mode.start) {
      return Math.floor(width / 2) + sx;
    }
    if (this.xMode() == Const.mode.end) {
      return Math.floor(aw - (width / 2)) + sx;
    }

    throw new Error('x mode error');
  }

  getY(height) {
    const sy = parseInt(this.top());
    const sh = Const.window.h - sy - parseInt(this.bottom());
    if (this.yMode() == Const.mode.center) {
      return Math.floor(sh / 2) + sy;
    }
    if (this.yMode() == Const.mode.start) {
      return Math.floor(height / 2) + sy;
    }
    if (this.yMode() == Const.mode.end) {
      return Math.floor(sh - (height / 2)) + sy;
    }

    throw new Error('x mode error');
  }

  clear() {
    this.result = [];
  }

  static removeExt(filename) {
    return filename.substr(0, filename.lastIndexOf('.'));
  }
}
