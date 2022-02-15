import React from 'react';
import { Course, Blog } from 'components/molecules';
import styles from './resume.module.scss';
import Container from '../../../node_modules/react-bootstrap/esm/Container';

const Resume = () => {
  return (
    <Container>
      <div className={styles.principal}>
        <div className={styles.principal__body}>
          <h2 className={styles.title}>Cursos publicados</h2>
          <div className={styles.principal__body__courses}>
            <Course />
            <Course />
            <Course />
          </div>
          <h2 className={styles.title}>Blogs publicados</h2>
          <div className={styles.principal__body__blogs}>
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
        <div className={styles.principal__profiles}>
          <div className={styles.principal__instructor}>
            <div className={styles.profile}>
              <div className={styles.profile__photo}>
                <img
                  src={'../assets/images/instructor/carla.jpg'}
                  alt="profile instructor"
                />
              </div>
              <div className={styles.profile__name}>
                <span>Carla Atena</span>
              </div>
              <div className={styles.profile__profession}>
                <span>Personal Trainer</span>
              </div>
            </div>
            <div className={styles.resumen}>
              <div className={styles.row}>
                <div className={styles.card}>
                  <div className={styles.card__count}>
                    <span>30</span>
                  </div>
                  <div className={styles.card__title}>
                    <span>Clases</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.card__count}>
                    <span>120</span>
                  </div>
                  <div className={styles.card__title}>
                    <span>Inscritos</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.card__count}>
                    <span>35</span>
                  </div>
                  <div className={styles.card__title}>
                    <span>Blogs</span>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.card__count}>
                    <span>500</span>
                  </div>
                  <div className={styles.card__title}>
                    <span>Comentarios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.principal__improvement}>
            <span>Mejores Instructores</span>
            <button>Ver todo</button>
          </div>
          <div className={styles.principal__instructors}>
            <div className={styles.instructors}>
              <div className={styles.instructor}>
                <div className={styles.instructor__profile}>
                  <img src={'../assets/images/instructor/instructor1.jpg'} alt="" />
                  <div className={styles.instructor__description}>
                    <span>Pedro Gonzales</span>
                    <span>Nutricionista</span>
                  </div>
                </div>
                <div className={styles.instructor__date}>
                  <span>20 Diciembre 2021</span>
                </div>
              </div>
              <div className={styles.instructor}>
                <div className={styles.instructor__profile}>
                  <img src={'../assets/images/instructor/instructor2.jpg'} alt="" />
                  <div className={styles.instructor__description}>
                    <span>Juan Carma</span>
                    <span>Praparador Fitness</span>
                  </div>
                </div>
                <div className={styles.instructor__date}>
                  <span>20 Diciembre 2021</span>
                </div>
              </div>
              <div className={styles.instructor}>
                <div className={styles.instructor__profile}>
                  <img src={'../assets/images/instructor/instructor3.jpg'} alt="" />
                  <div className={styles.instructor__description}>
                    <span>Carlos Salas</span>
                    <span>Suplementación</span>
                  </div>
                </div>
                <div className={styles.instructor__date}>
                  <span>20 Diciembre 2021</span>
                </div>
              </div>
              <div className={styles.instructor}>
                <div className={styles.instructor__profile}>
                  <img src={'../assets/images/instructor/instructor4.jpg'} alt="" />
                  <div className={styles.instructor__description}>
                    <span>Pedro Gonzales</span>
                    <span>Nutricionista</span>
                  </div>
                </div>
                <div className={styles.instructor__date}>
                  <span>20 Diciembre 2021</span>
                </div>
              </div>
              <div className={styles.instructor}>
                <div className={styles.instructor__profile}>
                  <img src={'../assets/images/instructor/instructor5.jpg'} alt="" />
                  <div className={styles.instructor__description}>
                    <span>Pedro Gonzales</span>
                    <span>Nutricionista</span>
                  </div>
                </div>
                <div className={styles.instructor__date}>
                  <span>20 Diciembre 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default React.memo(Resume);
