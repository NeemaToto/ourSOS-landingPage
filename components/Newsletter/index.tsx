import { Paper, Text, TextInput, Button, Group, Container, Title } from '@mantine/core';

import classes from './Newsletter.module.css';

export function NewsLetter() {
    return (
        <Container size="lg" py="xl">
            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts} style={{ backgroundColor: '#003566' }}>
                        <Title order={2} fw={700} className={classes.title} c="#FFF">
                            Subscribe to the OurSOS <span style={{color: '#FFD400'}}>Newsletter</span>
                        </Title>
                        <Text size='sm' c="#fff">
                        Subscribe to our newsletter to be in the know about everything related to OurSOS. You'll have the inside track on new blog posts and even be the first to know when we launch OurSOS.</Text>

                    </div>

                    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                        <Title order={3} fw={700} className={classes.title}>
                            Stay in touch
                        </Title>

                        <div className={classes.fields}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            <TextInput label="Your name" placeholder="Your name" />
                            <TextInput label="Your email" placeholder="Name@email.com" required />
                            </div>
                            <Group justify="flex-start" mt="md">
                                <Button type="submit" color='#FFD400' className={classes.control}>
                                    Sign me up!
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}