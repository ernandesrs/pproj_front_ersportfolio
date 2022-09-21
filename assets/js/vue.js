import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
    data() {
        return {
            showCookieAlert: false,
            showFloatingNav: false,

            settings: {
                url: "http://127.0.0.1:5500",
                name: "ERSPORTFOLIO",
                title: "Lorem supsom dolor nists dolor",
                favicon: "./assets/img/favicon.svg",
                logo: "./assets/img/logo.svg",
                profiles: [
                    {
                        text: "Linkedin",
                        url: "",
                        icon: "./assets/img/icons/icon_linkedin.svg"
                    },
                    {
                        text: "Github",
                        url: "",
                        icon: "./assets/img/icons/icon_github.svg"
                    }
                ]
            },
            sections: {
                banner: {
                    title: "Lorem Ipsum Dolor Sit",
                    description: "Olá, me chamo Lorem Ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum saepe enim tenetur accusamus fugiat quasi porro sunt beatae.",
                    image: "./assets/img/banner-ilustration.png"
                },
                skills: {
                    title: "LOREM SIT",
                    subtitle: "Lorem Ipsum Dolor Sit Amet",
                    skills_list: [
                        {
                            title: "Lorem ipsum",
                            icon: "./assets/img/icons/icon_ui.svg",
                            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius distinctio ab ex."
                        },
                        {
                            title: "Lorem dolor",
                            icon: "./assets/img/icons/icon_database.svg",
                            text: "Lorem ipsum dolor sit amet consectetur."
                        }
                    ]
                },
                portfolio: {
                    title: "LOREM SIT",
                    subtitle: "Lorem Ipsum Dolor",
                    jobs_list: [
                        {
                            image: "./assets/img/work_1_portfolio.png",
                            links: {
                                live_preview: "#",
                                github: "#"
                            },
                            title: "Portfolio",
                            description: "Este projeto é um portifólio. Foram utilizados HTML, CSS com Bootstrap 4 e SASS e JavaScript."
                        },
                        {
                            image: "./assets/img/work_2_panel.png",
                            links: {
                                live_preview: "#",
                                github: "#"
                            },
                            title: "Painel Administrativo",
                            description: "Neste projeto foram utilizados HTML, CSS com Bootstrap 4 e SASS, JavaScript com jQuery e PHP com Laravel 8."
                        }
                    ]
                },
                contact: {
                    title: "Contato",
                    subtitle: "Lorem Ipsum Dolor",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam natus adipisci quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, illum!",
                    profiles: [
                        {
                            text: "Vinte Pila",
                            icon: "./assets/img/icons/vintepila.svg",
                            url: ""
                        },
                        {
                            text: "Workana",
                            icon: "./assets/img/icons/workana.svg",
                            url: ""
                        },
                        {
                            text: "Linkedin",
                            icon: "./assets/img/icons/linkedin.svg",
                            url: ""
                        }
                    ]
                },
                cookie_alert: {
                    title: "Usamos cookie!",
                    description: `Utilizamos cookie neste website para aprimorar o usabilidade de nossos visitantes. Ao navegar, você concorda com o uso de cookies conforme <a href="#" target="_blank">nossas políticas de privacidade</a>.`,
                }
            }
        };
    },

    mounted() {
        this.showHiddeFloatingNav();
        this.cookieAlert();
    },

    methods: {
        showHiddeFloatingNav() {
            window.addEventListener("scroll", () => {
                if (window.top.scrollY < 525 && this.showFloatingNav) {
                    this.showFloatingNav = false;
                } else if (window.top.scrollY >= 525 && !this.showFloatingNav) {
                    this.showFloatingNav = true;
                }
            });
        },

        /**
         * 
         * Cookie
         * 
         */
        cookieAlert() {
            if (!localStorage.getItem("cookie_accept"))
                this.showCookieAlert = true;
        },

        acceptCookie() {
            localStorage.setItem("cookie_accept", true);
            this.closeCookieAlert();
        },

        closeCookieAlert() {
            this.showCookieAlert = false;
        }
    },
}).mount("#app");