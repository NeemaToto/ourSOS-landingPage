import { Anchor, Group, ActionIcon, rem, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/image'
import svgLogo from 'public/oursosLogo.svg'
import classes from './Footer.module.css';

const links = [
    { link: '#', label: 'Contact' },
    { link: '#', label: 'Privacy' },
    { link: 'https://blog-our-sos-main.vercel.app/', label: 'Blog' },
];

export function Footer() {
    const items = links.map((link) => (
        <Anchor
            c="dimmed"
            key={link.label}
            href={link.link}
            lh={1}
            target="_blank"
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group gap='xs'>
                    <Title order={6}>OurSOS</Title>
                </Group>

                <Group className={classes.links}>
                    {items}
                </Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}