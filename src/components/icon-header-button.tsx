import {
  Grid,
  Divider,
  Icon,
  Button,
  Header,
  SemanticICONS,
} from 'semantic-ui-react'

interface Props {
  icon: SemanticICONS
  title: string
  subTitle?: string
  buttonText: string
  onClick: () => void
}

export const IconHeaderButton: React.FC<Props> = ({
  icon,
  title,
  subTitle,
  buttonText,
  onClick,
}: Props) => {
  return (
    <>
      <Header as="h2" icon textAlign="center" style={{ marginTop: '25px' }}>
        <Icon name={icon} />
        {title}
        <Header.Subheader>{subTitle}</Header.Subheader>
        <Divider hidden />
      </Header>
      <Grid>
        <Grid.Column textAlign="center">
          <Button animated secondary className="center" onClick={onClick}>
            <Button.Content visible>{buttonText}</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid>
    </>
  )
}
