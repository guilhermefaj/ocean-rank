import { Section, Container, BlurredContainer, Title, About, ReadMore, Wrapper } from "./problemSoluctionStyles";

export default function ProblemSoluctionSection() {
    return (
        <Container>
            <Section>
                <BlurredContainer imageUrl="../../../../public/thunder.jpg" />
                <Wrapper>
                    <Title>A problem</Title>
                    <About>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum minus facere sint veniam fugit culpa nemo et quisquam? Quasi, ducimus deserunt nihil rem qui eius vero! In, id facilis.
                    </About>
                    <ReadMore >Read more</ReadMore>
                </Wrapper>
            </Section>

            <Section>
                <BlurredContainer imageUrl="../../../../public/sun.jpg" />
                <Wrapper>
                    <Title>A solution</Title>
                    <About>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, pariatur facere fugiat nihil ab porro animi fugit, sunt optio at eligendi deserunt voluptatem ullam totam accusantium enim sapiente veniam exercitationem?
                    </About>
                    <ReadMore>Read more</ReadMore>
                </Wrapper>
            </Section>
        </Container>
    );
}