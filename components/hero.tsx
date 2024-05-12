import { Img } from "./img";
import author from "@/public/images/author.jpeg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-5 md:pt-20 md:pb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">
              <b> Série de Obras</b> <br /> Iara Dreger
            </h1>
            <Img
              style={{
                width: 30,
                height: 30,
                marginLeft: 8,
              }}
              alt="Autora"
              src={author}
            />
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Artista Visual (Mondai-SC), reside em Florianópolis. Formada em
              <br /> Arquitetura e Urbanismo. Trabalhou e estudou na Alemanha
              por 18 anos. No
              <br /> Brasil fez diversos laboratórios de imersão artística,
              aprimorando seus
              <br /> conhecimentos em arte contemporânea, participando de
              diversas mostras
              <br /> coletivas e individuais.
              <br />
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 mb-4">
                <br /> A minha arte gestual expressionista abstrata é motivada
                por impressões do
                <br /> inconsciente, somadas à minha sensibilidade e
                amadurecimento artístico.
              </div>
              <br />
              <br />
              <i>
                “Iara Dreger executa uma investigação expressionista em sua
                pintura e imprime o<br /> gesto, uma ação em construção, criando
                procedimentos aleatórios na
                <br /> materialidade de sua obra. A artista explora o gesto
                criador e a sua complexidade
                <br /> diante das incertezas e transformações da vida. Sua
                experiência artística efetua
                <br /> uma reflexão e não estabelece limites, porque a
                transitoriedade é seu ponto de
                <br /> partida. Sempre haverá algo mais belo para ser revelado
                em sua obra”.
              </i>
              <br />
              <br /> Andy Rodrigues - Curador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
