import {
  Container,

  Link,
  List,
  ListItem,
 
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Atta-Alkhare">
    <Container>
      <Title>Atta-Alkhare</Title>
      <P>
        Atta Alkhair is exchange money website for company named Atta Alkhair.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, Css, JS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link target={'_blank'} href="https://atta-alkhair.com/">
            https://atta-alkhair.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/exchangeProject.jpg" alt="exchange" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/exchange_01.jpg" alt="exchange" />
        <WorkImage src="/images/works/exchange_02.jpg" alt="exchange" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
