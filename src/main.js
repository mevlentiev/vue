import { createApp } from 'vue'
import App from './App'
import UiComponents from '@/components/UI'
import Directives from '@/directives'
import router from "@/router/router";
import store from "@/store";

const app = createApp(App)

UiComponents.forEach(component => {
    app.component(component.name, component);
})

Directives.forEach(directive => {
    app.directive(directive.name, directive);
})

app
    .use(router)
    .use(store)
    .mount('#app')
