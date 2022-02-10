import React from 'react';
import { Course } from 'components/molecules';
import './resume.module.scss';

const Resume = () => {
  return (
    <div className="principal">
      <div className="principal__body">
        <h2 className="title">Cursos publicados</h2>
        <div className="principal__body__courses">
          <Course />
          <Course />
          <Course />
        </div>
        <h2 className="title">Blogs publicados</h2>
        <div className="principal__body__blogs">
          <div className="blog">
            <div className="blog__description">
              <span className="title">Caminar es saludable</span>
              <span className="comments">
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                Nulla porttitor accumsan tincidunt...
              </span>
              <div className="details">
                <span className="stars">
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                </span>
                <a href="#">Ver mas</a>
              </div>
            </div>
            <div className="blog__image">
              <img src={'./../../../public/assets/images/instructor/blog1.jpg'} alt="" />
            </div>
          </div>
          <div className="blog">
            <div className="blog__description">
              <span className="title">Entrenamiento de biceps</span>
              <span className="comments">
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                Nulla porttitor accumsan tincidunt...
              </span>
              <div className="details">
                <span className="stars">
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                </span>
                <a href="#">Ver mas</a>
              </div>
            </div>
            <div className="blog__image">
              <img src={'./../../../public/assets/images/instructor/blog2.jpg'} alt="" />
            </div>
          </div>
          <div className="blog">
            <div className="blog__description">
              <span className="title">Caminar es saludable</span>
              <span className="comments">
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                Nulla porttitor accumsan tincidunt...
              </span>
              <div className="details">
                <span className="stars">
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                </span>
                <a href="#">Ver mas</a>
              </div>
            </div>
            <div className="blog__image">
              <img src={'./../../../public/assets/images/instructor/blog3.jpg'} alt="" />
            </div>
          </div>
          <div className="blog">
            <div className="blog__description">
              <span className="title">Caminar es saludable</span>
              <span className="comments">
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                Nulla porttitor accumsan tincidunt...
              </span>
              <div className="details">
                <span className="stars">
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                  <img
                    className="star"
                    src={'./../../../public/assets/icons/instructor/star.svg'}
                    alt=""
                  />
                </span>
                <a href="#">Ver mas</a>
              </div>
            </div>
            <div className="blog__image">
              <img src={'./../../../public/assets/images/instructor/blog4.jpg'} alt="" />
            </div>
          </div>
        </div>
        <div className="principal__body__courses">
          <div className="courses">
            <div className="video"></div>
          </div>
        </div>
      </div>
      <div className="principal__profiles">
        <div className="principal__instructor">
          <div className="profile">
            <div className="profile__photo">
              <img
                src={'./../../../public/assets/images/instructor/carla.jpg'}
                alt="profile instructor"
              />
            </div>
            <div className="profile__name">
              <span>Carla Atena</span>
            </div>
            <div className="profile__profession">
              <span>Personal Trainer</span>
            </div>
          </div>
          <div className="resumen">
            <div className="row">
              <div className="card">
                <div className="card__count">
                  <span>30</span>
                </div>
                <div className="card__title">
                  <span>Clases</span>
                </div>
              </div>
              <div className="card">
                <div className="card__count">
                  <span>120</span>
                </div>
                <div className="card__title">
                  <span>Inscritos</span>
                </div>
              </div>
              <div className="card">
                <div className="card__count">
                  <span>35</span>
                </div>
                <div className="card__title">
                  <span>Blogs</span>
                </div>
              </div>
              <div className="card">
                <div className="card__count">
                  <span>500</span>
                </div>
                <div className="card__title">
                  <span>Comentarios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="principal__improvement">
          <span>Mejores Instructores</span>
          <button>Ver todo</button>
        </div>
        <div className="principal__instructors">
          <div className="instructors">
            <div className="instructor">
              <div className="instructor__profile">
                <img
                  src={'./../../../public/assets/images/instructor/instructor1.jpg'}
                  alt=""
                />
                <div className="instructor__description">
                  <span>Pedro Gonzales</span>
                  <span>Nutricionista</span>
                </div>
              </div>
              <div className="instructor__date">
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className="instructor">
              <div className="instructor__profile">
                <img
                  src={'./../../../public/assets/images/instructor/instructor2.jpg'}
                  alt=""
                />
                <div className="instructor__description">
                  <span>Juan Carma</span>
                  <span>Praparador Fitness</span>
                </div>
              </div>
              <div className="instructor__date">
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className="instructor">
              <div className="instructor__profile">
                <img
                  src={'./../../../public/assets/images/instructor/instructor3.jpg'}
                  alt=""
                />
                <div className="instructor__description">
                  <span>Carlos Salas</span>
                  <span>Suplementación</span>
                </div>
              </div>
              <div className="instructor__date">
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className="instructor">
              <div className="instructor__profile">
                <img
                  src={'./../../../public/assets/images/instructor/instructor4.jpg'}
                  alt=""
                />
                <div className="instructor__description">
                  <span>Pedro Gonzales</span>
                  <span>Nutricionista</span>
                </div>
              </div>
              <div className="instructor__date">
                <span>20 Diciembre 2021</span>
              </div>
            </div>
            <div className="instructor">
              <div className="instructor__profile">
                <img
                  src={'./../../../public/assets/images/instructor/instructor5.jpg'}
                  alt=""
                />
                <div className="instructor__description">
                  <span>Pedro Gonzales</span>
                  <span>Nutricionista</span>
                </div>
              </div>
              <div className="instructor__date">
                <span>20 Diciembre 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Resume);
