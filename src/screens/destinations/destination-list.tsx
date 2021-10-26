import { observer } from 'mobx-react-lite'
import { Item, Label } from 'semantic-ui-react'
import { appState } from '../root'

export const DestinationList: React.FC = observer(() => {
  return (
    <Item.Group divided>
      {appState.destinations.map((destination) => (
        <Item key={destination.summary}>
          <Item.Content>
            <Item.Header
              as="a"
              onClick={() => appState.setDestination(destination)}
            >
              {destination.summary}
            </Item.Header>
            <Item.Meta>
              <span className="cinema">11.01.02 - 12.01.02</span>
            </Item.Meta>
            <Item.Description>{destination.location}</Item.Description>
            <Item.Extra>
              {destination.tags.map((tag) => (
                <Label key={tag}>{tag}</Label>
              ))}
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  )
})
