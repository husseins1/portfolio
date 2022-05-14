import {

  Container,
 
  Link,
  List,
  ListItem,
  SimpleGrid,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Transworld">
    <Container>
      <Title>Transworld</Title>
      <P>Landing page for company specilized in sulfur and tructors export</P>
      <P>
        Transworld is company website built with more than 60 images optiumized
        which makes it blazingly fast.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Plain Html, Css, and JS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link target={'_blank'} href="https://transworldiq.com/">
            https://transworldiq.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/companyProject.jpg" alt="tranworld" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/transworld_01.jpg" alt="transworld" />
        <WorkImage src="/images/works/transworld_02.jpg" alt="transworld" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
