import router from './Routes';

export default function (Vue) {

    Vue.helper = {
        back() {
            router.go(-1);
        },

        home() {
            router.push({name: 'discover'});
        },
        set_caption(caption) {
            localStorage.setItem('caption', caption);
        },
        //Client ID 2 secret
        client_secret() {
            return 'INSERT_CLIENT_HERE';
        },
        // braintree sandbox/production key
        sandbox_key() {
            return 'BRAINTREE_KEY';
        },
        current_theme() {
            const theme = document.body.firstElementChild.className;
            if(theme !== undefined){
                return theme;
            }
        },
        //Get token and check it
        getIntGatewayStatus(request) {
            const data = JSON.parse(localStorage.getItem('_site_info'))
            if (request === 'int_gateway') {
                return data.int_gateway;
            }

        }
    };
    //make auth global
    Object.defineProperties(Vue.prototype, {
        $Helper: {
            get: () => {
                return Vue.helper;
            }
        }
    });
}
