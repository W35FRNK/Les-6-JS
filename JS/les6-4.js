window.addEventListener('load', function () {
  // caching van HTML-elementen in variabelen
  const input = document.getElementById('text');

  // event handler voor tekstvak
  input.addEventListener('keyup', (e) => {
      const naamKey = e.key;

      const text = input.value;
      console.log('tekst is', text);

      // Enter ingedrukt en tekst is niet leeg
      if (naamKey === 'Enter' && text.length > 0) {
          console.log('op enter');
          setTimeout(function () {
              console.log('alert na 1sec');
              alert(text);
          }, 1000);
      }
  });
});
