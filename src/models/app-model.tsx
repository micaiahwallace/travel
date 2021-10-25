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
    setTrip(trip: ITrip) {
      self.currentTrip = trip
    },
    addTrips(...trips: ITrip[]) {
      self.trips.push(...trips)
    },
  }))
