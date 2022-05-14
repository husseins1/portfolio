import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import BrocadeTuumbnail from '../public/images/works/inkdrop_eyecatch.jpg'
import thumbWalknote from '../public/images/works/walknote_eyecatch.jpg'
import ecommerceThumbnail from '../public/images/works/ecommerce.jpg'
import TransworldThumbnail from '../public/images/works/companyProject.jpg'
import attaThumbnail from '../public/images/works/exchangeProject.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="brocade" title="Brocade" thumbnail={BrocadeTuumbnail}>
            Brocade is Landing page for Syrian resturenat in the city of baghdad.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cinemana"
            title="Cinemana"
            thumbnail={thumbWalknote}
          >
            Cinemana is Netflix clone for bookmarking movies and series.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="atta"
            title="Atta Alkhare"
            thumbnail={attaThumbnail}
          >
            Atta is Landing page for local exchange.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="muhand"
            title="Muhand"
            thumbnail={ecommerceThumbnail}
          >
            Muhand is ecommerce developed via Wordpress cms.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="transworld" thumbnail={TransworldThumbnail} title="Transworld">
            Landing page for Iraqi company Transworld.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
