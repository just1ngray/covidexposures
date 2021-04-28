
import Container from "../components/Container";
import { useLogin } from "../util/frontend/credentials";

export default function Dashboard() {
    const creds = useLogin();

    return (
        <Container authRequired>
            <p>Hello</p>
        </Container>
    );
}

export function getStaticProps() {
    return {
        props: {}
    };
}