import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

//   import { ContactIconsList } from './ContactIcons';
//   import classes from './ContactUs.module.css';

export function ContactUs() {
  return (
    <>
      <TextInput label="Email" placeholder="your@email.com" required />
      <TextInput
        label="Name"
        placeholder="John Doe"
        mt="md"
      />
      <Textarea
        required
        label="Your message"
        placeholder="I want to order your goods"
        minRows={4}
        mt="md"
        // classNames={{ input: classes.input, label: classes.inputLabel }}
      />
    </>
  );
}
