/*eslint no-new: 0*/
/*global Jotted*/
new Jotted(document.querySelector('#editor'), {
  files: [{
    type: 'html',
    url: 'example.html'
  }],
  // pane: 'html',
  plugins: [
    'codemirror'
  ]
});
