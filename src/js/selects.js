import NiceSelect from '../lib/nice-select2/dist/js/nice-select2';

const selectA = document.getElementById('a-select');
const selectB = document.getElementById('b-select');
const selectC = document.getElementById('c-select');

if (selectA) {
  new NiceSelect(selectA, {
    //   searchable: true,
    placeholder: 'select',
    searchtext: '',
    selectedtext: '3',
  });
}
if (selectB) {
  new NiceSelect(selectB, {
    //   searchable: true,
    placeholder: 'select',
    searchtext: '',
    selectedtext: '3',
  });
}
if (selectC) {
  new NiceSelect(selectC, {
    //   searchable: true,
    placeholder: 'select',
    searchtext: '',
    selectedtext: '3',
  });
}
/**
 *
 */
