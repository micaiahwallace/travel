import { Tab, Menu, Icon } from 'semantic-ui-react'
import { IDestination } from '../../../models'
import { InfoTab } from './info'
import { MapsTab } from './map'
import { UpdatesTab } from './updates'

interface Props {
  destination: IDestination
  setDestination: (dest?: IDestination) => void
}

export const makeSectionPanes = ({ destination, setDestination }: Props) => [
  {
    menuItem: 'Info',
    render: () => <InfoTab />,
  },
  {
    menuItem: 'Updates',
    render: () => <UpdatesTab />,
  },
  {
    menuItem: 'Map',
    render: () => <MapsTab search={destination?.location} />,
  },
  {
    menuItem: (
      <Menu.Item key="messages" position="right">
        <Icon name="close" />
      </Menu.Item>
    ),
    render: () => {
      setDestination()
      return <Tab.Pane attached={false}></Tab.Pane>
    },
  },
]

interface TabsProps {
  destination?: IDestination
  setDestination: (dest?: IDestination) => void
}

export const Tabs = ({
  destination,
  setDestination,
  children,
}: React.PropsWithChildren<TabsProps>) => {
  if (!destination) {
    return <>{children}</>
  }
  return (
    <Tab
      menu={{ secondary: true }}
      panes={makeSectionPanes({ destination, setDestination })}
    />
  )
}
