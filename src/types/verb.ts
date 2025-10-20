export interface Verb {
  id: string;
  infinitive: string;
  translation: string;
  imageUrl: string;
  conjugations: {
    presente: {
      yo: string;
      tu: string;
      el: string;
      nosotros: string;
      vosotros: string;
      ellos: string;
    };
    preterito: {
      yo: string;
      tu: string;
      el: string;
      nosotros: string;
      vosotros: string;
      ellos: string;
    };
    imperfecto: {
      yo: string;
      tu: string;
      el: string;
      nosotros: string;
      vosotros: string;
      ellos: string;
    };
    futuro: {
      yo: string;
      tu: string;
      el: string;
      nosotros: string;
      vosotros: string;
      ellos: string;
    };
    condicional: {
      yo: string;
      tu: string;
      el: string;
      nosotros: string;
      vosotros: string;
      ellos: string;
    };
  };
}
