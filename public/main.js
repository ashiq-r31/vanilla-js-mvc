
const app = new App('#app')
const router = new Router(app)

app.addComponent({
  name: 'default',
  model: {},
  view(model) {
    return `<div class='heading'>Find your favourite movies and TV shows.</div>`
  },
})

app.addComponent({
  name: 'home',
  model: {
    data: []
  },
  view(model) {
    const contentHtml = model.reduce((html, text) => html += `<li class='item'>${text}</li>`, ``)
    return `<div>${contentHtml}</div>`
  },
  controller(model) {
    if (!model.data.length) {
      model.data = model.data.concat(['Breaking Bad', 'Godfather II', 'Apocalpyse Now', 'The Shining'])
    }
  }
})

router.addRoute('default', '^#/$')
router.addRoute('home', '^#/home$')
