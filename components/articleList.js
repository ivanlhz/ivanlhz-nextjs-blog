import {Heading,Box} from '@chakra-ui/react'
import ArticleItem from './articleItem'

const ArticleList =({allPostsData}) => (    
  <Box marginTop='10'>
      <Heading>Articles</Heading>
        {allPostsData.map((data) => (
          <ArticleItem {...data} />
        ))}
    </Box>)

export default ArticleList