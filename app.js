let app = document.querySelector('.app')
class Router {
    constructor(path) {
        this.path = path
    }
    navigate() {
        window.history.pushState({name:"amir"}, 'name', this.path)
    }
    render() {
        app.innerHTML = `you are at ${this.path}`
    }
}

let buttons = document.querySelectorAll('button')
for (const button of buttons) {
    button.addEventListener('click', function () {
        let pathname = this.getAttribute('router')
        const page = new Router(pathname)
        page.navigate()
        page.render()
    })
}