import { Service } from './servicos'
import { Container, ServicesGrid } from './styles';

const services = [
    {
        title:'Desenvolvimento de produtos',
        description:'Conte com nossa equipe altamente qualificada para transformar suas ideias em realidade. Utilizando as mais recentes tendências e tecnologias, iremos criar produtos inovadores e irresistíveis, garantindo que você esteja sempre à frente da concorrência.'
    },
    {
        title:'Melhore suas formulações e agrade seus clientes',
        description:'Aperfeiçoe suas receitas e fórmulas para entregar produtos de altíssima qualidade. Com nossa consultoria em engenharia de alimentos, você terá acesso a análises detalhadas, testes sensoriais e a expertise necessária para otimizar suas formulações, atendendo às demandas dos consumidores mais exigentes.'
    },
    {
        title:'Melhore suas formulações e agrade seus clientes',
        description:'Aperfeiçoe suas receitas e fórmulas para entregar produtos de altíssima qualidade. Com nossa consultoria em engenharia de alimentos, você terá acesso a análises detalhadas, testes sensoriais e a expertise necessária para otimizar suas formulações, atendendo às demandas dos consumidores mais exigentes.'
    },
    {
        title:'Melhore suas formulações e agrade seus clientes',
        description:'Aperfeiçoe suas receitas e fórmulas para entregar produtos de altíssima qualidade. Com nossa consultoria em engenharia de alimentos, você terá acesso a análises detalhadas, testes sensoriais e a expertise necessária para otimizar suas formulações, atendendo às demandas dos consumidores mais exigentes.'
    },
    {
        title:'Melhore suas formulações e agrade seus clientes',
        description:'Aperfeiçoe suas receitas e fórmulas para entregar produtos de altíssima qualidade. Com nossa consultoria em engenharia de alimentos, você terá acesso a análises detalhadas, testes sensoriais e a expertise necessária para otimizar suas formulações, atendendo às demandas dos consumidores mais exigentes.'
    },
 
]

export default function ServicesPage() {
    return (
        <Container>
            <h1>Nossos Serviços</h1>
            <ServicesGrid>
                {services.map(service => (
                    <Service key={service.title} title={service.title} description={service.description} />
                ))}
            </ServicesGrid>
        </Container>
    )
}