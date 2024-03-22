import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const About = () => (
  <StyledContent>
    <Title>Iara Dreger | Artes Plásticas</Title>
    <Paragraph>
      "Uma pintura para mim é essencialmente um verbo, não um substantivo, um evento em primeiro
      lugar e só secundariamente uma imagem." Elaine De Kooning:
    </Paragraph>

    <Subtitle>Arte Gestual Contemporânea</Subtitle>
    <Paragraph>
      Pintura acrílica e pigmento sobre tela, que despertam a curiosidade e a imaginação. Grande
      parte dos trabalhos são monocromáticos, de fácil adequação em ambientes modernos.
    </Paragraph>

    <Subtitle>Educação</Subtitle>
    <Paragraph>
      <strong>2004 - 2007</strong>
      <br />
      Mestre em Gestão Ambiental e Energias Renováveis pela Universidade de Ciências Aplicadas de
      Colônia, Alemanha.
    </Paragraph>
    <Paragraph>
      <strong>1980 - 1987</strong>
      <br />
      Arquiteta e Urbanista pela Universidade Federal de Santa Catarina de Florianópolis.
    </Paragraph>

    <Subtitle>Cursos de Arte</Subtitle>
    <Paragraph>
      <strong>2015</strong>
      <br />
      Na Escola Na Casa, com Meg Eliane Margareth Roussenq, Florianópolis.
    </Paragraph>
    <Paragraph>
      <strong>2014</strong>
      <br />
      Com Silvia Carvalho, Florianópolis. Na Oficina de Artes do Centro Integrado de Pintura CIC,
      Florianópolis.
    </Paragraph>
    <Paragraph>
      <strong>2012-13</strong>
      <br />
      Na Escola de Artes de Chapecó com Lenice Weis e Neocy Fin, Chapecó, Brasil.
    </Paragraph>
    <Paragraph>
      <strong>1982</strong>
      <br />
      Com Rodrigo de Haro nas Oficinas do Centro Integrado de Cultura CIC de Florianópolis.
    </Paragraph>

    <Subtitle>Exposição Individual</Subtitle>
    <Paragraph>
      <strong>2019</strong>
      <br />
      Galeria de Arte Ernesto Meyer Filho, Palácio Barriga Verde, Florianópolis.
    </Paragraph>

    <Subtitle>Exposições Coletivas</Subtitle>
    <Paragraph>
      <strong>2015</strong>
      <br />
      Prêmio Aliança Francesa de Arte Contemporânea 2015, Florianópolis.
    </Paragraph>
    <Paragraph>
      <strong>2012 e 2013</strong>
      <br />
      Escola de Artes de Chapecó.
    </Paragraph>
    <Paragraph>
      <strong>1984</strong>
      <br />
      Salão de Novos Artistas - organizado pelo Museu de Artes de Santa Catarina, no Centro
      Integrado de Cultura CIC de Florianópolis.
    </Paragraph>

    <Subtitle>Publicações</Subtitle>
    <Paragraph>
      <strong>1988</strong>
      <br />
      Desenhos para a cartilha didática sobre a história de Cândido Rondon, São Paulo, 1988.
    </Paragraph>
  </StyledContent>
);

export { About };
