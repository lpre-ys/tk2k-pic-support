import assert from 'power-assert';
import Vm from '../js/vm';

describe('View Model Test', () => {
  describe('static removeExt', () => {
    it('拡張子が取り除かれること', () => {
      const ret = Vm.removeExt('test_file.png');
      assert(ret == 'test_file');
    });
    it('ドットを含むファイル名も適切に処理されること', () => {
      const ret = Vm.removeExt('test.file.png');
      assert(ret == 'test.file');
    });
  });
});
