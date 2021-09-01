import {
  Box,
  Stack,
  Heading,
  Text,
  Link,
  Divider,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const ArticleItem = ({
  category = "CATEGORY",
  date,
  title,
  description,
  href = "#"
}) => (
  <>
    <LinkBox
      display="flex"
      as="article"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Stack mt={[0, 3]} spacing={0} width={{ base: "full", md: "20%" }}>
        <Box as="span" fontWeight="bold">
          {category}
        </Box>
        <Box as="span" fontSize="sm" color="gray.500">
          {date}
        </Box>
      </Stack>
      <Box width={{ base: "full", md: "80%" }}>
        <Heading color="teal.300">
          <LinkOverlay href={href}>{title}</LinkOverlay>
        </Heading>
        <Text mb={2}>{description}</Text>
        <Link color="teal.300">
          Read more
          <ArrowForwardIcon ml="2" />
        </Link>
      </Box>
    </LinkBox>
    <Divider marginY="4" />
  </>
);

ArticleItem.propTypes = {
  category: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string
};

export default ArticleItem;
