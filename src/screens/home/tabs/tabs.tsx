import { Tab } from 'semantic-ui-react'
import { IDestination } from '../../../models'
import { MapsTab } from './map'
import { UpdatesTab } from './updates'

export const makeSectionPanes = (search: string | undefined) => [
  {
    menuItem: 'Updates',
    render: () => <UpdatesTab />,
  },
  {
    menuItem: 'Map',
    render: () => <MapsTab search={search} />,
  },
]

interface Props {
  destination?: IDestination
}

export const Tabs = ({
  destination,
  children,
}: React.PropsWithChildren<Props>) => {
  if (!destination) {
    return <>{children}</>
  }
  return (
    <Tab
      menu={{ secondary: true }}
      panes={makeSectionPanes(destination.summary)}
    />
  )
}
