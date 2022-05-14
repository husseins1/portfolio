import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'

import PandaLogo from '../components/icons/pandaLogo'



const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Welcome to Panda!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Panda For Digital Works
          </Heading>
          <p>Digital Agency ( Designing / Developping ) Websites</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box w="125px" h="125px" display="inline-block" overflow="hidden">
            {/* <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            /> */}
            <PandaLogo />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          A company specializing in the field of programming, electronic
          solutions, web design and web applications, in addition to providing
          commercial and marketing solutions to customers.{' '}
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Our Works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Services
        </Heading>
        <BioSection>
          <BioYear>Web development</BioYear>
          HTML/CSS, JavaScript Animation, WordPress, Responsive
          Website,React,any kind of website
        </BioSection>
        <BioSection>
          <BioYear>Graphic design</BioYear>
          Character Design, Icon Set, Illustration Guide, Illustration Set,Logos
        </BioSection>
        <BioSection>
          <BioYear>Digital consultation</BioYear>
          Consulting for Web, Graphic, Digital Marketing, Digital Strategy
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://api.whatsapp.com/message/MKTPAZPTL2ERA1?autoload=1&app_absent=0"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                @PandaProg
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.facebook.com/panda.prog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @PandaProg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/panda.prog/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Panda.prog
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
