const app = Vue.createApp({
    data() {
        return {
            stepone: 'STEP 1',
            info: 'YOUR INFO',
            steptwo: 'STEP 2',
            plan: 'SELECT PLAN',
            stepthree: 'STEP 3',
            addons: 'ADD-ONS',
            stepfour: 'STEP 4',
            summary: 'SUMMARY',
            personal: 'Personal Info',
            personal2: 'Please provide your name, email address, and phone number.',
            plans: 'Select your plan',
            plans2: 'You have the option of monthly or yearly billing.',
            pick: 'Pick add-ons',
            pick2: 'Add-ons help enhance your gaming experience.',
            finish: 'Finishing up',
            finish2: 'Double-check everything looks OK before confirming.',
            subOne: 'Arcade',
            arPrice: '$9/mo',
            subTwo: 'Advanced',
            adPrice: '$12/mo',
            subThree: 'Pro',
            proPrice: '$15/mo',
            planChoice: '',
            planPrice: '',
            price1: '',
            price2: '',
            price3: '',
            prices: '',
            change: 'Change',
            extras: '',
            online: 'Online services',
            larger: 'Larger storage',
            customize: 'Customizable Profile',
            oneDollar: 1,
            twoDollar: 2,
            isVisible: false,
            isVisible2: false,
            isVisible3: false,
            isVisible4: false,
            my: '(Monthly)',
        
            inventory: {
                arcade: 0,
                advanced: 0,
                pro: 0,
                onlineServices: 0,
                largerStorage: 0,
                customizableProfile: 0
            },
            cart: {
                arcade: 0,
                advanced: 0,
                pro: 0,
                onlineServices: 0,
                largerStorage: 0,
                customizableProfile: 0
            }
        }
    },

    methods: {

        switchMonthYear() {
            if (chbox.checked) {
                this.my = '(Yearly)'

            } else {
                this.my = '(Monthly)'
            }
        }
    },
    methods: {

        addToCart(type) {
            this.cart[type] += this.inventory[type]
            console.log(this.cart)

        },
        planSelect() {
            this.planChoice = 'Arcade'
            this.planPrice = '$9/mo'
            this.cart.arcade += 9
            this.cart.advanced = 0
            this.cart.pro = 0
        },
        planSelect2() {
            this.planChoice = 'Advanced'
            this.planPrice = '$12/mo'
            this.cart.advanced += 12
            this.cart.arcade = 0
            this.cart.pro = 0
        },
        planSelect3() {
            this.planChoice = 'Pro'
            this.planPrice = '$15/mo'
            this.cart.pro += 15
            this.cart.arcade = 0
            this.cart.advanced = 0
        },

        toggleChk() {
            if (check1.checked) {
                this.isVisible = true
                this.cart.onlineServices += 1

            } else {
                this.isVisible = false
                this.cart.onlineServices -= 1

            }
        },
        toggleChk2() {
            if (check2.checked) {
                this.isVisible2 = true
                this.cart.largerStorage += 2

            } else {
                this.isVisible2 = false
                this.cart.largerStorage -= 2

            }
        },
        toggleChk3() {
            if (check3.checked) {
                this.isVisible3 = true
                this.cart.customizableProfile += 2

            } else {
                this.isVisible3 = false
                this.cart.customizableProfile -= 2

            }
        }
    },
    computed: {
        cartTotal() {
            return this.cart.arcade + this.cart.advanced + this.cart.pro + this.cart.onlineServices + this.cart.largerStorage + this.cart.customizableProfile
        }
    }
})

app.mount('#app')