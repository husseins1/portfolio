import {
  Container,
  
  Link,
  List,
  ListItem,
 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Brocade">
    <Container>
      <Title>Brocade</Title>
      <P>
        Brocade is Landing page for Syrian resturenat in the city of baghdad.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target={'_blank'} href="https://brocade-bg.com/">
            https://brocade-bg.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, Css, GSAP</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Brocade.JPG" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
