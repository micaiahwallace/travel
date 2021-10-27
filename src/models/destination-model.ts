import { Instance, types } from 'mobx-state-tree'

export const Destination = types.model({
  id: types.identifier,
  summary: types.optional(types.string, ''),
  location: types.optional(types.string, ''),
  startDate: types.maybeNull(types.Date),
  endDate: types.maybeNull(types.Date),
  tags: types.array(types.string),
})

export type IDestination = Instance<typeof Destination>
