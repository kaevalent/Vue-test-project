import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale:'mn',
    messages: {
        mn: {
            homepageTitle: 'Үндэсний тэргүүлэгч',
            homepageAccent:'электроникийн',
            homepageTitle2:'компани',
            buttonText1:'Төслүүд',
            buttonText2:'Бидний Тухай',
            homepageScreen:'Нүүр',
            projectsScreen:'Төслүүд',
            aboutScreen:'Бидний Тухай',
            companyName:'СИСТЕМ ИНЖЕНЕРЧЛЭЛ МОНГОЛ ХХК',
            playmetrixText:'Зар сурталчилгааны платформ',
            engineText:'Бионик гар хөгжүүлэлтийн төсөл',
            aquametrixText:'Ухаалаг цахим худгийн систем',
            fuelmetrixText:'Ухаалаг шатахуун хяналтын систем',
            clixText:'Сансрын хяналтын систем',
            agrometrixText:'Газар тариалангийн хяналтын систем',
            dronexText:'Дрон автоматжуулах систем',
            energymetrixText:'Эрчим хүчний хяналтын систем',
            evmText:'Цахилгаан автомашин цэнэглэх систем'
        },
        en: {
            homepageTitle:'National',
            homepageAccent:'Leader',
            homepageTitle2:'In IT',
            buttonText1:'Our Projects',
            buttonText2:'Why us?',
            homepageScreen:'Home',
            projectsScreen:'Our Projects',
            aboutScreen:'About Us',
            companyName:'SYSTEMS ENGINEERING MONGOLIA LTD',
            playmetrixText:'An advertising platform',
            engineText:'Bionic arm developement project',
            aquametrixText:'Smart wells',
            fuelmetrixText:'Intelligent fuel control system',
            clixText:'Space control system',
            agrometrixText:'Agricultural monitoring system',
            dronexText:'Drone automation system',
            energymetrixText:'Power control system',
            evmText:'Electric car charging system'
        }
    }
})

function setLocale(localeName) {
    if (localeName == i18n.global.locale) {
        return
    }
    else {
        i18n.global.locale = localeName
    }
}

export default i18n