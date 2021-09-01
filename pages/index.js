import Head from 'next/head'
import {Heading, Text, Box, Link} from '@chakra-ui/react'
import Layout, { siteTitle } from '../components/layout'
import A from '../components/a'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box marginTop='5'>
        <Text fontSize='xl'>
          Hello 👋, I'm Iván. I'am senior frontend developer with more than 10
          years of experience building desktop,mobile and web applications.
        </Text>
        <Text marginY='10' color='grey'>
          You can contact me on{' '}
          <Link color='blue.600' href='https://twitter.com/ivanlhz' isExternal>Twitter</Link> or{' '}
          <Link
          color='blue.400'
            href='https://www.linkedin.com/in/iv%C3%A1n-l%C3%B3pez-hdez/'
            isExternal
          >Linkedin</Link>
        </Text>
      </Box>
    </Layout>
  )
}
