import { AppConfig } from './types'

export const app: AppConfig = {
  mapsApiKey: process.env.REACT_APP_MAPS_API_KEY ?? '',
}
