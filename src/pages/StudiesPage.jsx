import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import placeholder from "../../public/deep-ocean.png";

const StudiesPage = () => {
  const [cards, setCards] = useState([
    {
      flipped: false,
      value: 25,
      label: "Estudos Publicados",
      description: "Conteúdo do estudo",
    },
    {
      flipped: false,
      value: "$1.5M",
      label: "Financiamento Total",
      description: "Conteúdo do estudo",
    },
    {
      flipped: false,
      value: "200+",
      label: "Colaboradores",
      description: "Conteúdo do estudo",
    },
  ]);

  const handleFlip = (index) => {
    const newCards = [...cards];
    newCards[index].flipped = !newCards[index].flipped;
    setCards(newCards);
  };

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
                  <p class="text-secondary m-0">Happy Customers</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">1890+</h5>
                  <p class="text-secondary m-0">Issues Solved</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">250K</h5>
                  <p class="text-secondary m-0">Finished Projects</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="text-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary mb-3 mx-auto bsb-circle"></div>
                  <h5 class="display-6 fw-bold m-1">786+</h5>
                  <p class="text-secondary m-0">Awwwards Winning</p>
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
                      <a href="#!">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">
                          Sports
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={placeholder}
                          alt="Sports"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Nov 11, 2022</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="#!">
                          Useful Skateboarding Tips For Beginners
                        </a>
                      </h2>
                      <p class="mb-4">
                        Learning how to skateboard can be a simultaneously
                        exciting and terrifying experience. Explore the 20 top
                        tips for beginner skaters.
                      </p>
                      <a class="btn btn-primary" href="#!" target="_self">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="#!">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">
                          Travel
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={placeholder}
                          alt="Travel"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Oct 9, 2022</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="#!">
                          Strange Facts About Hot Air Balloons
                        </a>
                      </h2>
                      <p class="mb-4">
                        You think the Wright Brothers were impressive? Hot air
                        balloons were carrying people through the air almost a
                        century before the Wright Brothers were even born.
                      </p>
                      <a class="btn btn-primary" href="#!" target="_self">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="row align-items-center gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="#!">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 start-0 m-3">
                          Photography
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={placeholder}
                          alt="Photography"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Sep 17, 2022</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="#!">
                          Reasons Why Photography Is an Art Form
                        </a>
                      </h2>
                      <p class="mb-4">
                        Before the first photo was captured in the 18th century,
                        lifelike images of what the eyes can see could only be
                        made by talented artists.
                      </p>
                      <a class="btn btn-primary" href="#!" target="_self">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                  <div class="col-xs-12 col-md-6">
                    <div class="img-wrapper position-relative bsb-hover-push">
                      <a href="#!">
                        <span class="badge rounded-pill text-bg-warning position-absolute top-0 end-0 m-3">
                          Food
                        </span>
                        <img
                          class="img-fluid rounded w-100 h-100 object-fit-cover"
                          loading="lazy"
                          src={placeholder}
                          alt="Food"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div>
                      <p class="text-secondary mb-1">Aug 23, 2022</p>
                      <h2 class="h1 mb-3">
                        <a class="link-dark text-decoration-none" href="#!">
                          Benefits of Having a Heavy Breakfast Every Morning
                        </a>
                      </h2>
                      <p class="mb-4">
                        Running late for work or school? "Let’s skip the
                        breakfast!" Well, this might sound like the most ideal
                        idea to save time when you are on the run.
                      </p>
                      <a class="btn btn-primary" href="#!" target="_self">
                        Read More
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
`;

const Subtitle = styled.h5`
  margin-bottom: 2rem;
  text-align: center;
`;
