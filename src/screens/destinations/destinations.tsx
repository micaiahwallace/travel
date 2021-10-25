import { Grid, Item, Label } from 'semantic-ui-react'
import { IDestination } from '../../models'
import { Tabs } from '../home/tabs'

interface Props {
  active?: boolean
  currentDestination?: IDestination
  destinations: IDestination[]
  setDestination: (destination: IDestination) => void
}

export const DestinationsPage: React.FC<Props> = ({
  active,
  currentDestination,
  destinations,
  setDestination,
}: Props) => {
  if (!active) return null
  return (
    <Grid>
      <Grid.Column width={4}>
        <Item.Group divided>
          {destinations.map((destination) => (
            <Item key={destination.title}>
              <Item.Content>
                <Item.Header as="a" onClick={() => setDestination(destination)}>
                  {destination.title}
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">{destination.summary}</span>
                </Item.Meta>
                <Item.Description>{destination.description}</Item.Description>
                <Item.Extra>
                  {destination.tags.map((tag) => (
                    <Label key={tag}>{tag}</Label>
                  ))}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Grid.Column>
      <Grid.Column width={12}>
        <Tabs destination={currentDestination}>
          Please select a destination!
        </Tabs>
      </Grid.Column>
    </Grid>
  )
}
