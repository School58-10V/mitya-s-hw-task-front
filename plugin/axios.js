import axios from "axios";

export default {
    install(app, config) {
        app.config.globalProperties.$axios = axios.create({
            baseURL: config.baseUrl,
        })
    }
}