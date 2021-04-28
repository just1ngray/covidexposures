import Container from '../components/Container';

export default function Home() {
    return (
        <Container>
            What is this?!
        </Container>
    );
}

export function getStaticProps() {
    return {
        props: {},
        revalidate: 60*60*6 // 6 hours
    }
}