
const app = new App('#app')
const router = new Router(app)

class View {
  constructor(template, init = {}) {
    this.template = template
    this.init = init
  }

  render(model) {
    return this.template(model)
  }
}

const header = () => `<div class='heading'>Find your favourite movies and TV shows.</div>`

const list = (model) => {
  const contentHtml = model.data.reduce((html, text) => html += `<li class='item'>${text}</li>`, ``)
  return `<div>${contentHtml} <button id='start'>Add to watchlist</button</div>`
}

app.addComponent({
  name: 'default',
  model: {},
  view: new View(header)
})

app.addComponent({
  name: 'home',
  model: {
    data: ['Breaking Bad', 'Godfather II', 'Apocalpyse Now', 'The Shining']
  },
  view: new View(list, { button: null }),
  controller(model, view, app) {
    view.init.button = document.getElementById('start')
    view.init.button.addEventListener('click', () => {
      model.data.push('Full Metal Jacket')
      app.updateView()
    })
  }
})

router.addRoute('default', '^#/$')
router.addRoute('home', '^#/home$')
