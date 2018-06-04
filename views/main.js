var html = require('choo/html');
var fs = require('fs');
var path = require('path');
var coolPlaces = JSON.parse(fs.readFileSync(path.join(__dirname, '../assets/recs.json')));

var TITLE = 'confrecs - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>Test Places</h2>
          <p>
          ${coolPlaces.cities.name}
          </p>

          <p>
            You're now in control of your own Choo app. The moment you decide to
            deploy it, it'll work offline and on any device.
          </p>

          <br>
        </section>
      </main>
    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
