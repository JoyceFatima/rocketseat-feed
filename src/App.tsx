import ptBR from 'date-fns/locale/pt-BR';
import setDefaultOptions from 'date-fns/setDefaultOptions';

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./styles/global.css";
import styles from "./App.module.css";

//author: { avatar_url: "", name: "", role: ""}

//publishedAt: date: Date

//description: String

//liked: Number

setDefaultOptions({ locale: ptBR })

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JoyceFatima.png",
      name: "Joyce de Fátima",
      role: "Software Engineer",
    },
    publishedAt: new Date("2023-01-31 10:00:00"),
    descriptions: [
      { type: "paragraph", content: "👩🏻‍🚀 I’m FullStack Developer" },
      {
        type: "paragraph",
        content:
          "🌱 I’m currently learning Algorithm in Typescript Language, ReactJS | NodeJs | NestJs",
      },
      {
        type: "paragraph",
        content: "💬 Ask me about anything, I am happy to help",
      },
      { type: "link", content: "https://github.com/JoyceFatima" },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Rocketseat.png",
      name: "Rocketseat",
      role: "Plataforma de educação em tecnologia 🚀",
    },
    publishedAt: new Date("2023-01-20 20:00:00"),
    descriptions: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto open soruce para a comunidade. É um projeto que fizemos no NLW SETUP, evento da Rocketseat. O nome do projeto é Habits 🚀",
      },
      { type: "link", content: "https://github.com/JoyceFatima/nlw-setup" },
    ]
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                description={post.descriptions}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
