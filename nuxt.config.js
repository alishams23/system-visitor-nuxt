export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'parsiyan',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [{
                src: "dependencies/apexcharts/apexcharts.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/bootstrap/js/bootstrap.bundle.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/chart.js/chart.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/echarts/echarts.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/quill/quill.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependenciessimple-datatables/simple-datatables.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/tinymce/tinymce.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/php-email-form/validate.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/jquery.parallax-scroll/js/jquery.parallax-scroll.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "dependencies/magnific-popup/js/jquery.magnific-popup.min.js",
                body: true,
                type: 'text/javascript'
            },
            {
                src: "js/main.js",
                body: true,
                type: 'text/javascript'
            },

        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'balm-ui/dist/balm-ui.css',
        "assets/vendor/bootstrap/css/bootstrap.min.css",
        "assets/vendor/quill/quill.snow.css",
        "assets/vendor/quill/quill.bubble.css",
        "assets/vendor/simple-datatables/style.css",
        "assets/css/style.css",
        "assets/inside/WebFonts/css/fontiran.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/balm-ui'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}