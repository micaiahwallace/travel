import { observer } from 'mobx-react-lite'
import { Form, Header, Input, Tab } from 'semantic-ui-react'
import { DateInput } from '../../../components/date-input'
import { appState } from '../../root'

export const InfoTab: React.FC = observer(() => {
  const { destination } = appState.view
  if (!destination) {
    return null
  }
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
            value={destination.location}
            onChange={(e) =>
              appState.store.updateDestination(
                destination.id,
                'location',
                e.target.value
              )
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
            value={destination.summary}
            onChange={(e) =>
              appState.store.updateDestination(
                destination.id,
                'summary',
                e.target.value
              )
            }
          />
        </Form.Field>
        <DateInput
          start
          label="Start Date"
          placeholder="MM/DD/YYYY"
          date={destination.startDate}
          setDate={(d) =>
            appState.store.updateDestination(destination.id, 'startDate', d)
          }
        />
        <DateInput
          end
          label="End Date"
          placeholder="MM/DD/YYYY"
          date={destination.endDate}
          setDate={(d) =>
            appState.store.updateDestination(destination.id, 'endDate', d)
          }
        />
      </Form>
    </Tab.Pane>
  )
})
