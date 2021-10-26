import { observer } from 'mobx-react-lite'
import { Header, Container, Divider, Menu } from 'semantic-ui-react'
import { AppModel, Destination } from '../../models'
import { DestinationsPage } from '../destinations'
import { TripsPage } from '../trips'

export const appState = AppModel.create({ tab: 'Destinations' })
appState.addDestinations(
  Destination.create({
    id: 'd1',
    summary: 'Italy',
    location: 'Venice, Italy',
    tags: ['europe', '2023'],
  }),
  Destination.create({
    id: 'd2',
    summary: 'New York',
    location: 'NYC, USA',
    tags: ['usa', '2022'],
  }),
  Destination.create({
    id: 'd3',
    summary: 'Seattle',
    location: 'Seattle, WA',
    tags: ['usa', '2023'],
  })
)

export const Home = observer(() => {
  return (
    <Container>
      <Menu secondary>
        <Menu.Item header name="Destinations" style={{ paddingLeft: '0px' }}>
          <Header as="h1">
            Travel Bot<Header.Subheader>Powered by Snoapps</Header.Subheader>
          </Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="Trips"
            active={appState.isActiveTab('Trips')}
            onClick={() => appState.selectMainTab('Trips')}
          />
          <Menu.Item
            name="Destinations"
            active={appState.isActiveTab('Destinations')}
            onClick={() => appState.selectMainTab('Destinations')}
          />
        </Menu.Menu>
      </Menu>
      <Divider />
      <TripsPage
        active={appState.isActiveTab('Trips')}
        currentTrip={appState.currentTrip}
        trips={appState.trips}
        setTrip={appState.setTrip}
      />
      <DestinationsPage
        active={appState.isActiveTab('Destinations')}
        currentDestination={appState.currentDestination}
        createDestination={appState.createDestination}
      />
    </Container>
  )
})
