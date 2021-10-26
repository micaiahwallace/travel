import { Instance, types } from 'mobx-state-tree'
import { Destination } from './destination-model'

export const Trip = types.model({
  id: types.identifier,
  name: types.string,
  destinations: types.array(types.reference(Destination)),
})

export type ITrip = Instance<typeof Trip>
