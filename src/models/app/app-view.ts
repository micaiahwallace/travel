import { types } from 'mobx-state-tree'
import { IDestination, ITrip } from '..'
import { Destination } from '../destination-model'
import { Trip } from '../trip-model'

export const AppViewModel = types
  .model('App View', {
    page: types.union(types.literal('Trips'), types.literal('Destinations')),
    trip: types.maybe(types.reference(Trip)),
    destination: types.maybe(types.reference(Destination)),
  })
  .views((self) => ({
    isActivePage: (page: 'Trips' | 'Destinations') => self.page === page,
  }))
  .actions((self) => ({
    setPage(page: 'Trips' | 'Destinations') {
      self.page = page
    },
    setDestination(destination?: IDestination) {
      self.destination = destination
    },
    setTrip(trip?: ITrip) {
      self.trip = trip
    },
  }))
