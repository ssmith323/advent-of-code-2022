'use strict';
(function () {
  fetch('./output.json')
    .then((response) => response.json())
    .then(
      (json) => (document.getElementById('id').innerText = JSON.stringify(json))
    );
})();
