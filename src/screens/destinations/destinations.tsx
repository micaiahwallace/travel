import { Button, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import { IDestination } from '../../models'
import { Tabs } from './tabs'
import { DestinationList } from './destination-list'

interface Props {
  active?: boolean
  currentDestination?: IDestination
  createDestination: () => void
}

export const DestinationsPage: React.FC<Props> = ({
  active,
  currentDestination,
  createDestination,
}: Props) => {
  if (!active) return null
  return (
    <Grid>
      <Grid.Column width={4}>
        <DestinationList />
      </Grid.Column>
      <Grid.Column width={12}>
        <Tabs destination={currentDestination}>
          <Header as="h2" icon textAlign="center" style={{ marginTop: '25px' }}>
            <Icon name="map marker alternate" />
            Plan your Destination
            <Header.Subheader>
              Choose a destination or add a new one to begin planning
            </Header.Subheader>
            <Divider hidden />
          </Header>
          <Grid>
            <Grid.Column textAlign="center">
              <Button
                animated
                secondary
                className="center"
                onClick={() => createDestination()}
              >
                <Button.Content visible>New Destination</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid>
        </Tabs>
      </Grid.Column>
    </Grid>
  )
}
