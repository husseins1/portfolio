import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cinemana">
    <Container>
      <Title>Cinemana</Title>
      <P>
        Cinemana is movies project built using Reactjs, Reducx, and
        Firebase.Features like user bookmarks, trailer played hovering are added
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React js, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link target={'_blank'} href="https://cinemana-movies.web.app/">
            https://cinemana-movies.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/cinemana_01.jpg" alt="cinemana" />
        <WorkImage src="/images/works/cinemana_02.jpg" alt="cinemana" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_eyecatch.jpg" alt="cinemana" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
