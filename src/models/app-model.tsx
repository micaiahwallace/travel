import { types } from 'mobx-state-tree'
import { Destination, IDestination } from './destination-model'
import { ITrip, Trip } from './trip-model'

export const AppModel = types
  .model({
    tab: types.union(types.literal('Trips'), types.literal('Destinations')),
    currentTrip: types.maybe(types.reference(Trip)),
    currentDestination: types.maybe(types.reference(Destination)),
    trips: types.array(Trip),
    destinations: types.array(Destination),
  })
  .views((self) => ({
    isActiveTab(tab: string) {
      return self.tab === tab
    },
  }))
  .actions((self) => ({
    selectMainTab(tab: 'Trips' | 'Destinations') {
      self.tab = tab
    },
    setDestination(destination: IDestination) {
      self.currentDestination = destination
    },
    addDestinations(...destinations: IDestination[]) {
      self.destinations.push(...destinations)
    },
    saveDestination<K extends keyof IDestination>(
      key: K,
      value: IDestination[K],
      id?: string
    ) {
      const dest = id
        ? self.destinations.find((d) => d.id === id)
        : self.currentDestination
      if (dest) {
        dest[key] = value
      }
    },
    createDestination() {
      const id = `dest-${self.destinations.length}`
      self.destinations.push({ id })
      self.currentDestination = self.destinations[self.destinations.length - 1]
    },
    setTrip(trip: ITrip) {
      self.currentTrip = trip
    },
    addTrips(...trips: ITrip[]) {
      self.trips.push(...trips)
    },
  }))
