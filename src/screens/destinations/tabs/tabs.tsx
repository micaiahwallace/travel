import { Tab } from 'semantic-ui-react'
import { IDestination } from '../../../models'
import { InfoTab } from './info'
import { MapsTab } from './map'
import { UpdatesTab } from './updates'

interface Props {
  destination: IDestination
}

export const makeSectionPanes = ({ destination }: Props) => [
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
]

interface TabsProps {
  destination?: IDestination
}

export const Tabs = ({
  destination,
  children,
}: React.PropsWithChildren<TabsProps>) => {
  if (!destination) {
    return <>{children}</>
  }
  return (
    <Tab menu={{ secondary: true }} panes={makeSectionPanes({ destination })} />
  )
}
