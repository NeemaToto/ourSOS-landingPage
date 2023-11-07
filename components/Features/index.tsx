import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconBell, IconWorld, IconHeartHandshake } from '@tabler/icons-react';
  
  import classes from './Features.module.css';
  
  const mockdata = [
    {
      title: 'Translated Emergency Alerts',
      description:
      `OurSOS Translate is at the heart of our commitment to global safety. With this feature, you'll transcend language barriers effortlessly, ensuring emergency notifications that reach you anytime, anywhere, will be in a language you can understand.` ,
      icon: IconBell,
    },
    {
      title: 'Interactive Map',
      description:
        `Visualizing crisis information is crucial. OurSOS offers an interactive map view that displays crises and dangers in your area. This user-friendly interface helps you understand the proximity of threats and aids in making quick and informed decisions.`,
      icon: IconWorld,
    },
    {
      title: 'Friends and Family Safety',
      description:
        `OurSOS doesn't stop there. We recognize that your circle of loved ones extends far and wide, beyond just your immediate location. With approximate location data, we can provide you with information about the safety of your family and friends around the world. It's our way of ensuring that you're always connected to the people who matter most to you.`,
      icon: IconHeartHandshake,
    },
  ];
  
  export function Features() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.deepBlue[9]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container style={{ marginTop: '8rem'}} size="lg" py="xl">
        <Group justify="center">
          <Badge style={{ color:'#005AAD', backgroundColor: '#FFD400'}}variant="filled" size="lg">
            Travel Safety Certified
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          OurSOS
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          {`It's not just an app; OurSOS is your lifeline in unfamiliar surroundings, offering location-based safety data and the comfort of staying connected with loved ones while you explore the world.`}
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }