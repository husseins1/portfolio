import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Muhand">
    <Container>
      <Title>Muhand</Title>
      <P>Mohand ecommece is ecommerce build via Wordpress </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target={'_blank'} href="https://mu9nd.com/">
            https://mu9nd.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, php</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ecommerce.jpg" alt="muhand" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
