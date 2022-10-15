import persistPlugin from '@rematch/persist'
import { init } from '@rematch/core'
import storage from 'redux-persist/lib/storage'

import * as models from './models'

const persistConfig = {
  key: 'dashbord-gd',
  storage,
  whitelist: ['authentication']
}

const store = init({ models, plugins: [persistPlugin(persistConfig)] })

export default store
