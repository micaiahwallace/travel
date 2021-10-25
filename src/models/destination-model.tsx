import { Instance, types } from 'mobx-state-tree'

export const Destination = types.model({
  id: types.identifier,
  title: types.string,
  summary: types.string,
  description: types.string,
  tags: types.array(types.string),
})

export type IDestination = Instance<typeof Destination>
