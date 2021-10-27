import { observer } from 'mobx-react-lite'
import { appState } from '../root'

export const TripsPage: React.FC = observer(() => {
  if (!appState.view.isActivePage('Trips')) return null
  return (
    <>
      <h1>trips</h1>
      {JSON.stringify(appState.store.trips, null, '\t')}
    </>
  )
})
