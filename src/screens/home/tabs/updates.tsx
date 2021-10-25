import { Tab, Feed, Form, Button } from 'semantic-ui-react'

export const UpdatesTab = () => {
  return (
    <Tab.Pane attached={false}>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Micaiah</Feed.User> posted an update
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              We went to this place and it was really cool.
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      <Form reply>
        <Form.TextArea />
        <Button primary content="Post Update" />
      </Form>
    </Tab.Pane>
  )
}
