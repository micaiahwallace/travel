import { Grid } from 'semantic-ui-react'
import { Tabs } from './tabs'
import { DestinationList } from './destination-list'
import { appState } from '../root'
import { observer } from 'mobx-react-lite'
import { IconHeaderButton } from '../../components/icon-header-button'

export const DestinationsPage: React.FC = observer(() => {
  if (!appState.view.isActivePage('Destinations')) return null
  const onClickNewDestination = () => {
    appState.view.setDestination(appState.store.createDestination())
  }
  return (
    <Grid>
      <Grid.Column width={4}>
        <DestinationList />
      </Grid.Column>
      <Grid.Column width={12}>
        <Tabs
          destination={appState.view.destination}
          setDestination={appState.view.setDestination}
        >
          <IconHeaderButton
            icon="map marker alternate"
            title="Plan your Destination"
            subTitle="Choose a destination or add a new one to begin planning"
            buttonText="New Destination"
            onClick={onClickNewDestination}
          />
        </Tabs>
      </Grid.Column>
    </Grid>
  )
})
