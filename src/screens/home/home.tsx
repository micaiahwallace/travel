import { observer } from 'mobx-react-lite'
import { Header, Container, Divider, Menu } from 'semantic-ui-react'
import { AppModel, Destination } from '../../models'
import { DestinationsPage } from '../destinations'
import { TripsPage } from '../trips'

export const appState = AppModel.create({ tab: 'Destinations' })
appState.addDestinations(
  Destination.create({
    id: 'd1',
    title: 'Italy',
    summary: 'Venice, Italy',
    description: 'this is the description of going to italy.',
    tags: ['europe', '2023'],
  }),
  Destination.create({
    id: 'd2',
    title: 'New York City',
    summary: 'NYC, USA',
    description: 'Visit the capital of NY.',
    tags: ['usa', '2022'],
  }),
  Destination.create({
    id: 'd3',
    title: 'Seattle',
    summary: 'Seattle, WA',
    description: 'Check out the amazing rain weather for a short period.',
    tags: ['usa', '2023'],
  })
)

export const Home = observer(() => {
  return (
    <Container>
      <Menu secondary>
        <Menu.Item header name="Destinations" style={{ paddingLeft: '0px' }}>
          <Header as="h1">
            Travel Planner
            <Header.Subheader>
              Configure travel destinations and paths
            </Header.Subheader>
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
        destinations={appState.destinations}
        setDestination={appState.setDestination}
      />
    </Container>
  )
})
