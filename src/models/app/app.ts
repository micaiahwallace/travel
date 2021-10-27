import { types } from 'mobx-state-tree'
import { AppDataModel } from './app-data'
import { AppViewModel } from './app-view'

export const AppModel = types.model('App Root', {
  view: AppViewModel,
  store: AppDataModel,
})
