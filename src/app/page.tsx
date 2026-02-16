'use client';

import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import Grid from "@cloudscape-design/components/grid";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import HeroImg from '@/hero-img.png'; 


export default function Home() {
  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerBackgroundStyle={() =>
      `bottom center/cover url(${HeroImg.src})`
      }
      header={
        <Box padding={{ vertical: "xxxl" }}>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, s: 8 } }
            ]}
          >
            <Container>
              <Box padding="s">
                <Box
                  fontSize="display-l"
                  fontWeight="bold"
                  variant="h1"
                  padding="n"
                >
                  UGI AI Operations Assistant
                </Box>
                <Box
                  fontSize="display-l"
                  fontWeight="light"
                >
                  Delivering Positive Energy Every Day
                </Box>
                <Box
                  variant="p"
                  color="text-body-secondary"
                  margin={{ top: "xs", bottom: "l" }}
                >
                  AI-powered assistants to optimize natural gas and electric utility operations across Pennsylvania and Maryland. 
                  Serving 760,000 customers with 12,000 miles of natural gas pipeline and 2,000 miles of electric lines.
                </Box>
                <SpaceBetween
                  direction="horizontal"
                  size="xs"
                >
                  <Button variant="primary" href='/chat'>
                    Start a Chat
                  </Button>
                  <Button href='/press-release'>
                    Learn More
                  </Button>
                </SpaceBetween>
              </Box>
            </Container>
          </Grid>
        </Box>
      }
    />
  );
}
