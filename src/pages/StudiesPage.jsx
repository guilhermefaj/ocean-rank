import { Container } from "react-bootstrap";
import styled from "styled-components";

const StudiesImages = {
  studies1: "../../public/estudo1.jpg",
  studies2: "../../public/estudo2.jpg",
  studies3: "../../public/estudo3.jpg",
  studies4: "../../public/estudo4.jpg",
};

const StudiesPage = () => {
  return (
    <>
      <PageContainer>
        <Title>Estudos sobre Conscientização Oceânica</Title>
        <Subtitle>
          Explore os estudos mais recentes que ajudam a entender e promover a
          conscientização sobre a preservação dos oceanos.
        </Subtitle>

        <section class="py-5 py-xl-8">
          <div class="container overflow-hidden">
            <div class="row gy-5 gy-md-6 gy-lg-0">
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">120K</h5>
                  <p class="text-secondary m-0">Estudos Publicados</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">1890+</h5>
                  <p class="text-secondary m-0">Problemas Resolvidos</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">181</h5>
                  <p class="text-secondary m-0">Projetos Finalizados</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">786+</h5>
                  <p class="text-secondary m-0">Prêmios Distribuídos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="py-3 py-md-5">
          <div class="container overflow-hidden">
            <div class="row gy-5">
              <div class="col-12">
                <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="https://onlinelibrary.wiley.com/doi/10.1111/ddi.13183" target="_blank">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">
                          Fortalecimento de Áreas Protegidas
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={StudiesImages.studies1}
                          alt="Fortalecimento de Áreas Protegidas"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Novembro, 2020</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="https://onlinelibrary.wiley.com/doi/10.1111/ddi.13183" target="_blank">
                          Mapa da Conservação Marinha no Brasil
                        </a>
                      </h2>
                      <p class="mb-4">
                        Esse estudo planeja formas de conservar as regiões marinhas do Brasil em grande escala e identifica áreas prioritárias.
                      </p>
                      <a class="btn btn-primary" href="https://onlinelibrary.wiley.com/doi/10.1111/ddi.13183" target="_blank">
                        Saiba Mais
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="https://ocean.si.edu/conservation/pollution/marine-plastics" target="_blank">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">
                          Plástico nos Oceanos
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={StudiesImages.studies2}
                          alt="Plástico nos Oceanos"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Abril, 2018</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="https://ocean.si.edu/conservation/pollution/marine-plastics" target="_blank">
                          Tudo Sobre o Plástico nos Oceanos
                        </a>
                      </h2>
                      <p class="mb-4">
                        Esse estudo fala sobre a poluição nos oceanos por plásticos. Além de mostrar possíveis soluções, é abordado como os oceanos são poluídos e como afeta o ecossistema.
                      </p>
                      <a class="btn btn-primary" href="https://ocean.si.edu/conservation/pollution/marine-plastics" target="_blank">
                        Saiba Mais
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="https://www.mdpi.com/1424-2818/4/2/224" target="_blank">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">
                          Biodiversidade Marinha
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={StudiesImages.studies3}
                          alt="Biodiversidade Marinha"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Maio, 2012</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="https://www.mdpi.com/1424-2818/4/2/224" target="_blank">
                          A Biodiversidade Marinha e o Aquecimento Global
                        </a>
                      </h2>
                      <p class="mb-4">
                        Esse estudo explora sobre como as mudanças climáticas impoem novas ameaças à biodiversidade marinha e possíveis soluções.
                      </p>
                      <a class="btn btn-primary" href="https://www.mdpi.com/1424-2818/4/2/224" target="_blank">
                        Saiba Mais
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="https://marinedebris.noaa.gov/research/economic-impacts-marine-debris-tourism-dependent-communities" target="_blank">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">
                          Impacto Econômico
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={StudiesImages.studies4}
                          alt="Impacto Econômico"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Agosto, 2023</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="https://marinedebris.noaa.gov/research/economic-impacts-marine-debris-tourism-dependent-communities" target="_blank">
                          O Impacto Econômico do Lixo nas Praias
                        </a>
                      </h2>
                      <p class="mb-4">
                        Este estudo examina como o lixo nas praias influencia os visitantes, afetando negativamente a economia local e os empregos.
                      </p>
                      <a class="btn btn-primary" href="https://marinedebris.noaa.gov/research/economic-impacts-marine-debris-tourism-dependent-communities" target="_blank">
                        Saiba Mais
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  );
};

export default StudiesPage;

const PageContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(120deg, #5a9adf, #ca8ed6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.h5`
  margin-bottom: 2rem;
  text-align: center;
`;
