import { Box, createTheme, Group, Image, MantineProvider, Title } from '@mantine/core';
import { NavigationBar } from '@/components/NavBar/navBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import pic from '../pictures/clam.jpg';

export function HomePage() {
  const theme = createTheme({
    fontFamily: 'Assistant',
    // fontFamilyMonospace: 'Monaco, Courier, monospace',
    // headings: { fontFamily: 'Greycliff CF, sans-serif' },
  });
  return (
    <MantineProvider theme={theme}>
      <Box bg="#F9ECAC" h={1000}>
        <Image h={200} w={200} src={pic} />
        <Title
          style={{
            fontFamily: 'Times New Roman',
            fontWeight: 'light',
          }}
          size={50}
          ml={20}
          py={40}
        >
          AnyTides
        </Title>
        <NavigationBar />
      </Box>
    </MantineProvider>
  );
}
