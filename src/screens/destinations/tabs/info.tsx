import { observer } from 'mobx-react-lite'
import { Form, Header, Input, Tab } from 'semantic-ui-react'
import { appState } from '../../root'

export const InfoTab: React.FC = observer(() => {
  return (
    <Tab.Pane attached={false}>
      <Header as="h2">Destination Info</Header>
      <Form>
        <Form.Field>
          <label>Location</label>
          <Input
            icon="map marker alternate"
            iconPosition="left"
            type="text"
            placeholder="Venice, Italy"
            value={appState.currentDestination?.location}
            onChange={(e) =>
              appState.saveDestination('location', e.target.value)
            }
          />
        </Form.Field>
        <Form.Field>
          <label>Summary</label>
          <Input
            icon="align left"
            iconPosition="left"
            type="text"
            placeholder="going to italy"
            value={appState.currentDestination?.summary}
            onChange={(e) =>
              appState.saveDestination('summary', e.target.value)
            }
          />
        </Form.Field>
      </Form>
    </Tab.Pane>
  )
})
