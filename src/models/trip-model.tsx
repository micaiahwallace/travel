import { Instance, types } from 'mobx-state-tree'

export const Trip = types.model({
  id: types.identifier,
})

export type ITrip = Instance<typeof Trip>
