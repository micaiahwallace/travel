import {
  Instance,
  ReferenceIdentifier,
  resolveIdentifier,
  types,
} from 'mobx-state-tree'
import { IDestination, Destination } from '../destination-model'
import { ITrip, Trip } from '../trip-model'

const DataStoreModel = types.model('App Data', {
  trips: types.array(Trip),
  destinations: types.array(Destination),
})

type IDataStore = Instance<typeof DataStoreModel>

export const AppDataModel = DataStoreModel.actions((self) => ({
  setStore<K extends keyof IDataStore>(store: K, data: IDataStore[K]) {
    self[store] = data
  },
  updateDestination<K extends keyof IDestination>(
    id: ReferenceIdentifier,
    key: K,
    value: IDestination[K]
  ) {
    const destination = resolveIdentifier(Destination, self.destinations, id)
    if (destination) {
      destination[key] = value
    }
  },
  updateTrip<K extends keyof ITrip>(
    id: ReferenceIdentifier,
    key: K,
    value: ITrip[K]
  ) {
    const trip = resolveIdentifier(Trip, self.trips, id)
    if (trip) {
      trip[key] = value
    }
  },
  addDestinations(...destinations: IDestination[]) {
    self.destinations.push(...destinations)
  },
  addTrips(...trips: ITrip[]) {
    self.trips.push(...trips)
  },
  createDestination() {
    const id = `dest-${self.destinations.length}`
    const dest = Destination.create({ id })
    self.destinations.push(dest)
    return dest
  },
  createTrip() {
    const id = `trip-${self.trips.length}`
    const trip = Trip.create({ id })
    self.trips.push(trip)
    return trip
  },
}))
