import { Button, Group, Tabs, Title } from '@mantine/core';
import { AboutUs } from '../aboutUs';
import { ContactUs } from '../contactUs';

export function NavigationBar() {
  return (
    <Group ml={40}>
      <Tabs defaultValue="aboutUs" inverted style={{ fontSize: 50 }}>
        <Tabs.List>
          <Tabs.Tab value="aboutUs">About Us</Tabs.Tab>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="contactUs">Contact Us</Tabs.Tab>
        </Tabs.List>
        <Group>
          <Tabs.Panel style={{ fontSize: 50 }} value="aboutUs" pb="lg">
            <AboutUs />
          </Tabs.Panel>
          <Tabs.Panel value="gallery" pb="lg">
            Gallery
          </Tabs.Panel>
          <Tabs.Panel value="contactUs" pb="lg">
            <ContactUs />
          </Tabs.Panel>
        </Group>
      </Tabs>
    </Group>
  );
}
