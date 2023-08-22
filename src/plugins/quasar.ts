import { Dialog, Loading, Notify, Quasar, SessionStorage } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons-outlined'
import kurCkb from 'quasar/lang/kur-CKB'
// Import icon libraries
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const options = {
  plugins: {
    SessionStorage,
    Dialog,
    Loading,
    Notify
  }, // import Quasar plugins and add here
  iconSet: quasarIconSet,
  lang: kurCkb,
  config: {
    screen: {
      bodyClasses: true
    },
    // notify: {
    //   position: 'top-right'
    // }
  }
}

export { Quasar, options }
