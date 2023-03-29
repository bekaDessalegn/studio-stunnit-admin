import type { NextPage } from 'next'
import Projects from './projects/index'
import apiUrl from '../config'

const Home: NextPage = (projects) => {

  return (
    <>
      <Projects projects={projects} />
    </>
  )
}

export async function getStaticProps() {
  try {
    let res = await fetch(`${apiUrl}/projects`);
    let projects = await res.json();
    return {
      props: {
        projects: projects,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        projects: [],
        error: error
      }
    };
  }
}

export default Home