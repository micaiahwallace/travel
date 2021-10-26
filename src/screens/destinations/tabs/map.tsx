import { Tab, Embed } from 'semantic-ui-react'
import { app } from '../../../config'

interface Props {
  search?: string
}

export const MapsTab: React.FC<Props> = ({ search }: Props) => {
  return (
    <Tab.Pane attached={false}>
      <Embed
        active={!!search}
        url={`https://www.google.com/maps/embed/v1/place?key=${app.mapsApiKey}&q=${search}`}
      />
    </Tab.Pane>
  )
}
