import { ITrip } from '../../models'

interface Props {
  active?: boolean
  currentTrip?: ITrip
  trips: ITrip[]
  setTrip: (trip: ITrip) => void
}

export const TripsPage: React.FC<Props> = ({ active }: Props) => {
  if (!active) return null
  return <h1>trips</h1>
}
